const mongoose = require ('mongoose');
const goalSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add a Email']
    }
,
    passward: {
        type: String,
        required: [true, 'Please add a Passward'],
        unique: true

    }
    ,
    name: {
        type: String,
        required: [true, 'Please add a Name']
    }
},
{
    timestamps: true,
}
);
module.exports = mongoose.model('User', userSchema)
