const express = require('express');
const orderController = require('./../controller/orderController');

var router = express.Router();

router.get('/', orderController.showOrders);

router.post('/save', orderController.receiveOrder);

router.delete('/delete',orderController.deleteOrder);

module.exports = router;