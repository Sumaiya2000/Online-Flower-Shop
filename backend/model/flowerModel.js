const mongoose = require('mongoose')
const flowerSchema=mongoose.Schema({
    image:[{
        public_id:{
            type: String,
            required: true
        },
        uri:{
            type: String,
            required: true
        }
    }],
    name:{
        type: String,
        required: [true, 'Unavailable']
    },
    price:{
        type: Number,
        required: [true, 'Unavailable']
    },
    description:{
        type: String,
        required: [true, 'Unavailable']
    },
    category:{
        type: String,
        required: [true, 'Unavailable category']
    },
    occasion:{
        type: String,
        required: [true, 'Unavailable']
    }
})
module.exports= mongoose.model('Flowers',flowerSchema)