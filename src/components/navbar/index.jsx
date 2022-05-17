import React, { useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'
import { DataContext } from 'context/DataContext'

import { Loading } from 'components/loading'

import twitterWhite from 'images/twitter-white.svg'

import './index.css'

export const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useContext(DataContext)

  if (isAuthenticated === false) return <div>No estás autenticado</div>

  if (isLoading) return <Loading />

  console.log(user)

  return (
    <div className='container'>
      <Outlet />
      <div className='navbar'>
        <div className='navbar-section'>
          <div className='navbar-image-container'>
            <Link to='/home'>
              <img src={twitterWhite} alt='Twitter logo' />
            </Link>
          </div>
          <nav>
            <ul className='navbar-items'>
              <Link to='/home'>
                <div className='navbar-item'>
                  <li>Inicio</li>
                </div>
              </Link>
              <Link to='/explore'>
                <div className='navbar-item'>
                  <li>Explorar</li>
                </div>
              </Link>
              <Link to='/notifications'>
                <div className='navbar-item'>
                  <li>Notificaciones</li>
                </div>
              </Link>
              <Link to='/messages'>
                <div className='navbar-item'>
                  <li>Mensaje</li>
                </div>
              </Link>
              <Link to='/bookmarks'>
                <div className='navbar-item'>
                  <li>Guardado</li>
                </div>
              </Link>
              <Link to='/profile'>
                <div className='navbar-item'>
                  <li>Perfil</li>
                </div>
              </Link>
              <Link to='/compose/tweet'>
                <div className='navbar-twittear'>
                  <li>Twittear</li>
                </div>
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
            <p className='navbar-user-username'>@{user.nickname}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
