const express = require('express')
const route = express.Router()

const {  getAllProducts , createProduct,getProductsByCategory } = require('../controllers/product.controller')

route.get('/' , getAllProducts)
route.post('/' , createProduct)
route.get('/:category' , getProductsByCategory)
module.exports = route