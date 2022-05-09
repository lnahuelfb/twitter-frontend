import React from 'react'
import './index.css'

export const Form = () => {
  return (
    <div className='signup-data'>
      <div className='welcome-login-subtitle'>
        <span>Crea tu cuenta</span>
      </div>

      <div className='signup-input'>
        <input type='text' placeholder='Nombre' />
      </div>
      <div className='signup-input'>
        <input type='text' placeholder='Correo electrónico' />
      </div>

      <div className='signup-birthday'>
        <span className='signup-birthday-title'>Fecha de nacimiento</span>

        <span className='signup-birthday-subtitle'>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</span>

        <div className='signup-birthday'>
          <input type='date' className='signup-birthday-input' />
        </div>

      </div>
    </div>
  )
}
