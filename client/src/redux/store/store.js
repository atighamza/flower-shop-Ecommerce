import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../slices/cartSlice'
import AuthReducer from '../slices/authSlice'
import WishListReducer from '../slices/wishListSlice'

const store  = configureStore({
    reducer : {
        cart : CartReducer , 
        auth : AuthReducer , 
        wishList : WishListReducer
    }
})

export default store