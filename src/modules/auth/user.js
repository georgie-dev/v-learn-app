import {createSlice} from '@reduxjs/toolkit'

export const userSlice= createSlice({
    name: 'user',
    initialState:{
        isAuthenticated: false,
        user: {}
    },
    reducers:{
        register: (state, action)=>{
            state.user += action.payload
            state.isAuthenticated = true
        }
    }
})

export const {register}= userSlice.actions;
export default userSlice.reducer