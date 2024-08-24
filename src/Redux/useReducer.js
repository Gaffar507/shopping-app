import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  openCart: false
};

export const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },

    removeCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      state.openCart = !state.openCart
    },

    resetCart: (state) => {
      state.products = [];
    },

    closeBtn: (state)=>{
      state.openCart = !state.openCart
      // console.log(state.openCart.valueOf())
    }
  },
});

// Action creators are generated for each case reducer function
export const { addCart, removeCart, resetCart, closeBtn } = cartReducer.actions;

export default cartReducer.reducer;
