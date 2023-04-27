import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../axios/axios";

export const getProductsList = createAsyncThunk('wishList/getProducts', async (id , { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/wishlist/${id}`)
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  })