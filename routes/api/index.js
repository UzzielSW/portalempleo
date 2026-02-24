var express = require('express');
var router = express.Router();

/* GET api status. */
router.get('/', function (req, res, next) {
  res.json({
    status: 'success',
    message: 'API del Portal de Empleo activa y respondiendo.',
    version: '1.0.0'
  });
});

module.exports = router;
