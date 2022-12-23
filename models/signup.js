const mongoose = require("mongoose");
const signupSchema = new mongoose.Schema({

    fullName:{
        type:String,
    },

    email:{
        type:String,
    },
    password:{
        type:String,
    },
    confirm_password:{
        type:String,

    },
    phone_number:{
        type:String
    },
})


const signupModel = mongoose.model("signup", signupSchema)


module.exports= signupModel;