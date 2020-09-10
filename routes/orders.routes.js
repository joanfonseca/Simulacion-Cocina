const express = require('express');
const orderController = require('./../controller/orderController');

var router = express.Router();

router.get('/', orderController.showOrders);

router.post('/save', orderController.saveOrder);

module.exports = router;