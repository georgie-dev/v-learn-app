import {createSlice} from '@reduxjs/toolkit'

export const userSlice= createSlice({
    name: 'user',
    initialState:{
        isAuthenticated: false,
        userDetails: {},
        courses: []
    },
    reducers:{
        register: (state, action)=>{
            state.userDetails = action.payload
            state.isAuthenticated = true
        },
        coursesList: (state, action)=>{
    }
}
})

export const {register, coursesList}= userSlice.actions;
export default userSlice.reducer
