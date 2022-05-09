import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Welcome } from './components/welcome'
import { NotFound } from './components/404'
import { Login } from './components/login'
import { SignUp } from './components/signUp'
import { Home } from './components/home'
import { Form } from './components/form'
import { LoginCard } from './components/login-card'
import './App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/i' element={<LoginCard />}>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signup/form' element={<Form />} />
        </Route>
        <Route path='/home' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
