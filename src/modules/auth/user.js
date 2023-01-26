import { createSlice } from '@reduxjs/toolkit';
import {Cookies} from 'react-cookie';

const cookie = new Cookies()

const user = cookie.get('user')

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        userDetails: user || {},
    },
    reducers: {
        register: (state, action) => {
            state.userDetails = action.payload
            state.isAuthenticated = true
        },
        login: (state, action) => {
            state.userDetails = action.payload
            state.isAuthenticated = true
            cookie.set('user', action.payload)
        },

        logout: (state) => {
            state.isAuthenticated = false
            state.userDetails = {}
            localStorage.clear()
            cookie.remove('user')
        }
    }
})

export const { register, login, logout } = userSlice.actions;
export default userSlice.reducer
