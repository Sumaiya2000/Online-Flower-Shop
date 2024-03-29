const mongoose = require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add a name"]
    },
    email:{
        type: String,
        required: [true, "Please add a email"],
        unique: true
    },
    password:{
        type: String,
        required: [true, "Please add a password"]
    },
    address:{
        type: String,
        required: [true, "Please add your billing address"]
    },
    contact:{
        type: String,
        required: [true, "Please add your phone number"]
    },
},
{
    timestamps: true
})
module.exports=mongoose.model('User',userSchema)
