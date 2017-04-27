var express = require('express');
var router = express.Router();
var API = require('../API/products.js')

router.get('/:id', (req, res, next) => {
  console.log(API);
  let { id } = req.params;
  API.parser(id).then(data => res.json(data));
});

module.exports = router;
