const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const oracledb = require('oracledb');
// const crypto = require('crypto');
const db = require('../DB/db_access');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

passport.use(new LocalStrategy(
  {
    usernameField: 'usuario_cedula',
    passwordField: 'contrasena',
    passReqToCallback: true
  },
  async (req, username, password, done) => {

    const sql = `BEGIN PACK_PORTAL_EMPLEO.CONSULTAR_ESTUDIANTE(:WCEDULA,:VAR_RESPONSE,:VAR_RESPONSE_MSJ,:WCURSOR); END;`;
    console.log(password);
    const values = {

      WCEDULA: username,
      VAR_RESPONSE: {
        type: oracledb.STRING,
        dir: oracledb.BIND_OUT,
        maxSize: 200
      },
      VAR_RESPONSE_MSJ: {
        type: oracledb.STRING,
        dir: oracledb.BIND_OUT,
        maxSize: 500
      },
      WCURSOR: {
        type: oracledb.CURSOR,
        dir: oracledb.BIND_OUT
      }
    };
    let connection;

    try {
      connection = await oracledb.getConnection(db.db_portalempleo);
      const result = await connection.execute(sql, values);
      console.log(result);
      const resultSet = result.outBinds.WCURSOR;
      const rows = [];
      let row;
      while ((row = await resultSet.getRow())) {
        rows.push(row);
      }
      await resultSet.close();

      if (rows.length > 0) {
        // Guardamos solo lo necesario como objeto user
        const user = {
          cedula: rows[0].CEDULA,
          id_estudiante: rows[0].ID_ESTUDIANTE,
          nombres: rows[0].NOMBRES,
          apellidos: rows[0].APELLIDOS,
          cod_facultad: rows[0].COD_FACULTAD
          // tipo_usuario: req.body.tipo_usuario
        };

        console.log(user);
        return done(null, user);
      }
      else {
        return done(null, false, { message: 'Sin acceso o datos incorrectos' });
      }
    } catch (err) {
      // ! ajustar el log
      console.log(err);
      return done(err); // ERROR de servidor
    } finally {
      if (connection) await connection.close();
    }
  }
));

// ============ SERIALIZACIÓN ============
passport.serializeUser((user, done) => {
  done(null, user); // Solo guardamos el ID en la cookie de sesión
});

passport.deserializeUser(async (id, done) => {
  try {
    done(null, user); // req.user = usuario completo
  } catch (err) {
    done(err, null);
  }
});