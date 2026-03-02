// 1) Carga de variables de entorno (configuración global de la app)
require('dotenv').config();

// 2) Carga de módulos de terceros y nativos (dependencias reutilizables)
//    Aquí van siempre primero los módulos externos (express, morgan, etc.)
//    y luego, más abajo, los módulos propios del proyecto (rutas, config, etc).
//bcrypt usarlo en produccion
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash'); //opcional
// 3) Configuración de estrategias de autenticación, conexión a BD, etc.
//    Idealmente aquí se inicializa todo lo "core" de la app (passport, ORM, conexiones).
require('./config/passport'); // Tu estrategia local

// 4) Carga de módulos internos de la aplicación (rutas, middlewares propios, etc.)
var all_router = require('./routes/all_router');

// 5) Creación de la instancia principal de Express
//    A partir de aquí usamos `app` para registrar configuración y middlewares.
var app = express();

// 6) Configuración de la vista (view engine) y directorios de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// 7) Registro de middlewares globales
//    Orden típico: logs, parseo de body, cookies, sesiones, estáticos, passport, etc.
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: '123456', // cambia esto por algo más seguro
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // cambia a true si usas HTTPS
}));

app.use(flash());

// Inicializar Passport
app.use(passport.initialize());
app.use(passport.session()); // Habilita sesiones persistentes

// 8) Definición de rutas de la aplicación
//    Primero rutas públicas/básicas, luego rutas protegidas o módulos grandes.
app.use('/', all_router);

console.log('succefully configs.');
// 9) Manejo de errores y middlewares de cierre
//    Siempre deben ir al final, después de TODAS las rutas.

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error(`Ruta no encontrada: ${req.originalUrl}`);
  err.status = 404;

  // Mostrar en consola con más contexto
  console.error(`[${new Date().toISOString()}] 404 - ${err.message}`);

  // Redirigir al login
  res.redirect('/');
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 10) Exportación de la app para que otros módulos (bin/www) la levanten
module.exports = app;
