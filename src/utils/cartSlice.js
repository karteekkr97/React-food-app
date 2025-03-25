import { createSlice } from "@reduxjs/toolkit";
// Load cart from localStorage (if available)
const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice=createSlice({
    name:"cart",
    initialState: { items: initialCart },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        removeItem:(state)=>{
            state.items.pop()
            localStorage.setItem("cartItems", JSON.stringify(state.items));
        },
        clearCart:(state)=>{
            state.items.length=0;
            localStorage.removeItem("cartItems"); // Clear localStorage
        }
    }
})

export const{addItem,removeItem,clearCart}=cartSlice.actions;

export default cartSlice.reducer;