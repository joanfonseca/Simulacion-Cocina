const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var disheSchema = new Schema({
    id : String,
    name : String,
    dishe_type : String,
    price: String
})

module.exports = mongoose.model('Dishe', disheSchema);