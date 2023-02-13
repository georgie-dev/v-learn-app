import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import axiosInstance from "./axios";
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

const cookie = new Cookies();

const user = cookie.get("user");

export const ADD_USER = createAsyncThunk(
  "user/ADD_USER",
  async (userDetails, thunkAPI) => {
    try {
      const user = await axiosInstance.post("/api/users/", userDetails);

      Toast.fire({
        icon: "success",
        title: "Registration Successful",
      });
      return user.data;
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const REGISTER_COURSE = createAsyncThunk(
  "user/REGISTER_COURSE",
  async (userCourses, thunkAPI) => {
    const {getState}= thunkAPI
    const state= getState()
    try {
      const courses = await axiosInstance.patch(`/api/users/${state.user.userDetails.id}/`, {
        courses: userCourses,
      });
      Toast.fire({
        icon: "success",
        title: "Course Registration Successful",
        text : 'Please Login'
      });
      return courses.data;
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error,
      });
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const LOGIN = createAsyncThunk(
  "user/LOGIN",
  async (userDetails, thunkAPI) => {
    try {
      const user = await axiosInstance.post(`/login/`, userDetails);
      return user.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    userDetails: user || {},
    isLoading: false,
    isSuccess: false,
    isCourseRegister: false,
  },
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isCourseRegister = false;
    },

    logout: (state)=>{
      state.isAuthenticated= false
      state.userDetails={}
      cookie.remove('token')
      cookie.remove('user')
    }
  },
  extraReducers: (builder) => {
    builder

      .addCase(ADD_USER.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })

      .addCase(ADD_USER.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userDetails = action.payload;
        state.isSuccess = true;
      })

      .addCase(ADD_USER.rejected, (state) => {
        state.isLoading = false;
        state.userDetails = {};
        state.isSuccess = false;
      })

      .addCase(REGISTER_COURSE.pending, (state) => {
        state.isLoading = true;
        state.isCourseRegister = false;
      })

      .addCase(REGISTER_COURSE.fulfilled, (state) => {
        state.isLoading = false;
        state.isCourseRegister = true;
      })
      .addCase(REGISTER_COURSE.rejected, (state) => {
        state.isLoading = false;
        state.isCourseRegister = false;
      })

      .addCase(LOGIN.pending, (state) => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })

      .addCase(LOGIN.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        const {
          token,
          user_id,
          firstname,
          email,
          matric_no,
          faculty,
          level,
          department,
          is_staff,
          lastname,
          imageUrl,
          courses
        } = action.payload;

        if (token) {
          const details = {
            user_id,
            firstname,
            email,
            matric_no,
            faculty,
            level,
            department,
            is_staff,
            lastname,
            imageUrl,
            courses
          };
          Toast.fire({
            icon: "success",
            title: "Login Successful",
          });
          cookie.set("token", token);
          state.userDetails = details;
        }
      })

      .addCase(LOGIN.rejected, (state) => {
        state.isLoading = false;
        Toast.fire({
          icon: "error",
          title: "Incorrect details",
        });
      });
  },
});

export const { logout, reset } = userSlice.actions;
export default userSlice.reducer;
