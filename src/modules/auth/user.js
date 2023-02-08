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
    const user = await axiosInstance.post('/api/students/', userDetails)
    Toast.fire({
      icon: 'success',
      title: 'Registration Successful'
    });
    return user.data
  } catch (error) {
    Toast.fire({
      icon: 'error',
      title: 'error'
    });
    return thunkAPI.rejectWithValue(error)
  }

})

export const REGISTER_COURSE =createAsyncThunk('user/REGISTER_COURSE', async(userCourses, thunkAPI)=>{
  try {
    const courses = await axiosInstance.patch(`/api/students/${user.id}/`, {courses: userCourses})
    Toast.fire({
      icon: 'success',
      title: 'Registration Successful'
    });
    return courses.data
  } catch (error) {
    Toast.fire({
      icon: 'error',
      title: error
    });
    return thunkAPI.rejectWithValue(error)
  }
})

export const LOGIN= createAsyncThunk('user/LOGIN', async(userDetails, thunkAPI)=>{


  try{
    const user = await axiosInstance.get(`/api/students/?matricNo=${userDetails}`)

    console.log(user)
  }catch(error){
    console.log(error)
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isAuthenticated: false,
    userDetails: user || {},
    isLoading: false,
    isSuccess: false,
    isCourseRegister :false,
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.isSuccess = false;
      state.isCourseRegister = false
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

      .addCase(REGISTER_COURSE.pending, (state)=>{
        state.isLoading = true
        state.isCourseRegister = false
      })

      .addCase(REGISTER_COURSE.fulfilled, (state, action)=>{
        state.isLoading= false
        state.isCourseRegister = true
      })
      .addCase(REGISTER_COURSE.rejected, (state)=>{
        state.isLoading = false
        state.isCourseRegister = false
      })
  }
})

export const { login, logout, reset } = userSlice.actions;
export default userSlice.reducer
