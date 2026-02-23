
Primero se implementa un pool de conexiones. Luego se separa la logica de base de datos en un modulo independiente. Esto es el enfoque correcto para aplicaciones Express en produccion.

---

POOL DE CONEXIONES (Oracle como contexto)

El pool se crea una sola vez al iniciar la aplicacion y se reutiliza en cada request.

Archivo: `db/pool.js`

```js
const oracledb = require("oracledb");

let pool;

async function initPool() {
    pool = await oracledb.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        connectString: process.env.DB_CONNECT_STRING,
        poolMin: 1,
        poolMax: 10,
        poolIncrement: 1
    });
}

function getPool() {
    if (!pool) {
        throw new Error("Pool no inicializado");
    }
    return pool;
}

module.exports = {
    initPool,
    getPool
};
```

Puntos clave:

* El pool se crea una sola vez.
* `poolMin`, `poolMax` controlan concurrencia.
* No se usa `createConnection` por request.

---

SERVICIO DE BASE DE DATOS (logica separada)

Archivo: `db/sysdate.service.js`

```js
const { getPool } = require("./pool");

async function getSysdate() {
    let connection;

    try {
        const pool = getPool();
        connection = await pool.getConnection();

        const result = await connection.execute(
            "SELECT sysdate FROM dual"
        );

        return result.rows;

    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

module.exports = {
    getSysdate
};
```

Puntos clave:

* La ruta no conoce SQL ni conexiones.
* El servicio devuelve datos, no respuestas HTTP.
* La conexion se devuelve al pool con `close()`.

---

USO EN EXPRESS

Archivo: `app.js` o `index.js`

```js
const express = require("express");
const { initPool } = require("./db/pool");
const { getSysdate } = require("./db/sysdate.service");

const app = express();
const port = process.env.PORT || 3000;

async function bootstrap() {
    try {
        await initPool();

        app.get("/", async (req, res) => {
            try {
                const rows = await getSysdate();

                res.json({
                    ok: true,
                    rows
                });

            } catch (err) {
                console.error(err);
                res.status(500).json({
                    ok: false,
                    error: err.message
                });
            }
        });

        app.listen(port, () => {
            console.log(`Server listening on port ${port}`);
        });

    } catch (err) {
        console.error("Error inicializando la aplicacion", err);
        process.exit(1);
    }
}

bootstrap();
```

Puntos clave:

* El pool se inicializa antes de levantar el servidor.
* Si falla el pool, la app no arranca.
* La ruta solo orquesta la llamada al servicio.

---

FLUJO FINAL

1. La app arranca.
2. Se crea el pool de conexiones.
3. Express empieza a escuchar requests.
4. Llega un GET `/`.
5. El controlador llama al servicio.
6. El servicio toma una conexion del pool.
7. Ejecuta el SQL.
8. Devuelve la conexion al pool.
9. Express responde al cliente.

---

VENTAJAS DE ESTA ARQUITECTURA

* Rendimiento superior (no abrir/cerrar conexiones constantemente).
* Separacion clara de responsabilidades.
* Facil de testear.
* Escalable con PM2 o cluster.
* Facil de mantener cuando crece el numero de queries.

Si quieres, el siguiente paso natural es:

* Agregar variables de entorno con dotenv.
* Manejo centralizado de errores.
* Reintentos y timeouts.
* Cerrar el pool correctamente al apagar la app (SIGINT / SIGTERM).