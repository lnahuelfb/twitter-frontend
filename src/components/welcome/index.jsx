import React from 'react'
import { Link } from 'react-router-dom'
import twitterWhite from '../../images/twitter-white.svg'
import twitter from '../../images/twitter.svg'
import google from '../../images/google.svg'
import apple from '../../images/apple.svg'
import './index.css'

export const Welcome = () => {
  return (
    <>
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

            <div className='welcome-login-button-google'>
              <img src={google} alt='google logo' />
              <span>Registrarse con Google</span>
            </div>

            <div className='welcome-login-button-apple'>
              <img src={apple} alt='apple logo' />
              <span>Registrarse con Apple</span>
            </div>

            <div className='welcome-login-separation'>
              <div className='line' />

              <span>o</span>
              <div className='line' />
            </div>

            <div className='welcome-login-button-register'>
              <Link to='/signup'>
                <span>Registrarse con email</span>
              </Link>
            </div>
            <div className='welcome-login-terms-and-conditions'>
              <span>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</span>
            </div>

            <div className='welcome-login-have-account'>
              <span>¿Ya tienes cuenta?</span>
            </div>
            <div className='welcome-login-button-login'>
              <Link to='/login' className='button-register-link'>
                <span>Iniciar sesión</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='welcome-image'>
          <img src={twitterWhite} alt='logo twitter' />
        </div>
      </div>
    </>
  )
}
