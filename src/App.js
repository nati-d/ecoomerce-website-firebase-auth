
import './App.css';
import React, {useEffect,useState} from 'react';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Login from './pages/authentication/Login'
import Register from './pages/authentication/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import Checkout from './pages/Checkout/Checkout'
import ProtectedRoute from './ProtectedRoute';

import {Routes, Route} from 'react-router-dom';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {

  return (
   <div className='App'>
    <UserAuthContextProvider>

   

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  exact path='/cart' element={<Cart/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route exact path='/checkout' element={<ProtectedRoute><Checkout/></ProtectedRoute>}/>
    </Routes>
    
    
    </UserAuthContextProvider>
  
      
   </div>
  );
}

export default App;
