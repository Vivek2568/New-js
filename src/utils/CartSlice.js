import { createSlice, current } from "@reduxjs/toolkit";

const CartSlice= createSlice({
    name :'cart',
    initialState:{
    items:[]
    },
    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
           state.items.pop();
        },
        clearCart:(state,action)=>{
           // console.log(current(state));
          state.items.length=0;
        },
    },
})

export const {addItem,removeItem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;