import { createSlice } from "@reduxjs/toolkit";


const  searchSlice = createSlice({
    name:"search",
    initialState:{
        
    },
    reducers:{
        cacheResults:(state, action)=>{
            // {"ip":["iphone","iphone11"]}

            // state = {...action.payload, ...state}

            state = Object.assign(state, action.payload)

        }
    }


})

export const {cacheResults} = searchSlice.actions;
export default searchSlice.reducer;




/**
 *  cache
 *  time complexity to  search in array =0(n)
 * [i, ip, iph, iphn,iphon, iphone]
 * time complexity to  search in object =0(1)
 * {
 * i:
 * ip:
 * iph:
 * ipho:
 * iphon:
 * iphone:
 * 
 * 
 * new map or set
 * 
 * }
 */