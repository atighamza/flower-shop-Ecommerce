require('dotenv').config()
require('./mongodb/connect')
const express = require("express")
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const cors = require('cors')

const userRoute = require('./routes/user.routes')
const productRoute = require('./routes/product.routes')
const couponRoute = require('./routes/coupon.routes')
const wishListRoute = require('./routes/wishlist.routes')
const mailRoute = require('./routes/mail.routes')
const paymentRoute = require('./routes/payment.routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/user' , userRoute)
app.use('/product' , productRoute)
app.use('/coupon' , couponRoute)
app.use('/wishlist' , wishListRoute)
app.use('/mail' , mailRoute)
app.use('/payment' , paymentRoute)

app.get('/' , (req , res)=>{
    res.send("hello")
})

app.listen('3000' ,()=>{
    console.log(`app running on ${port}`)
})