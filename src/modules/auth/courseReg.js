import {createSlice} from '@reduxjs/toolkit'

export const courseRegSlice= createSlice({
    name: 'coursesReg',
    initialState:{
        courses: []
    },
    reducers:{
        coursesList: (state, action)=>{
            state.courses = action.payload
        }
    }
})

export const {coursesList}= courseRegSlice.actions;
export default courseRegSlice.reducer
