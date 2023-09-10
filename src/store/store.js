import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import fileUploadReducer from './fileUpload'
import storageSession from 'redux-persist/lib/storage/session'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";


// const composedEnhancer= composeWithDevTools(applyMiddleware(thunkMiddleware))

const persistConfig = {
    key: 'root',
    storage: storageSession
}

const rootReducer = combineReducers({
    user: userReducer,
    fileUpload: fileUploadReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

export const persistor = persistStore(store)