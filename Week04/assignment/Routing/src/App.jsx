import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Hello from './components/Hello'
import Nav from './components/Nav'
import Number from './components/Number'
import Color from './components/Color'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/4' element={<Number />} />
          <Route path='/hello' element={<Hello />} />
          <Route path='/hello/blue/red' element={<Color />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
