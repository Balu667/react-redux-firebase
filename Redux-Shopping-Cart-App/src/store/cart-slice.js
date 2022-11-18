import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";


export const fetchData = createAsyncThunk("cart/getCartItems", async () => {
  return fetch("https://react-redux-343a6-default-rtdb.firebaseio.com/cartItems.json").then((res) => res.json()).catch((err) => console.log(err))
});

export const updateData = createAsyncThunk("cart/updateCartItems", async (cart) => {
  return fetch(
    "https://react-redux-343a6-default-rtdb.firebaseio.com/cartItems.json",
    {
      method: "PUT",
      body: JSON.stringify(cart),
    }
  ).then((res) => res.json()).catch((err) => console.log(err))
})

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    showCart: false,
    changed: false
  },
  reducers: {
    replaceData(state, action) {
      if (action.payload.cartItems) {
        state.cartItems = action.payload.cartItems;
      } else {
        state.cartItems = []
      }

    },
    // addItem(state, action) {

    //   const existingItem = state.cartItems.find(item => item.id === action.payload.id);

    //   if (existingItem) {
    //     existingItem.quantity++;
    //   } else {

    //     return { ...state, cartItems: [...state.cartItems, action.payload], changed: true }
    //   }
    // },
    removeItem(state, action) {
      state.changed = true;
      const existingItem = state.cartItems.find(item => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) }
      }
    },
    showCartHandler(state) {
      return { ...state, showCart: !state.showCart }
    }
  },
  extraReducers: {
    [fetchData.pending]: (state) => {
      // state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.cartItems = action.payload
    },
    [fetchData.rejected]: (state, action) => {
      // dispatch(
      //   uiActions.showNotification({
      //     open: true,
      //     message: "Sending Request Failed",
      //     type: "error",
      //   })
      // );
    },
    [updateData.pending] : (state) => {
      
    },
    [updateData.fulfilled] : (state,action) => {
       state.cartItems.push(action.payload)
    },
    [updateData.rejected] : (state) => {
      
    }

  }
});


export const cartActions = cartSlice.actions;

export default cartSlice;