import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}> 
    <ToastContainer
    theme="dark"
    position="top-right"
    autoClose={1500}
    hideProgressBar={false}
    closeOnClick
    pauseOnHover
    
/>

    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

