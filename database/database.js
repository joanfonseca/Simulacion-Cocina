var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/kitchen', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));