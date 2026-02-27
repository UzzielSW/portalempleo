require("dotenv").config();
const { consulta } = require("./cod/db");
const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  let consulta_db = await consulta();

  console.log(consulta_db);
  res.send("hola");

// console.log("Query rows", result.rows);
});

app.listen(port, () => {
  console.log(`Example app listening on: http://localhost:${port}`);
});
