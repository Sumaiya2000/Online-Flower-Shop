const asyncHandler=require("express-async-handler")
const Flowers= require("../model/flowerModel")
const Cart = require("../model/cartModel")
const User= require("../model/userModel")
const date= new Date()

//not user
const getFoolsn=asyncHandler(async(req, res) => {
    const products= await Flowers.find()
    res.json({sucess: true, products})
})

const getCatn=asyncHandler(async(req, res) => {
    const cat= req.params.category
    const product= await Flowers.find()
    const products= await product.filter(function(ele){
        return ele.category == cat
    })
    //const products= await Flowers.indexof(req.params.category)
   
    res.json({sucess: true, products})
})

const getOccn=asyncHandler(async(req, res) => {
    const cat= req.params.occasion
    const product= await Flowers.find()
    const products= await product.filter(function(ele){
        return ele.occasion == cat
    })
    //const products= await Flowers.find(req.params.occassion)
   
    res.json({sucess: true, products})
})



// user: req.user.id
const getFools=asyncHandler(async(req, res) => {
    const products= await Flowers.find()
    res.json({sucess: true, products})
})

const getCat=asyncHandler(async(req, res) => {
    const cat= req.params.category
    const product= await Flowers.find()
    const products= await product.filter(function(ele){
        return ele.category == cat
    })
    //const products= await Flowers.indexof(req.params.category)
   
    res.json({sucess: true, products})
})

const getOcc=asyncHandler(async(req, res) => {
    const cat= req.params.occasion
    const product= await Flowers.find()
    const products= await product.filter(function(ele){
        return ele.occasion == cat
    })
    //const products= await Flowers.find(req.params.occassion)
   
    res.json({sucess: true, products})
})


const addtoCart=asyncHandler(async(req, res) => {

    const products= await Flowers.findById(req.params.pid)
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    const product= await Cart.create({
        pid: req.params.pid, 
        user: req.user.id,
        time: date.toLocaleDateString('en-US'),
        quantity: 1,
        name: products.name,
        price: products.price
        
    })
    
    const all= await Flowers.find()
    res.json({success:true, all})

})








const postFools=asyncHandler(async(req, res) => {
    const product= await Flowers.create(req.body)
    res.json({success:true, product})

})
const updateFools=asyncHandler(async(req, res) =>{
    const products=await Flowers.findById(req.params.id)
    if(!products) {
        res.status(400)
        throw new Error("Product not found")
    }

    const updatedProducts=await Flowers.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedProducts)
}
)

const deleteFools= asyncHandler(async (req, res) => {
    const products=await Flowers.findById(req.params.id)
    if(!products) {
        res.status(400)
        throw new Error("Product not found")
    }
    await products.remove()
    res.status(200).json({id: req.params.id})
})




module.exports= {
    getFools,
    postFools,
    updateFools,
    deleteFools,
    addtoCart,
    getCat,
    getOcc,
    getCatn,
    getOccn,
    getFoolsn
  

}