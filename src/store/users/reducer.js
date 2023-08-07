import { createSlice } from "@reduxjs/toolkit";
import { getUserList, deleteUser } from './thunk';
export const initialState = {
  userList: [],
  isLoader: true,
  error: ''
};

const UserReducer = createSlice({
    name: 'UserReducer',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getUserList.fulfilled, (state, action) => {
        if(action.payload.status === 200){
          state.userList = action.payload.data;
          state.isLoader = false;
        } else {
          state.isLoader = false;
          state.error = action.payload.message;
        }

      });

      builder.addCase(deleteUser.fulfilled, (state, action) => {
        state.userList = action.payload;
        state.isLoader = false;
      });
    }
  });
  
  export default UserReducer.reducer;