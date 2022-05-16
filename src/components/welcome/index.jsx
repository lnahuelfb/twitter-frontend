import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

import { useNavigate } from 'react-router-dom'
import { DataContext } from 'context/DataContext'
import twitterWhite from 'images/twitter-white.svg'
import twitter from 'images/twitter.svg'
import './index.css'

export const Welcome = () => {
  const { isLogin } = useContext(DataContext)
  const navigate = useNavigate()

  const { loginWithRedirect } = useAuth0()

  if (isLogin) {
    navigate('/home')
  }

  return (
    <div className='welcome-container'>
      <div className='welcome-login'>
        <div className='welcome-login-data'>

          <img src={twitter} alt='logo twitter' />

          <div className='welcome-login-title'>
            <span>Lo que está pasando ahora</span>
          </div>

          <div className='welcome-login-subtitle'>
            <span>Únete a TwitDev hoy mismo.</span>
          </div>

          <div className='welcome-login-have-account'>
            <span>¿Ya tienes cuenta?</span>
          </div>

          <button
            className='welcome-login-button-login'
            onClick={() => loginWithRedirect()}
          >
            <span>Iniciar sesión o crear cuenta</span>
          </button>

          <div className='welcome-login-terms-and-conditions'>
            <span>
              Pagina desarrollada por Nahuel Fernandez Beschtedt. No tiene fines comerciales. <br />
              Cree esta pagina con el fin de demostrar mis conociemientos en el desarrollo de aplicaciones web. <br />
              Si desea ver mi porfolio por favor haga click <a className='welcome-login-anchor' href='https://porfolio-nahuelfb.vercel.app'>aquí.</a>
            </span>
          </div>

        </div>
      </div>
      <div className='welcome-image'>
        <img src={twitterWhite} alt='logo twitter' />
      </div>
    </div>
  )
}
