const mongoose = require('mongoose')
const orderSchema=mongoose.Schema({
    pid: {
        type: String,
        required: true
    }, 
    user: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: [true,1]
    },
    name:{
        type: String,
        required: [true, 'Unavailable']
    },
    price:{
        type: Number,
        required: [true, 'Unavailable']
    },
})
module.exports= mongoose.model('Order',orderSchema)