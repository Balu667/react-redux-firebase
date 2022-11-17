import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cartItems: [],
        showCart: false
    },
    reducers:{
      addItem(state,action){
        console.log(action.payload)
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        console.log(existingItem)
        if(existingItem ){
           existingItem.quantity++;
        }else{
           
        return {...state, cartItems: [...state.cartItems,action.payload]}
        }
      },
      removeItem(state,action){
        const existingItem = state.cartItems.find(item => item.id === action.payload);
        if(existingItem && existingItem.quantity > 1){
          existingItem.quantity--;
       }else{  
       return {...state,cartItems: state.cartItems.filter(item => item.id !== action.payload)}
       }
      },
      showCartHandler(state) {
        return {...state, showCart:!state.showCart}
      }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice;