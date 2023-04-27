const mongoose = require('mongoose')

const CouponSchema =new mongoose.Schema({
    code:{
        type:String , 
        require:true , 
        unique:true
    } , 
    discount:{
        type:Number , 
        require:true, 
        
    } , 
})

module.exports = mongoose.model('Coupon' , CouponSchema)