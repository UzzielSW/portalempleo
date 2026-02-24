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