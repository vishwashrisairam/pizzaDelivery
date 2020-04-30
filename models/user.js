const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const addressSchema = new mongoose.Schema({
    addressLine1 : {type: String, required: true},
    addressLine2 : {type: String, required: false},
    city : {type: String , requried : true },
    state : {type: String, required: true},
    zip : {type: Number, required: true},
    country: {type: String, required:true}
});



const paymentSchema = new mongoose.Schema({
    paymentType : {type:String,required:true},
    preferredPayment : {type:Boolean,required : true,default:false},
    nameOnCard: {type:String, required:true},
    cardNumber : {type :Number, requried:true},
    expiry:{type:String, requried:true}

});

const userSchema = new mongoose.Schema({
    username: {type: String,required: false},
    password: {type: String,required: false},
    email: {type: String,required: false,unique:true},
    firstName: {type: String,required: false},
    lastName: {type: String,required: false},
    phoneNumber : {type:Number, required:false},
    isAdmin :{type:Boolean,default:false},
    dateRegistered:{type:Date, default:() => Date.now()},
    address: {type :[addressSchema], default:[]},
    payment: {type : [paymentSchema],default:[]},
    cart: {type:Array, default:[]}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);