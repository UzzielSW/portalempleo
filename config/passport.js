const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const oracledb = require('oracledb');
const crypto = require('crypto');
const db = require('../DB/db_access');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;


// PASSPORT LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'usuario_cedula',
    passwordField: 'contrasena',
    passReqToCallback: true
}, async (req, username, password, done) => {

    const pss = crypto.createHash('sha256').update(password).digest('hex');
    const sql = `BEGIN PACK_UPDOC_SELECT.LOGIN_USERNAME(:P_USUARIO,:P_PASS,:P_CURSOR); END;`;

    const values = {
        P_USUARIO: username,
        P_PASS: pss,
        P_CURSOR: { type: oracledb.CURSOR, dir: oracledb.BIND_OUT }
    };

    let connection;

    try {
        connection = await oracledb.getConnection(db.db_up_admsis_desarollo);
        const result = await connection.execute(sql, values);
        const resultSet = result.outBinds.P_CURSOR;
        const rows = [];
        let row;
        while ((row = await resultSet.getRow())) {
            rows.push(row);
        }
        await resultSet.close();

        if (rows.length > 0 && rows[0].APLICACION == 890) {
            // Guardamos solo lo necesario como objeto user
            const user = {
                cedula: rows[0].CEDULA,
                id_user: rows[0].ID_USER,
                tipo_usuario: req.body.tipo_usuario
            };
            return done(null, user);
        } else {
            return done(null, false, { message: 'Sin acceso o datos incorrectos' });
        }

    } catch (err) {
        return done(err);
    } finally {
        if (connection) await connection.close();
    }
}));

// SERIALIZAR usuario en la sesión
passport.serializeUser((user, done) => {
    done(null, user.cedula); // Puedes cambiar esto si usas ID
});

// DESERIALIZAR usuario desde la sesión
passport.deserializeUser(async (cedula, done) => {
    // Aquí puedes hacer una consulta a Oracle si necesitas recargar info
    done(null, { cedula }); // Simplificado
});
