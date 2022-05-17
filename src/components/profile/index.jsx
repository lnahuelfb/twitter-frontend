import React, { useContext } from 'react'
import { DataContext } from 'context/DataContext'
import { Loading } from 'components/loading'

import './index.css'

export const Profile = () => {
  const { isAuthenticated, user, isLoading } = useContext(DataContext)

  if (isLoading) return <Loading />
  if (isAuthenticated) return <div>No estás autenticado</div>

  return (
    <div className='container'>
      <div className='profile-container'>
        <img
          src={user.picture}
          alt={user.name}
          className='profile-image'
        />
        <h1>{user.name}</h1>
        <h2>{user.email}</h2>
        <h3>{user.nickname}</h3>
      </div>

    </div>
  )
}
