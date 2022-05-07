import React from 'react'
import twitter from '../../images/twitter.svg'
import google from '../../images/google.svg'
import apple from '../../images/apple.svg'
import './index.css'
import { Link } from 'react-router-dom'

export const Login = () => {
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
        <div className='signup-data'>
          <div className='welcome-login-subtitle'>
            <span>Inicia sesion en TwitDev</span>
          </div>

          <div className='welcome-login-button-google'>
            <img src={google} alt='google logo' />
            <span>Inicia sesion con Google</span>
          </div>

          <div className='welcome-login-button-apple'>
            <img src={apple} alt='apple logo' />
            <span>Inicia sesion con Apple</span>
          </div>

          <div className='welcome-login-separation'>
            <div className='line' />

            <span>o</span>
            <div className='line' />
          </div>

          <div className='login-input'>
            <input type='text' placeholder='Correo electrónico o usuario' />
          </div>
          <div className='signup-data-login'>
            <span>¿No tienes una cuenta? <Link to='/signup'>Registrate</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}
