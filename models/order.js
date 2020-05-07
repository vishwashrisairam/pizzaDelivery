const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {
            _product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products'
            },
            quantity: {type:Number,default: 1}
        }
    ],
    totalPrice: String,
    feedbackRating: Number,
    status: String,
    date: Date
});

module.exports = mongoose.model('Order', orderSchema);
