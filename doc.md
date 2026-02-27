### Comandos
express --view=pug portalempleo
Para los modales de confirmacion y avisos: sweetalert2

Configuracion:
Variable del sistema: TNS_ADMIN

### NPM - Node Package Manager
- Paquetes Locales (Proyecto actual): npm list --depth=0
- Paquetes Globales: npm list -g --depth=0
- Verificar un paquete específico: npm list <nombre-del-paquete>
- Ver paquetes desactualizados: npm outdated

### ¿Qué debe hacer `app.js` y `bin/wwwno`?

- **`app.js`** (la “aplicación”):
  - Crear la instancia de Express: `const app = express();`
  - Configurar middlewares (`express.json()`, CORS, sesiones, etc.)
  - Definir rutas (`app.use('/api', apiRouter);`)
  - Manejo de errores.
  - Al final: `module.exports = app;`
  - **No debería encargarse de `http.createServer()` ni de `server.listen()`**.

- **`bin/www`** (el “lanzador”):
  - Cargar la app: `const app = require('../app');`
  - Leer el puerto: `const port = process.env.PORT || '3000';`
  - Crear el servidor HTTP: `const server = http.createServer(app);`
  - Llamar a `server.listen(port);`
  - Manejar eventos de error, logs de que el servidor está escuchando, etc.

En otros proyectos, en vez de `app.js` + `bin/www`, la gente usa:
- **`index.js`** o **`server.js`** como archivo único que hace ambas cosas (configura Express y hace `listen`). Es solo una convención de nombres.


### Regla de arquitectura correcta

**controllers/**

* No importa express
* Solo contiene lógica

**routes/**

* Importa Router de express
* Define endpoints
* Conecta routes con controllers

**app.js**

* Importa express
* Usa las rutas


# Variables de entorno para la aplicación Express

- Temp

    ## Cuándo Passport es innecesario o incluso mala elección

    No lo uses si:

    - Solo necesitas JWT
    - Solo tienes login con email/password
    - Tu API es stateless
    - Quieres máxima simplicidad y control

    ---

    ## Qué usan la mayoría de APIs modernas

    La arquitectura más común hoy:

    - bcrypt
    - jsonwebtoken
    - middleware propio
    - sin Passport

    Especialmente en:

    - REST APIs
    - microservicios
    - SPAs (React, Vue, etc.)
    - mobile backends

    ---

    ## Recomendación

    Usa implementación manual con:

    - bcrypt
    - jsonwebtoken
    - middleware propio

    Usa Passport solo si necesitas:

    - OAuth
    - múltiples proveedores externos
    - autenticación compleja multi-estrategia


---
