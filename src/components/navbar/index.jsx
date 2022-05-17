import React, { useContext } from 'react'

import { Link, Outlet } from 'react-router-dom'
import { DataContext } from 'context/DataContext'

import { Loading } from 'components/loading'

import twitterWhite from 'images/twitter-white.svg'
import home from 'images/home.svg'
import hash from 'images/hash.svg'
import bell from 'images/bell.svg'
import message from 'images/message.svg'
import bookmark from 'images/bookmark.svg'
import profile from 'images/profile.svg'

import './index.css'

export const NavBar = () => {
  const { user, isLogin, isLoading } = useContext(DataContext)

  if (!isLogin) return <div>No estás autenticado</div>

  if (isLoading) return <Loading />

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
                  <li>
                    <img src={home} alt='home' className='navbar-item-icon' />
                    Inicio
                  </li>
                </div>
              </Link>
              <Link to='/explore'>
                <div className='navbar-item'>
                  <img src={hash} alt='explore' className='navbar-item-icon' />
                  <li>Explorar</li>
                </div>
              </Link>
              <Link to='/notifications'>
                <div className='navbar-item'>
                  <img src={bell} alt='notifications' className='navbar-item-icon' />
                  <li>Notificaciones</li>
                </div>
              </Link>
              <Link to='/messages'>
                <div className='navbar-item'>
                  <img src={message} alt='messages' className='navbar-item-icon' />
                  <li>Mensaje</li>
                </div>
              </Link>
              <Link to='/bookmarks'>
                <div className='navbar-item'>
                  <img src={bookmark} alt='bookmarks' className='navbar-item-icon' />
                  <li>Guardado</li>
                </div>
              </Link>
              <Link to='/profile'>
                <div className='navbar-item'>
                  <img src={profile} alt='profile' className='navbar-item-icon' />
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
            <span className='navbar-user-name'>{user.name}</span>
            <span className='navbar-user-username'>@{user.nickname}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
