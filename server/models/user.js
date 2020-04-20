const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        [
            {
                type: String,
                required: true
            }
        ],
    },
    phone: {
        type: String,
        required: true
    },
    payment: [],
    cart: []
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);