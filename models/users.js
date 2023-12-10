const mongoose = require('mongoose');

const user = mongoose.Schema({
    name:String,
    phoneNumber:Number,
    email:String,
    code:Number,
    gender:String
})

module.exports = mongoose.model("users",user);