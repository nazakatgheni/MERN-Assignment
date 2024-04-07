import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import GetAllProduct from './components/GetAllProduct'
import GetOneProduct from './components/GetOneProduct'
import ProductForm from './components/ProductForm'
import Nav from './components/Nav'



function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<ProductForm />} />
        <Route path='/product' element={<GetAllProduct />} />
        <Route path='/product/:id' element={<GetOneProduct />} />
      </Routes>
    </>
  )
}

export default App
