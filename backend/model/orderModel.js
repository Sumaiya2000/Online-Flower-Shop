const mongoose = require('mongoose')
const orderSchema=mongoose.Schema({
    items: [{pid: {
        type: String,
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
    },}],
    user: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    total:{
        type: Number,
        required: true
    }
})
module.exports= mongoose.model('Order',orderSchema)