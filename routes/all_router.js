const { Router } = require('express');
var router = Router();
const oracledb = require('oracledb');
const passport = require('passport');
const { iniciarSesion, login } = require('../controllers/all_controllers');
const Swal = require('sweetalert2')
const direcciones_panama = require('../data/direcciones_panama.json');

// Activa el modo thick del modulo oracledb
try {
    oracledb.initOracleClient({ libDir: process.env.PATH_CLIENT_ORACLE });
} catch (err) {
    console.error('Error al inicializar el cliente Oracle:', err);
}

require('../config/passport'); // Tu estrategia local

const { validarSesion } = require("../middlewares/validarSesion");

//-------------------------------- Router: Public Pages ------------------------------

router.get('/', (req, res) => {
    console.log('render: index');
    res.render('public/index', { title: 'Portal Empleo UP' });
});

router.get('/login', (req, res) => {
    console.log('render: login');
    res.render('public/login', { title: 'Iniciar Sesión' });
});

router.get('/register', (req, res) => {
    console.log('render: register');
    res.render('public/register', { title: 'Registrarse', direcciones_panama });
});

router.get('/contact', (req, res) => {
    console.log('render: contact');
    res.render('public/contact', { title: 'Contacto' });
});

router.get('/requirements', (req, res) => {
    console.log('render: requirements');
    res.render('public/requirements', { title: 'Requisitos para registrarse' });
});

//===================================================================================-

//-------------------------------- Router: Candidate Pages ---------------------------
router.get('/candidate/profile', (req, res) => {
	console.log('render: candidate profile');
	res.render('candidate/profile', { title: 'Perfil del Candidato' });
});

router.get('/candidate/vacancies', (req, res) => {
	console.log('render: candidate vacancies');
	res.render('candidate/vacancies', { title: 'Vacantes - Candidato' });
});

router.get('/candidate/vacancies/1', (req, res) => {
	console.log('render: candidate vacancies details');
	res.render('candidate/vacancies_details', { title: 'Detalles de Vacante - Candidato' });
});

router.get('/candidate/applications', (req, res) => {
	console.log('render: candidate applications');
	res.render('candidate/applications', { title: 'Mis Postulaciones - Candidato' });
});

//===================================================================================-


//-------------------------------- Router: Employer Pages ---------------------------
router.get('/employer/profile', (req, res) => {
    console.log('render: employer profile');
    res.render('employer/profile', { title: 'Perfil del Empleador' });
});

router.get('/employer/vacancies', (req, res) => {
    console.log('render: employer vacancies');
    res.render('employer/vacancies', { title: 'Gestion de Vacantes' });
});


router.get('/employer/candidates', (req, res) => {
    console.log('render: employer candidates');
    res.render('employer/candidates', { title: 'Gestion de Candidatos' });
});

//===================================================================================-


//-------------------------------- Router: Administrator Pages ---------------------------
router.get('/administrator/dashboard', (req, res) => {
    console.log('render: administrator dashboard');
    res.render('administrator/dashboard', { title: 'Panel de Administrador' });
});

router.get('/administrator/convenios', (req, res) => {
    console.log('render: administrator convenios');
    res.render('administrator/convenios', { title: 'Control de Convenios - Administrador' });
});

router.get('/administrator/users', (req, res) => {
    console.log('render: administrator users');
    res.render('administrator/users', { title: 'Control de Usuarios - Administrador' });
});
//===================================================================================-


// =====================================================
// Ruta de login: Esta ruta es para verificar el login cedula y contraseña.
// =====================================================

router.post('/login', passport.authenticate('local', {
    failureRedirect: '/',
    failureFlash: true
}), (req, res) => {
    // req.session.user = req.user.id;
    // req.session.cedula = req.user.cedula;
    // req.session.cedula_con_cero = req.user.cedula_con_cero;
    // req.session.admintotal = req.user.tipo_usuario;

    // TODO: redirigir al dashboard real según el tipo de usuario.
    // Por ahora, evitamos que la petición quede "colgada".
    return res.redirect('/');
});


module.exports = router;
