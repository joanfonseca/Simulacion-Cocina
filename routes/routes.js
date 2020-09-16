const express = require('express');
var app = express();

app.use('/orders', require('./orders.routes'));
app.use('/dishes', require('./dishes.routes'));

module.exports = app;