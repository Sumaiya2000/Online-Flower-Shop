const asyncHandler=require("express-async-handler")
const User= require("../model/userModel")
const Order= require("../model/orderModel")

const getItems=asyncHandler(async(req, res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    
    const products= await Order.find({user:req.user.id})    
    res.json({sucess: true, products})
})
module.exports= {
    getItems,}