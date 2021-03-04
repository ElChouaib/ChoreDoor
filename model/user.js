const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    bestScore:{
        type:Number
    },
}) ;
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);