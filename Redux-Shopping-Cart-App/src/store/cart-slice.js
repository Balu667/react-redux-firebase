import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        cartItems: [],
        showCart: false,
        changed:false
    },
    reducers:{
      replaceData(state, action) {
        if(action.payload.cartItems){
          state.cartItems = action.payload.cartItems;
        }else{
          state.cartItems = []
        }
       
      },
      addItem(state,action){
    
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      
        if(existingItem ){
           existingItem.quantity++;
        }else{
           
        return {...state, cartItems: [...state.cartItems,action.payload], changed:true}
        }
      },
      removeItem(state,action){
        state.changed = true;
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