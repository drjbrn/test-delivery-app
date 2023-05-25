import { createSlice, createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

const initialState: ProductsInitialState = {
  allProducts: [],
  selectedShop: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setShop: (state, action) => {
      state.selectedShop = action.payload;
    },
  },
});

export const { setProducts, setShop } = productSlice.actions;

export default productSlice.reducer;

export const getAllProducts = (state: RootState) => state.products.allProducts;
export const getSelectedShop = (state: RootState) => state.products.selectedShop;

export const selectFilteredProducts = createSelector(
  [getAllProducts, getSelectedShop],

  (allProducts, selectedShop) => {
    let filteredProducts = allProducts;

    if (selectedShop !== 'All') {
      filteredProducts = filteredProducts.filter((product) => product.shop.includes(selectedShop));
    }

    return filteredProducts;
  }
);
