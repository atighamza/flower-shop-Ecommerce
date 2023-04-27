const express = require('express')
const route = express.Router()

const { getAllWishList , createWishList ,getWishListByUser, getWishListProductsByUser , removeProductFromWishList} = require('../controllers/wishlist.controller')
route.get('/' , getAllWishList)
route.post('/' , createWishList)
route.get('/:id' , getWishListByUser)
route.post('/:id' , getWishListProductsByUser )
route.get('/:id/:product' ,removeProductFromWishList )

module.exports = route