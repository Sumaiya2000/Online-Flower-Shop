const jwt= require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler=require("express-async-handler")
const User=require('../model/userModel')


const registerUser= asyncHandler(async(req, res) => {
    const {name, email,password, address, contact}=req.body

    if(!name || !email || !password || !address || !contact){
        res.status(400)
        throw new Error("Please add all fields")
    }
    
    const userExists = await User.findOne({email})
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        address,
        contact
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id) 
        })
    } else {
        res.status(400)
        throw new Error("Invalid user data")
    }
}
)


const loginUser= asyncHandler(async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({ email})
    
    if(user && (await bcrypt.compare(password,user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id) 
  
        })
    }else {
        res.status(400)
        throw new Error("Invalid credentials")
    }


    res.json({ message: 'Login User'})
})

const getUser= asyncHandler(async(req, res) => {
    const {name,email, address, contact}=await User.findById(req.user.id)

    res.status(200).json({
        name,
        email,
        address,
        contact 
    })
})
const updateUser= asyncHandler(async(req, res) => {
    const user =await User.findById(req.user.id)
    if(!user) {
        res.status(400)
        throw new Error("User not found")
    }

    const updatedUser=await User.findByIdAndUpdate(req.params.id, req.body, {new: true,})
    res.status(200).json(updatedUser)
    
})

const generateToken=(id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '60d'
    })
}


module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser
    
}