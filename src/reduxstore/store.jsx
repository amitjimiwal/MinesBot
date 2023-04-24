import { configureStore } from "@reduxjs/toolkit";
import userReducer from './slices/userSlice'
// creating our store
const store=configureStore({
      reducer:{
        user:userReducer,
      }
})

export default store;