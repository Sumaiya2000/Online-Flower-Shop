const mongoose = require('mongoose')
const reviewSchema=mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please add a name"]
    },
   
    review:{
        type: String,
        required: [true, "Please add your valuable comment"]
    },
},
)
module.exports=mongoose.model('Review',reviewSchema)
