import { createSlice } from "@reduxjs/toolkit";

const user=createSlice({
      name:"user",
      initialState:{
            username:null,
            email:null,
            password:null,
            loggedIn:false
      },
      reducers:{
            loginAction: (state,action)=>{
                  console.log(action.payload);
                  return {...state,...action.payload}
            },
            logoutAction: (state,action)=>{
                  console.log(action.payload);
                  return {...state,...action.payload}
            },
            onChangeValue:(state,action)=>{ 
                  console.log(action.payload);
                  return {...state,...action.payload}
            }
            
      }
})

export default user.reducer;
export const {loginAction,logoutAction,onChangeValue}=user.actions;