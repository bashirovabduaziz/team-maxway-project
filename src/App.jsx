import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import About from './page/About/About'
import Cart from './page/Cart/Cart'
import Contact from './page/Contact/Contact'
import Filial from './page/Filials/Filial'

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Filial />} />
        </Routes>
      </div>
    </>
  );
}

export default App