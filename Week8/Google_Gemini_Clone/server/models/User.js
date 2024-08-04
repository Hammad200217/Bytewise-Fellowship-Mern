const Mongoose = require('mongoose');

const userSchema = new Mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const userModel = Mongoose.model('Users', userSchema);
module.exports = userModel;