var express = require('express');
var router = express.Router();

// Activa el modo thick del modulo oracledb
try {
    oracledb.initOracleClient({ libDir: process.env.PATH_CLIENT_ORACLE });
} catch (err) {
    console.error('Error al inicializar el cliente Oracle:', err);
}


const { iniciarSession, login } = require('../controllers/all_controllers');
;

module.exports = router;
