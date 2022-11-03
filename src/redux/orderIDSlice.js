
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
        cancel: false,
    },
    
    
    success: null,
  },
  reducers: {
    
    getOrdersIdStart: (state) => {
        state.ordersID.isFetching1 = true;
        state.ordersID.orderItems =null;
      },
    getOrdersIdSuccess: (state, action) => {
        state.ordersID.isFetching1 = false;
        state.ordersID.orderItems = action.payload.orders1;
        state.ordersID.totalPrice = action.payload.totalPrice;
        state.ordersID.username = action.payload.username;
        state.ordersID.id = action.payload.id;
        state.ordersID.status = action.payload.status;
        state.ordersID.cancel = action.payload.cancel;
        console.log(state.ordersID)
       
      },
    getOrdersIdFailed: (state) => {
        state.ordersID.isFetching1 = false;
        state.ordersID.error1 = true;
      },
    aceptConfirmStart: (state) =>{
        state.ordersID.isFetching1 = true;
    },
    aceptConfirmSuccess: (state) =>{
      state.ordersID.isFetching1 = false;
      state.ordersID.status =true;

    },
    aceptConfirmFailed: (state) =>{
      state.ordersID.isFetching1 = false;
        state.ordersID.error1 = true;
      
    },
    cancelOrderStart: (state) =>{
      state.ordersID.isFetching1 = true;
  },
  cancelOrderSuccess: (state) =>{
    state.ordersID.isFetching1 = false;
    state.orders.cancel =true;
  
  },
  cancelOrderFailed: (state) =>{
    state.ordersID.isFetching1 = false;
      state.ordersID.error1 = true;
    
  }
  
    /// Orders items  
   


}
});

export const {
 
 getOrdersIdFailed ,getOrdersIdSuccess,getOrdersIdStart,
 aceptConfirmSuccess,aceptConfirmStart, aceptConfirmFailed,
 cancelOrderFailed,cancelOrderSuccess,cancelOrderStart
 
} = orderIDSlice.actions;

export default orderIDSlice.reducer;
