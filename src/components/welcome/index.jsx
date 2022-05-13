import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'
import twitterWhite from '../../images/twitter-white.svg'
import twitter from '../../images/twitter.svg'
import google from '../../images/google.svg'
import apple from '../../images/apple.svg'
import './index.css'

export const Welcome = () => {
  const { isLogin } = useContext(DataContext)
  const navigate = useNavigate()

  if (isLogin) {
    navigate('/home')
  }

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

            <Link to='/i/signup'>
              <div className='welcome-login-button-register'>
                <span>Registrarse con email</span>
              </div>
            </Link>
            <div className='welcome-login-terms-and-conditions'>
              <span>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</span>
            </div>

            <div className='welcome-login-have-account'>
              <span>¿Ya tienes cuenta?</span>
            </div>
            <Link to='/i/login' className='button-register-link'>
              <div className='welcome-login-button-login'>
                <span>Iniciar sesión</span>
              </div>
            </Link>
          </div>
        </div>
        <div className='welcome-image'>
          <img src={twitterWhite} alt='logo twitter' />
        </div>
      </div>
    </>
  )
}
