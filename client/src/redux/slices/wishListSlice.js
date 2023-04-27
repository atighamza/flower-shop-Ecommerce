import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/axios";


export const getProductsList = createAsyncThunk('wishList/getProductsList', async (id , { rejectWithValue }) => {
    try{
        const { data } = await instance.get(`/wishlist/${id}`)
        sessionStorage.setItem('datawishlist' , JSON.stringify(data))
        console.log(data)
        return data;
  
    }catch(err) {
        return rejectWithValue(err.message);
    }
    }) 

export const removeProducts = createAsyncThunk('wishList/getProductsList', async ({id , name}, { rejectWithValue }) => {
    try{
        console.log('remove product function is executed')
        const { data } = await instance.get(`/wishlist/${id}/${name}`)
        return data.result;
    }catch(err) {
        return rejectWithValue(err.message);
    }
    }) 

export const addProducts = createAsyncThunk('wishList/getProductsList', async ({id,_id , name , imgLink , price , description} , { rejectWithValue }) => {

        try{
        console.log(id)
        const products = JSON.parse(sessionStorage.getItem('datawishlist'))
        console.log(products)
        console.log(name)
        const newProduct = {id:_id , name ,description, price , image : imgLink }
        const newArr = []
          for (let i = 0 ; i<products.length ; i++){
            if (name != products[i].name){
              newArr.push(products[i].name)
            }
            
          }
          newArr.push(name.trim())
          console.log(newArr)
          const { data } = await instance.post(`/wishlist`,{
            user_id : id , 
            products : newArr
          })
          console.log(data)

          const newData = await instance.get(`/wishlist/${id}`)
          console.log('new data' , newData.data)
          sessionStorage.setItem('datawishlist' , JSON.stringify(newData.data))
          return newData.data;
          
      }catch(err) {
        console.log(err)
          return rejectWithValue(err.message);
      }
      }) 


const initialState = {
   data : sessionStorage.getItem('datawishlist') ? JSON.parse(sessionStorage.getItem('datawishlist')) :  [] ,
   isLoading: false,
   isSuccess: false,
   errorMessage: ''
}

const wishlistSlice = createSlice({
   name : 'wishlist' , 
   initialState , 
   extraReducers : {
    [getProductsList.pending]: (state) => {
        state.isLoading = true;
      },
      [getProductsList.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
        
      },
      [getProductsList.rejected]: (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload
      } ,
      ///////
      [removeProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [removeProducts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
        //sessionStorage.setItem('datawishlist' ,  JSON.stringify(payload))
        console.log(payload)
      },
      [removeProducts.rejected]: (state, { payload }) => {
        console.log(state.payload)
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload
      } , 

      //// 
      [addProducts.pending]: (state) => {
        state.isLoading = true;
      },
      [addProducts.fulfilled]: (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
        //sessionStorage.setItem('datawishlist' ,  JSON.stringify(payload))
      },
      [addProducts.rejected]: (state, { payload }) => {
        console.log(state.payload)
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload
      }

   }
    /*extraReducers : (builder) => {
        builder.addCase(getProductsList.pending , (state)=>{
            state.isLoading = true;
        })

        builder.addCase(getProductsList.fulfilled , (state , action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        })

        builder.addCase(getProductsList.rejected , (state , action)=>{
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload
        })
    }*/
}) ;  


export default wishlistSlice.reducer
