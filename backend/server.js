const express=require('express')
const dotenv=require('dotenv').config()
const{errorhandler}=require('./middleware/errorMiddleware')
const port=process.env.PORT || 5000
const colors = require('colors')
const connectDB= require('./config/db')

connectDB()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/phulel',require('./routes/phulelRoutes'))
app.use('/api/users',require('./routes/userRoutes'))



app.listen(port, () => console.log(`Server started on port ${port}`))



