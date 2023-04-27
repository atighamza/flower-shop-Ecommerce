const WishList = require('../models/wishlist')
const Product = require ('../models/product')
const getAllWishList = async (req , res) => {
    try{
        const wishLists = await WishList.find({})
        res.status(200).json(wishLists)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}


const createWishList = async (req , res)=>{
    try{
        const {user_id , products} = req.body 
        console.log(req.body)
        if (!user_id) { return res.status(400).json({user_id : "name can't be empty"})}
        if (!products) { return res.status(400).json({products : "products can't be empty"})}

        const wishListExists = await WishList.findOne({user_id})
        if (wishListExists) { 
            const updatedProducts = {products : products}
            try{
                await WishList.findOneAndUpdate({user_id} , updatedProducts)
                return res.status(200).json({message : 'products updated successfuly'})
            }catch(err){
                return res.status(400).json({message : 'error products update'})
            }
        }
        else {
            const newWishList = new WishList({user_id , products})
            console.log(newWishList)
            await newWishList.save()
            console.log("wishList created successfuly")
            res.status(200).json(newWishList)
        }
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

const getWishListByUser = async (req , res) =>{
    try{
        const user_id  = req.params.id
        console.log(user_id)
        const wishList = await WishList.findOne({user_id})
        const products = [] 
        for (let i = 0 ; i<wishList.products.length ; i++){
            console.log(wishList.products[i])
            let product = await Product.findOne({name :wishList.products[i] })
            products.push(product)
        }   
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message : err.message})
    }
    
}


const addProductToWishList = async(req , res) =>{
    try{

    }catch(err){
        res.status(500).json({message : err.message})
    }
}

const getWishListProductsByUser = async(req, res) =>{
    try{

    }catch(err){
        res.status(500).json({message : err.message})
    }
}



const removeProductFromWishList = async(req , res) =>{
    const {product , id} = req.params 
    console.log(id)
    try{
        const wishList = await WishList.findOne({user_id : id})
        const newArr = wishList.products.filter(pr => {
            return pr != product
        })
        await WishList.findOneAndUpdate({user_id : id} ,{products : newArr})
        const result = await WishList.findOne({user_id : id})
        console.log(result)
        return res.status(200).json({message : 'product removed successfuly' , result : result.products})

    }catch(err){
        res.status(500).json({message : err.message})
    }
}

module.exports = { getAllWishList , createWishList ,getWishListByUser, getWishListProductsByUser , removeProductFromWishList}