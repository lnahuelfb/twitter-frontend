import React from 'react'

import { Link, Outlet } from 'react-router-dom'
import './index.css'

export const NavBar = () => {
  return (
    <div className='container'>
      <Outlet />
      <nav className='navBar'>
        <ul>
          <Link to='/home'>
            <li>Inicio</li>
          </Link>
          <Link to='/explore'>
            <li>Explorar</li>
          </Link>
          <Link to='/notifications'>
            <li>Notificaciones</li>
          </Link>
          <Link to='/messages'>
            <li>Mensaje</li>
          </Link>
          <Link to='/bookmarks'>
            <li>Guardado</li>
          </Link>
          <Link to='/:user'>
            <li>Perfil</li>
          </Link>
          <Link to='/compose/tweet'>
            <li>Twittear</li>
          </Link>
        </ul>
        <div className='navbar-user-data' />
      </nav>
    </div>
  )
}
