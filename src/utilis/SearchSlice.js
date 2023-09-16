import { createSlice } from "@reduxjs/toolkit";

const searchslice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        chacheResult:(state,action)=>{
            state=Object.assign(state,action.payload);

        }

    }
});
export const {chacheResult}=searchslice.actions;

export default searchslice.reducer;
 
