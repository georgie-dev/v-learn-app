import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import axiosInstance from './axios';
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});


const cookie = new Cookies()

const user = cookie.get('user')

export const ADD_USER = createAsyncThunk('user/ADD_USER', async (userDetails, thunkAPI) => {


  try {
    const user = await axiosInstance.post('/students/', userDetails)
    Toast.fire({
      icon: 'success',
      title: 'Registration Successful'
    });
    console.log(user)
    return user.data
  } catch (error) {
    console.log(error)
    Toast.fire({
      icon: 'error',
      title: 'Account Already exists'
    });
    return thunkAPI.rejectWithValue(error)
  }

})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    userDetails: user || {},
    isLoading: false,
    isSuccess: false
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isSuccess = false
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(ADD_USER.pending, (state) => {
        state.isLoading = true
        state.isAuthenticated = false
        state.isSuccess = false
      })

      .addCase(ADD_USER.fulfilled, (state, action) => {
        state.isLoading = false
        state.userDetails = action.payload
        state.isAuthenticated = true
        cookie.set('user', action.payload);
        state.isSuccess = true
      })

      .addCase(ADD_USER.rejected, (state) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.userDetails = {}
        state.isSuccess = false
      })
  }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer
