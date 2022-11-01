import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: {
      allOrders: null,
      isFetching: false,
      error: false,
      totalPages: null,
      
        
    },
   
    
    success: null,
  },
  reducers: {
    getOrdersStart: (state) => {
      state.orders.isFetching = true;
    },
    getOrdersSuccess: (state, action) => {
      state.orders.isFetching = false;
      state.orders.allOrders = action.payload;
      // state.orders.totalPages =action.payload.totalPages;
    },
    getOrdersFailed: (state) => {
      state.orders.isFetching = false;
      state.orders.error = true;
    },


   
   


}
});

export const {
 getOrdersFailed,getOrdersStart,getOrdersSuccess,
 
} = orderSlice.actions;

export default orderSlice.reducer;
