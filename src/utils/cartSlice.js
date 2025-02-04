import { createSlice } from "@reduxjs/toolkit";
// Load cart from localStorage
const loadCartFromStorage = () => {
    const cartData = localStorage.getItem("cartItems");
    return cartData ? JSON.parse(cartData) : [];
  };
const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:loadCartFromStorage(),
    },
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