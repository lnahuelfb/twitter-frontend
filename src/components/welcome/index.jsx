import React from 'react'
import twitterWhite from '../../images/twitter-white.svg'
import twitter from '../../images/twitter.svg'
import google from '../../images/google.svg'
import apple from '../../images/apple.svg'
import './index.css'

export const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className="welcome-login">
        <div className="welcome-login-data">

          <img src={twitter} alt="logo twitter" />

          <div className="welcome-login-title">
            <span>Lo que está pasando ahora</span>
          </div>

          <div className="welcome-login-subtitle">
            <span>Únete a Twitter hoy mismo.</span>
          </div>

          <div className="welcome-login-button-google">
            <img src={google} alt="google logo" />
            <span>Registrarse con Google</span>
          </div>

          <div className="welcome-login-button-apple">
            <img src={apple} alt="apple logo" />
            <span>Registrarse con Apple</span>
          </div>

        </div>
      </div>
      <div className="welcome-image">
        <img src={twitterWhite} alt='logo twitter' />
      </div>
    </div>
  )
}
