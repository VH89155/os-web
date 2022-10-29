import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: {
      allProducts: null,
      isFetching: false,
      error: false,
      totalPages: null,
      trashProducts:null,
    },
    
    msg: "",
    success: null,
  },
  reducers: {
    getProductsStart: (state) => {
      state.products.isFetching = true;
    },
    getProductsSuccess: (state, action) => {
      state.products.isFetching = false;
      state.products.allProducts = action.payload;
      // state.products.totalPages =action.payload.totalPages;
    },
    getProductsFailed: (state) => {
      state.products.isFetching = false;
      state.products.error = true;
    },

    //get Trash Product

    getTrashProductsStart: (state) => {
      state.products.isFetching = true;
    },
    getTrashProductsSuccess: (state, action) => {
      state.products.isFetchingg = false;
      state.products.trashProducts = action.payload;
      // state.products.totalPages =action.payload.totalPages;
    },
    getTrashProductsFailed: (state) => {
      state.products.isFetching = false;
      state.products.error = true;
    },

    ///delete Product
    deleteProductStart: (state) => {
      state.products.isFetching = true;
      state.success = false;
    },
    deleteProductsSuccess: (state, action) => {
      state.products.isFetching = false;
      state.msg = action.payload.status;
      state.success = action.payload.success;
    },
    deleteProductFailed: (state, action) => {
      state.products.isFetching = false;
      state.products.error = true;
      state.msg = action.payload.status;
      state.success = false;
    },
    updateProductStart: (state) => {
      state.products.isFetching = true;
      state.success = false;
    },
    updateProductsSuccess: (state, action) => {
      state.products.isFetching = false;
      state.msg = action.payload.status;
      state.success = action.payload.success;
    },
    updateProductFailed: (state, action) => {
      state.products.isFetching = false;
      state.products.error = true;
      state.msg = action.payload.status;
      state.success = false;
    },
    addProductStart: (state) => {
      state.products.isFetching = true;
      state.success = false;
    },
    addProductsSuccess: (state, action) => {
      state.products.isFetching = false;
      state.msg = action.payload.status;
      state.success = action.payload.success;
    },
    addProductFailed: (state, action) => {
      state.products.isFetching = false;
      state.products.error = true;
      state.msg = action.payload.status;
      state.success = false;
    },
   restoreProductStart: (state) => {
      state.products.isFetching = true;
      state.success = false;
    },
   restoreProductsSuccess: (state, action) => {
      state.products.isFetching = false;

      state.success = action.payload.success;
    },
   restoreProductFailed: (state, action) => {
      state.products.isFetching = false;
      state.products.error = true;
     
      state.success = false;
    },
  },
});

export const {
  getProductsFailed,
  getProductsStart,
  getProductsSuccess,
  deleteProductFailed,
  deleteProductStart,
  deleteProductsSuccess,
  updateProductStart,
  updateProductFailed,
  updateProductsSuccess,
  addProductStart,
  addProductFailed,
  addProductsSuccess,
  getTrashProductsFailed,
  getTrashProductsStart,
  getTrashProductsSuccess,
  restoreProductFailed,
  restoreProductStart,
  restoreProductsSuccess,
} = productSlice.actions;

export default productSlice.reducer;
