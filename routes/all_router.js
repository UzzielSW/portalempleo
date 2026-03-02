const { Router } = require('express');
var router = Router();
const oracledb = require('oracledb');
const passport = require('passport');
const { iniciarSesion, login } = require('../controllers/all_controllers');


// Activa el modo thick del modulo oracledb
try {
    oracledb.initOracleClient({ libDir: process.env.PATH_CLIENT_ORACLE });
} catch (err) {
    console.error('Error al inicializar el cliente Oracle:', err);
}

require('../config/passport'); // Tu estrategia local

const { validarSesion } = require("../middlewares/validarSesion");

router.get('/', (req, res) => {
    console.log('render: index');
    res.render('index', { title: 'Portal Empleo UP' });
});

router.get('/login', (req, res) => {
    console.log('render: login');
    res.render('login', { title: 'Login' });
});



/*
=====================================================
Ruta de login
=====================================================
Esta ruta es para verificar el login cedula y contra-
seña.
=====================================================
*/
// router.post('/log_in', login);
router.post('/log_in', passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
}), (req, res) => {
    // Aquí puedes guardar info extra en la sesión si quieres
    // req.session.cedula = req.user.cedula;
    // req.session.cedula_con_cero = req.user.cedula_con_cero;
    // req.session.admintotal = req.user.tipo_usuario;
    // req.session.user = req.user.id;

    // TODO: redirigir al dashboard real según el tipo de usuario.
    // Por ahora, evitamos que la petición quede "colgada".
    return res.redirect('/');
});


module.exports = router;
