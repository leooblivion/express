var express = require("express");

var controller = require('../controllers/index.controller');

var router = express.Router();

router.get('/', controller);

module.exports = router;