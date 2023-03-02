import axiosInstance from "../modules/auth/axios";
import Toast from "../modules/auth/Toast";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const UPLOAD_COURSE = createAsyncThunk(
    "file_upload/UPLOAD_COURSE",
    async (courseMaterial, thunkAPI) => {
      try {
        const course = await axiosInstance.post("/api/coursematerials/", courseMaterial, {
          headers: {
            'content-type': 'multipart/form-data'
        }
        });
  
        Toast.fire({
          icon: "success",
          title: "Success",
        });
        console.log(course)
        return course.data;
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: error,
        });
        return thunkAPI.rejectWithValue(error);
      }
    }
  );

  export const UPLOAD_ASSIGNMENT = createAsyncThunk(
    "file_upload/UPLOAD_ASSIGNMENT",
    async (assignment, thunkAPI) => {
      try {
        const course = await axiosInstance.post("/api/uploadassignment/", assignment, {
          headers: {
            'content-type': 'multipart/form-data'
        }
        });
  
        Toast.fire({
          icon: "success",
          title: "Success",
        });
        console.log(course)
        return course.data;
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: "error",
          title: error,
        });
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


export const fileUpload=createSlice({
    name: 'file_upload',
    initialState:{
      isLoading: false,
    },

    extraReducers: (builder) => {
        builder

        .addCase(UPLOAD_COURSE.pending, (state)=>{
            state.isLoading= true
        })

        .addCase(UPLOAD_COURSE.fulfilled, (state)=>{
            state.isLoading= false
        })

        .addCase(UPLOAD_COURSE.rejected, (state)=>{
            state.isLoading= false
        })

        .addCase(UPLOAD_ASSIGNMENT.pending, (state)=>{
          state.isLoading= true
      })

      .addCase(UPLOAD_ASSIGNMENT.fulfilled, (state)=>{
          state.isLoading= false
      })

      .addCase(UPLOAD_ASSIGNMENT.rejected, (state)=>{
          state.isLoading= false
      })
    }
});

export default fileUpload.reducer