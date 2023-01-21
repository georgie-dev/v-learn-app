import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        userDetails: {},
    },
    reducers: {
        register: (state, action) => {
            state.userDetails = action.payload
            state.isAuthenticated = true
        },
        login: (state, action) => {
            state.userDetails = action.payload
            state.isAuthenticated = true
        },

        logout: (state) => {
            state.isAuthenticated = false
            state.userDetails = {}
            localStorage.clear()
        }
    }
})

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer
