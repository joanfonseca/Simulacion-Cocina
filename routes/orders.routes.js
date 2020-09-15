const express = require('express');
const orderController = require('./../controller/orderController');

var router = express.Router();

router.get('/', orderController.showOrders);

router.get('/views', orderController.showOrdersViews);

router.post('/receive', orderController.receiveOrder);

router.get('/deliver',orderController.deliverOrder);

module.exports = router;