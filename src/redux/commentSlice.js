import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice ({
    name: "comment",
    initialState :{
        comments:{
            comments:null,
            isFetching: false,
            error: false,

        },
       
        // logout:{
        //     isFetching:false,
        //     error:false,
        // }
    },
    reducers :{
        // addCartStart: (state) =>{
        //     state.carts.isFetching =true;
        // },
        // addCartSusscess: (state,action) =>{
        //     state.carts.isFetching =false;           
        //     state.carts.error =false;
        // },
        // addCartFailed :(state) =>{
        //     state.carts.isFetching =false;
        //     state.carts.error =true;
        // },


        // register
        getCartStart: (state) =>{
            state.carts.isFetching =true;
        },
        getCartSusscess: (state,action) =>{
            state.carts.isFetching =false;
           
            state.carts.error =false;
            state.carts.cartItems =action.payload;
        },
        getCartFailed :(state) =>{
            state.carts.isFetching =false;
            state.carts.error =true;
            // state.register.success = false;
        },
       
        // deleteCartStart: (state) =>{
        //     state.carts.isFetching =true;
        // },
        // deleteCartSusscess: (state,action) =>{
        //     state.carts.isFetching =false;           
        //     state.carts.error =false;
        // },
        // deleteCartFailed :(state) =>{
        //     state.carts.isFetching =false;
        //     state.carts.error =true;
        // },
   
    }

});

export const {
   addCartFailed,
   addCartStart,
   addCartSusscess,
    getCartFailed,
    getCartSusscess,
    getCartStart,
    cartLogout,
   deleteCartFailed,
  deleteCartStart,
  deleteCartSusscess,
    
} = cartSlice.actions;

export default cartSlice.reducer;