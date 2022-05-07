import React from 'react'
import { Welcome } from './components/welcome'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NotFound } from './components/404'
import { Login } from './components/login'
import { SingUp } from './components/signUp'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SingUp/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
