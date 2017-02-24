var mongoose = require('mongoose');

var exampleSchema = mongoose.Schema({
    name: String,
    age: {
        type: Number,
        required: [true, 'where is your age ?']
    }
});

module.exports = mongoose.model('Example', exampleSchema);