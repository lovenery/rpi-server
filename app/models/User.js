var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    facebook: {
        id: String,
        name: String,
        email: String,
        gender: String,
        verified: Boolean
    }
});

module.exports = mongoose.model('User', userSchema);