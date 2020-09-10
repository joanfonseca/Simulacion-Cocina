const express = require('express');
var app = express();

app.use('/orders', require('./orders.routes'));

module.exports = app;