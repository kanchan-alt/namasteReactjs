import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

        name: 'cart',
        initialState:{
            items: ["burger","coke"]
        },

        reducers:{

            addItem:(state, action)=> {
          // muating the state here
                state.items.push(action.payload)
            },
            removeItem:(state, action)=> {
                state.items.pop();

            },
            clearItem:(state)=> {
                state.items.length = 0; //[empty array]

            },
        }

})

export const{addItem, removeItem, clearItem} = cartSlice.actions;

export default cartSlice.reducer;