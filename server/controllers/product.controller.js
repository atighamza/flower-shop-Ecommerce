const Product = require('../models/product')

const getAllProducts = async (req , res) => {
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message : err.message})
    }
}


const createProduct = async (req , res)=>{
    try{
        const {name , description , price , image , category} = req.body 
        if (!name) { return res.status(400).json({message : "name can't be empty"})}
        if (!description) { return res.status(400).json({message : "description can't be empty"})}
        if (!price) { return res.status(400).json({message : "price can't be empty"})}
        if (!image) { return res.status(400).json({message : "image can't be empty"})}
        if (!category) { return res.status(400).json({message : "category can't be empty"})}
        const productExists = await Product.findOne({name})
        if (productExists) { return res.status(400).json({message : 'product already exists'})}
        else {
            const newProduct = new Product({name , description , price , image , category})
            console.log(newProduct)
            await newProduct.save()
            console.log("product created successfuly")
            res.status(200).json(newProduct)
        }
    }catch(err){
        res.status(500).json({message : err.message})
    }
}

const getProductsByCategory = async (req , res) =>{
    try{
        const { category } = req.params
        const products = await Product.find({category : category})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json({message : err.message})
    }
    
}
module.exports = { getAllProducts , createProduct ,getProductsByCategory }