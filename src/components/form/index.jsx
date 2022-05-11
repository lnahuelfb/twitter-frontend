import React, { useState } from 'react'
import { yearsOld } from '../../functions'
import './index.css'

export const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: new Date()
  })

  const { name, email, date } = form
  const today = new Date()

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const age = yearsOld(date)
    if (age >= 13) {
      window.alert(`${name} is ${yearsOld(date)} years old`)
    } else {
      window.alert(`${name} is not old enough`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='signup-data'>
        <div className='welcome-login-subtitle'>
          <span>Crea tu cuenta</span>
        </div>

        <div className='signup-input'>
          <input
            type='text'
            placeholder='Nombre'
            name='name'
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='signup-input'>
          <input
            type='email'
            placeholder='Correo electrónico'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className='signup-birthday'>
          <span className='signup-birthday-title'>Fecha de nacimiento</span>

          <span className='signup-birthday-subtitle'>Esta información no será pública. Confirma tu propia edad, incluso si esta cuenta es para una empresa, una mascota u otra cosa.</span>

          <div className='signup-birthday'>
            <input
              type='date'
              className='signup-birthday-input'
              value={date}
              onChange={handleChange}
              name='date'
              min='1900-01-01'
              max={
              today
                .toISOString()
                .split('T')[0]
            }
              required
            />
          </div>

        </div>
        <div className='signup-button'>
          <button
            className='signup-button-submit'
            type='submit'
            onSubmit={handleSubmit}
          >Crear cuenta
          </button>
        </div>
      </div>
    </form>
  )
}
