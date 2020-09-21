var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://felipe8:12345678Ff@dbcloster.sp48y.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));