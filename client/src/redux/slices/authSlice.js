import { createSlice } from "@reduxjs/toolkit";


const initialState = {
   isAuthenticated : localStorage.getItem('token') ? true : false , 
}

const authSlice = createSlice({
   name : 'authentication' , 
   initialState , 
   reducers :{
       login : (state , action) => {
           state.isAuthenticated = true 
           localStorage.setItem('token' , action.payload)
       } , 
       logout : (state) =>{
           state.isAuthenticated = false 
           localStorage.removeItem('token')
       } 
   }
}) ;  

export const {login , logout} = authSlice.actions 

export default authSlice.reducer
