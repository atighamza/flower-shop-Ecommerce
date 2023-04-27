const mongoose = require('mongoose')

const wishListSchema =new mongoose.Schema({
    user_id:{
        type:String , 
        require:true , 
    } , 
    products:{
        type:[String] , 
        require:true, 
        
    } , 
})

module.exports = mongoose.model('WishList' , wishListSchema)