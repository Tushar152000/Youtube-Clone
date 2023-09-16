import { createSlice } from "@reduxjs/toolkit";

const chatslice=createSlice({
    name:"Chat",
    initialState:{
        messages:[],
    },
    reducers:{
      addMessage:(state,action)=>{
     state.messages.splice(15,2);
      
      state.messages.push(action.payload);

      },
    },
});
export const{addMessage}=chatslice.actions;
export default chatslice.reducer;
