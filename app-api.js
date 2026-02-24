require('dotenv').config();

// cargar modulos y definicion de variables
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexApiRouter = require('./routes/api/index');
// var usersApiRouter = require('./routes/api/users');

//creacion de instancia de la API
var app = express();

// Middlewares básicos
app.use(logger('dev'));
app.use(express.json()); // Crucial para recibir JSON
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Configuracion de CORS (Permitir solicitudes del frontend en desarrollo)
app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Puertos por defecto de Vite
    credentials: true
}));

// Servir archivos estáticos (opcional en la API pero útil para subir archivos)
app.use(express.static(path.join(__dirname, 'public')));

// Definicion de rutas de la API
app.use('/api', indexApiRouter);
// app.use('/api/users', usersApiRouter);

// Manejo de errores para la API

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler (responde con JSON)
app.use(function(err, req, res, next) {
  // Solo dar detalles del error en desarrollo
  const errorDetails = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: errorDetails
  });
});

module.exports = app;
