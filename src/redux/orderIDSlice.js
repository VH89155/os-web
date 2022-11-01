
import { createSlice } from "@reduxjs/toolkit";

const orderIDSlice = createSlice({
  name: "orderID",
  initialState: {
   
    ordersID:{
        orderItems: null,
        totalPrice:null,
        username:null,
        isFetching1: false,
        error1: false,
        id:null,
        status:false,


    },
    
    
    success: null,
  },
  reducers: {
    
    getOrdersIdStart: (state) => {
        state.ordersID.isFetching1 = true;
      },
    getOrdersIdSuccess: (state, action) => {
        state.ordersID.isFetching1 = false;
        state.ordersID.orderItems = action.payload.orders1;
        state.ordersID.totalPrice = action.payload.totalPrice;
        state.ordersID.username = action.payload.username;
        state.ordersID.id = action.payload.id;
        state.ordersID.status = action.payload.status;
       
      },
    getOrdersIdFailed: (state) => {
        state.ordersID.isFetching1 = false;
        state.ordersID.error1 = true;
      },
    /// Orders items  
   


}
});

export const {
 
 getOrdersIdFailed ,getOrdersIdSuccess,getOrdersIdStart
} = orderIDSlice.actions;

export default orderIDSlice.reducer;
