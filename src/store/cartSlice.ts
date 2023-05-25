import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const { id, title, price, quantity, rating, shop } = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push({
          id,
          title,
          price,
          rating,
          shop,
          quantity,
          totalPrice: price * quantity,
        });
      }

      state.totalQuantity += quantity;
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (!existingItem) {
        return;
      }

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }

      state.totalQuantity--;
      state.totalPrice = calculateTotalPrice(state.items);
    },
    removeAllItemsFromCart(state, action) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  },
});

export const { addItemToCart, removeItemFromCart, removeAllItemsFromCart } = cartSlice.actions;

export default cartSlice.reducer;

export const getCartItems = (state: RootState) => state.cart.items;
export const getCartTotalQuantity = (state: RootState) => state.cart.totalQuantity;
export const getCartTotalPrice = (state: RootState) => state.cart.totalPrice;
