const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
    name : String,
    type: String,
    price: String,
    status : {
        type : String,
        default : 'pendiente'
    }
})

module.exports = mongoose.model('OrderView', orderSchema);
