import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIClient } from "../../utils/api_helper";

const api = new APIClient();

export const getUserList = createAsyncThunk("users/getUsersList", async () => {
    try {
      var response = await api.get("/users");
      return response;
    } catch (error) {
      return error;
    }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (data) => {
  try {
    console.log(data)
    let objectArr = [...data.userList];
    var removeIndex = objectArr.findIndex(object => {
      return object.id === data.id;
    });
    let obj = objectArr.splice(removeIndex, 1);
    console.log(obj)
    return objectArr;
  } catch (error) {
    return error;
  }
});