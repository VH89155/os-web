import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
      totalPages: null,
      status:null,
      cancel: null,
      
        
    },
   
    
    success: null,
  },
  reducers: {
    getUsersStart: (state) => {
      state.users.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
      // state.users.totalPages =action.payload.totalPages;
    },
    getUsersFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
    
  
  

   
   


}
});

export const {
 getUsersFailed,getUsersStart,getUsersSuccess,
 

 
} = userSlice.actions;

export default userSlice.reducer;
