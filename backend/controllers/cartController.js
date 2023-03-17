const asyncHandler=require("express-async-handler")
const Flowers= require("../model/flowerModel")
const Cart = require("../model/cartModel")
const User= require("../model/userModel")
const Order= require("../model/orderModel")
const date= new Date()

const getItems=asyncHandler(async(req, res) => {
    const items= await Cart.find({user:req.user.id})
    res.json({sucess: true, items})
})
// PROBLEM FOR EACH ELEMENT IN OBJECT 
const confirmOrder=asyncHandler(async(req, res) => {
    const user= req.body.id
    const {pid,name,quantity,price}= await Cart.find({user:user})
    const product= {pid,name,quantity,price}
    /* const product= await Order.create({
        pid: pid, 
        user: user,
        time: date.toLocaleDateString('en-US'), 
        name: name, 
        quantity: quantity, 
        price: price,
      }     
    ) */
    res.json({success:true, product})

})
const updateItem=asyncHandler(async(req, res) =>{
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    const cat= req.params.pid

    const product= await Cart.find()
    const products= await product.filter(function(ele){
        return (ele.pid == cat) && (ele.user == req.user.id)
    })
    

    //const products=await Cart.findById(req.params.pid)
    if(!products) {
        res.status(400)
        throw new Error("Product not found")
    }
    
    const filter= {pid: products[0].pid,}
    const update= {quantity: req.body.quantity}
    const updatedProducts=await Cart.findOneAndUpdate(filter,update,{returnOriginal: false})
    const updates= await Cart.find()
    const items= await updates.filter(function(ele){
        return (ele.user == req.user.id)
    })
    
    res.status(200).json(items)
}
)



const deleteItem= asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id)
    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    const cat= req.params.pid

    const product= await Cart.find()
    const products= await product.filter(function(ele){
        return (ele.pid == cat) && (ele.user == req.user.id)
    },{new:true})

    if(!products) {
        res.status(400)
        throw new Error("Product not found")
    }
    
    await products[0].remove()
    const updates= await Cart.find()
    const items= await updates.filter(function(ele){
        return (ele.user == req.user.id)
    })
    res.status(200).json(items)
})




/* const updateItem=asyncHandler(async(req, res) =>{
    const products=await Flowers.findById(req.params.id)
    if(!products) {
        res.status(400)
        throw new Error("Product not found")
    }

    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    const items= await Cart.find({user:req.user.id})
    const updatedProducts=await items.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedProducts)
    
}
)

const deleteItem= asyncHandler(async (req, res) => {
    const items= await Cart.find({user:req.user.id})
    const products=await items.findById(req.params.id)
    if(!products) {
        res.status(400)
        throw new Error("Product not found")
    }
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    await products.remove()
    res.status(200).json({id: req.params.id})
}) */
module.exports= {
    getItems,
    confirmOrder,
    updateItem,
    deleteItem,
}