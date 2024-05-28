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
    
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/filial' element={<Filial />}/>
      </Routes>
    </div>
    </>
  )
}

export default App