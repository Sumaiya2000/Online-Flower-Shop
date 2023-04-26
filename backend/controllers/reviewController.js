const asyncHandler=require("express-async-handler")
const User= require("../model/userModel")
const Review= require("../model/reviewModel")

const getReview=asyncHandler(async(req, res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    
    const reviews= await Review.find()    
    res.json({sucess: true, reviews})
})

const postReview=asyncHandler(async(req, res) => {
    const user = await User.findById(req.user.id)

    if(!user){
        res.status(401)
        throw new Error('Please login')
    }
    const review= await Review.create(req.body)
    const reviews= await Review.find()    
    res.json({success:true, reviews})

})

module.exports= {
    getReview,
    postReview
}