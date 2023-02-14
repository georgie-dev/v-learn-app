import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
// import thunkMiddleware from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

// const composedEnhancer= composeWithDevTools(applyMiddleware(thunkMiddleware))

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: {
        user: persistedReducer,
        middleware: [thunk]
    },
})

export const persistor = persistStore(store)