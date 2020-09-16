const express = require('express');
const disheController = require('./../controller/disheController');

var router = express.Router();

router.get('/', disheController.showDishes);
router.post('/create', disheController.createDishe);

module.exports = router;