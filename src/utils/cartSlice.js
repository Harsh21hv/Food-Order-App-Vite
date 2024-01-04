import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //In older version i.e. Redux- vanialla
      //Don't Mutate the state   and Returning was necessary
      //const newState = [...state];
      //newState.action.push(action.payload)
      //return newState

      //Redux- toolkit
      // we have to mutate the state
      // mutating the state
      //Redux uses Immer to convert mutable state to immutable State
      state.items.push(action.payload);
    },

    removeItem: (state) => {
      state.action.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, removeItem, clearCart } = cartSlice.actions;
