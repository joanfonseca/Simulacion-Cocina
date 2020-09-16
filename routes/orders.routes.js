const express = require('express');
const orderController = require('./../controller/orderController');
const {doCook} = require('../middleware/middleware');

var router = express.Router();

router.get('/', orderController.showOrders);

router.get('/views', orderController.showOrdersViews);

router.post('/receive', doCook,orderController.receiveOrder);

router.get('/deliver',orderController.deliverOrder);

module.exports = router;