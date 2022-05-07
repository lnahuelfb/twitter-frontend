import React from 'react'
import twitter from '../../images/twitter.svg'
import google from '../../images/google.svg'
import apple from '../../images/apple.svg'
import './index.css'
import { Link } from 'react-router-dom'

export const SingUp = () => {
  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-header-item-1">
            <button>
              x
            </button>
          </div>
          <div className="signup-header-item-2">
            <img src={twitter} alt='twitter logo' />
          </div>
          <div className="signup-header-item-3"></div>
        </div>
        <div className="signup-data">
          <div className="welcome-login-subtitle">
            <span>Únete a TwitDev hoy mismo.</span>
          </div>

          <div className="welcome-login-button-google">
              <img src={google} alt="google logo" />
              <span>Registrarse con Google</span>
            </div>

            <div className="welcome-login-button-apple">
              <img src={apple} alt="apple logo" />
              <span>Registrarse con Apple</span>
            </div>

            <div className="welcome-login-separation">
              <div className="line"></div>

              <span>o</span>
              <div className="line"></div>
            </div>

            <div className="welcome-login-button-register">
              <span>Registrarse con email</span>
            </div>
            <div className="welcome-login-terms-and-conditions">
              <span>Al registrarte, aceptas los Términos de servicio y la Política de privacidad, incluida la política de Uso de Cookies.</span>
          </div>
          <div className="signup-data-login">
            <span>¿Ya tienes una cuenta? <Link to='/login'>Inicia sesión</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}
