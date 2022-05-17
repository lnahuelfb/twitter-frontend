import React, { useContext } from 'react'
import { DataContext } from 'context/DataContext'
import { Link } from 'react-router-dom'

import { Loading } from 'components/loading'

import './index.css'

export const Home = () => {
  const { isAuthenticated, user, isLoading, logout } = useContext(DataContext)

  if (isLoading) return <Loading />

  if (isAuthenticated === false) return <div>No estás autenticado</div>

  return (
    <div className='home-container'>
      <img src={user.picture} alt={user.name} />
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <h3>{user.nickname}</h3>
      <h4>{user.email_verified.toString()}</h4>
      <Link to='/profile'>
        <button>Ir al perfl</button>
      </Link>
      <button onClick={() => logout({ returnTo: 'http://localhost:3000/welcome' })}>Logout</button>
    </div>
  )
}
