import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Welcome } from 'components/welcome'
import { NotFound } from 'components/404'
import { Home } from 'components/home'
import { Profile } from 'components/profile'
import { NavBar } from 'components/navbar'

import 'App.css'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route path='home' element={<Home />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/welcome' element={<Welcome />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
