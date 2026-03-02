// TNS_ADMIN se carga desde .env y debe estar disponible antes de cargar oracledb para que el driver pueda usar el wallet
const oracledb = require('oracledb');
// If THICK mode is needed, uncomment the following line.
// oracledb.initOracleClient();
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function consulta() {
  console.log("executing runApp");
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: process.env.ORA_USER,
      password: process.env.ORA_PASSWORD,
      connectString: process.env.DB_CONNECT_STRING,
      configDir: process.env.TNS_ADMIN,
      walletLocation: process.env.TNS_ADMIN,
      walletPassword: process.env.WALLET_PASSWORD
    });

    console.log("Successfully connected to Oracle Databas");

    const result = await connection.execute("select * from dual");

    console.log("Successfully consult to Database");

    console.log("Query rows", result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      ok: false,
      error: err.message
    });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}


module.exports = { consulta };