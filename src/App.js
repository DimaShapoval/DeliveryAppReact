import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ShopMain from './components/ShopMain/ShopMain';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { getProductInfo } from './Redux/getProductInfo';
import SignUpContainer from './components/SignUp/SignUpContainer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/' element={<ShopMain />} />
          <Route path='/shop/*' element={<ShopMain />} />
          <Route  path='/cart/*' element={<Cart/>} />
          <Route path='/sign-up' element={<SignUpContainer/>} />
          <Route path='/login' element={<LoginContainer/>} />
        </Routes>

      </div>

    </div>

  );
}

export default App;
