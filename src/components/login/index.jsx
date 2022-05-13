import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from '../../images/google.svg'
import apple from '../../images/apple.svg'
import openEye from '../../images/open-eye.png'
import closeEye from '../../images/close-eye.png'
import './index.css'

export const Login = () => {
  const [Data, setData] = useState({
    email: '',
    password: ''
  })

  const [next, setNext] = useState(false)
  const [seePassword, setSeePassword] = useState(false)

  const handleChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='signup-data'>

      {
        next
          ? (
            <>
              <div className='login'>

                <h2>Introduce tu contraseña</h2>

                <form action=''>

                  <div className='login-input'>
                    <input
                      className='login-mail-input'
                      type='email'
                      placeholder='Correo electrónico o usuario'
                      name='email'
                      value={Data.email}
                      onChange={handleChange}
                      required
                      readOnly
                    />
                    {
                      seePassword
                        ? (
                          <div className='login-password-container'>
                            <input
                              type='text'
                              placeholder='Contraseña'
                              name='password'
                              value={Data.password}
                              onChange={handleChange}
                              className='login-password-input'
                              required
                            />
                            <button
                              onClick={() => setSeePassword(false)}
                              type='button'
                              className='login-eye-button'
                            >
                              <img src={closeEye} alt='ocultar contraseña' />
                            </button>
                          </div>
                          )
                        : (
                          <div className='login-password-container'>
                            <input
                              type='password'
                              placeholder='Contraseña'
                              name='password'
                              value={Data.password}
                              onChange={handleChange}
                              required
                            />
                            <button
                              onClick={() => setSeePassword(true)}
                              type='button'
                              className='login-eye-button'
                            >
                              <img src={openEye} alt='Mostrar contraseña' />
                            </button>
                          </div>
                          )
                    }
                    <Link to='/i/password'>
                      <span>¿Olvidaste tu contraseña?</span>
                    </Link>
                  </div>
                </form>
              </div>
            </>
            )
          : (
            <>
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

              <form action=''>

                <div className='login-input'>
                  <input
                    type='text'
                    placeholder='Correo electrónico o usuario'
                    name='email'
                    value={Data.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </form>

              <button
                onClick={() => setNext(true)}
                className='login-next-button'
              >Siguiente
              </button>

              <Link to='/i/password'>
                <button className='login-password-button'>
                  ¿Olvidaste tu contraseña?
                </button>
              </Link>

              <div className='signup-data-login'>
                <span>¿No tienes una cuenta? <Link to='/i/signup'>Registrate</Link></span>
              </div>
            </>
            )

      }
    </div>
  )
}
