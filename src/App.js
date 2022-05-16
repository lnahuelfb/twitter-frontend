import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from 'components/welcome'
import { NotFound } from 'components/404'
import { Home } from 'components/home'
import 'App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
