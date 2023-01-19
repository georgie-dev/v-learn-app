import {createSlice} from '@reduxjs/toolkit';

export const userSlice= createSlice({
    name: 'user',
    initialState:{
        isAuthenticated: false,
        userDetails: {},
    },
    reducers:{
        register: (state, action)=>{
            state.userDetails = action.payload
            state.isAuthenticated = true
        },
        login: (state, action)=>{
            state.userDetails = action.payload
            state.isAuthenticated = true
        }
}
})

export const {register, login}= userSlice.actions;
export default userSlice.reducer
