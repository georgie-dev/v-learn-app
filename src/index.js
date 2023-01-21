import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProvider } from "./contexts/ContextProvider";

import { Provider } from 'react-redux';
import { store, persistor } from './modules/auth/store';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
