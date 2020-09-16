const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    id_order : String,
    dishes : [{
        name : String,
        dishe_type: String,
        price: String
    }]
})

module.exports = mongoose.model('Order', orderSchema);
