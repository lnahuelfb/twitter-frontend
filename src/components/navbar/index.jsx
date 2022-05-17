import React, { useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'
import { DataContext } from 'context/DataContext'

import twitterWhite from 'images/twitter-white.svg'

import './index.css'
import { Loading } from 'components/loading'

export const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useContext(DataContext)

  if (isAuthenticated === false) return <div>No estás autenticado</div>

  if (isLoading) return <Loading />

  return (
    <div className='container'>
      <Outlet />
      <div className='navbar'>
        <div className='navbar-section'>
          <div className='navbar-image-container'>
            <img src={twitterWhite} alt='Twitter logo' />
          </div>
          <nav>
            <ul className='navbar-items'>
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
          </nav>
        </div>
        <div className='navbar-user-data'>
          <div className='navbar-user-image-container'>
            <img
              src={user.picture}
              alt={user.name}
              className='navbar-user-image'
            />
          </div>
          <div className='navbar-user-name-container'>
            <p className='navbar-user-name'>{user.name}</p>
            <p className='navbar-user-username'>@{user.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
