import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ShopMain from './components/ShopMain/ShopMain';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div>
      <Header />
      <div>
        <Routes>
          <Route path='/shop/*' element={<ShopMain />} />
          <Route  path='/cart/*' element={<Cart/>} />
        </Routes>

      </div>

    </div>

  );
}

export default App;
