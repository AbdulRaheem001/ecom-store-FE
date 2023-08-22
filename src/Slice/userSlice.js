import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { items: [], total: 0, loginState: false, userType: "" },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // If the item already exists, increment the quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not already in the array, add it
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.total += newItem.price;
    },
    removeItem(state, action) {
      const itemIdToRemove = action.payload.id;
      const itemToRemove = state.items.find(
        (item) => item.id === itemIdToRemove
      );

      if (itemToRemove) {
        state.total -= itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== itemIdToRemove);
      }
    },
    setQuantity(state, action) {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === id);
      if (itemToUpdate) {
        state.total -= itemToUpdate.price * itemToUpdate.quantity;
        itemToUpdate.quantity = quantity;
        state.total += itemToUpdate.price * quantity;
      }
    },
    setLoginState(state, action) {
      state.loginState = action.payload;
    },
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});
export default userSlice;
export const { addItem, removeItem, setQuantity, setLoginState } =
  userSlice.actions;
