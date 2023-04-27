import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [] , 
    total : localStorage.getItem('total') ? localStorage.getItem('total') : 0  , 
    coupon : sessionStorage.getItem('coupon') ? sessionStorage.getItem('coupon') : 0 
}

const cartSlice = createSlice({
    name : 'cart' , 
    initialState , 
    reducers : {
        addItem : (state , action) => {
            var existed_item = state.products.find(product => product.name === action.payload.name)
            if(existed_item){
                const index = state.products.findIndex(obj => obj.name === existed_item.name)
                existed_item.quantity +=1
                existed_item.totalPrice = existed_item.price * existed_item.quantity
                localStorage.setItem('products' , JSON.stringify(state.products))
            }else{
                const { name , price , quantity , totalPrice , img } = action.payload
                const product = { name , price , quantity : 1 , img }
                product.totalPrice = product.price * product.quantity
                state.products.push(product)
                localStorage.setItem('products' , JSON.stringify(state.products))
            }
            var cartTotal=0; 
            for (let i= 0 ; i<state.products.length ; i++){
                cartTotal+=state.products[i].totalPrice
            }
            state.total = cartTotal
            
            localStorage.setItem('total' , state.total)
        } , 

        removeItem : (state, action) => {
            const { name } = action.payload
            let filtered_arr = state.products.filter(product => {
                if(product.name != name ) {
                    return product
                }
            })

            state.products = filtered_arr

            //recalculate the total price of the cart
            var cartTotal=0; 
            for (let i= 0 ; i<state.products.length ; i++){
                cartTotal+=state.products[i].totalPrice
            }
            state.total = cartTotal

            

            localStorage.setItem('products' , JSON.stringify(state.products))
            localStorage.setItem('total' , state.total)
        } , 

        emptyCart : (state) => {
            console.log('empty cart working')
            state.total = 0 ; 
            state.products = [] ;
            localStorage.removeItem('products')
            localStorage.removeItem('total')
        } , 

        updateQuantity : (state, action) => {
            const { operation , quantityUpdated , name } = action.payload
            
            //search for the product in cart
            var existed_item = state.products.find(product => product.name === name)
            console.log(typeof(existed_item.quantity))
            //increase quantity
            if (operation == 'increase'){
                existed_item.quantity += quantityUpdated
                existed_item.totalPrice = existed_item.price * existed_item.quantity
            } else {
                console.log('decrease is here')
                console.log(existed_item.quantity)
                //check if quantity is 1 so remove this product from cart
                if (existed_item.quantity <= 1 ){
                    console.log('quantity = 1')
                    let filtered_arr = state.products.filter(product => {
                        if(product.name != name ) {
                            return product
                        }
                    })
                    console.log('item removed by 1 ')
                    state.products = filtered_arr
                //decrease  quantity    
                } else{
                    //console.log('im always here')
                    existed_item.quantity -= quantityUpdated
                    existed_item.totalPrice = existed_item.price * existed_item.quantity
                }
            }
            var cartTotal=0; 
            for (let i= 0 ; i<state.products.length ; i++){
                cartTotal+=state.products[i].totalPrice
            }
            state.total = cartTotal

            localStorage.setItem('products' , JSON.stringify(state.products))
            localStorage.setItem('total' , state.total)
        } , 

        addCoupon : (state , action ) =>{
            state.coupon = action.payload
            sessionStorage.setItem('coupon' , action.payload)
        }

    }
}) 

export const { addItem , emptyCart , removeItem , updateQuantity , addCoupon } = cartSlice.actions
export default cartSlice.reducer