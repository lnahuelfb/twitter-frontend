import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import twitter from './../../images/twitter.svg'
import './index.css'

export const LoginCard = () => {
  return (
    <div className='signup'>
      <div className='signup-container'>
        <div className='signup-header'>
          <div className='signup-header-item-1'>
            <Link to='/'>
              <button>
                x
              </button>
            </Link>
          </div>
          <div className='signup-header-item-2'>
            <img src={twitter} alt='twitter logo' />
          </div>
          <div className='signup-header-item-3' />
        </div>
        <div className='sign-card'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}
