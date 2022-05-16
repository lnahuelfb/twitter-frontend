import React, { useContext } from 'react'
import { DataContext } from 'context/DataContext'
import { Loading } from 'components/loading'

import './index.css'

export const Profile = () => {
  const { isLogin, user, isLoading } = useContext(DataContext)

  return (
    <div className='container'>
      {
        isLoading
          ? <Loading />
          : (
            <>
              {
              isLogin
                ? (
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
                  )
                : (
                  <div>
                    <h1>No estas autenticado</h1>
                  </div>
                  )
            }
            </>
            )
      }
    </div>
  )
}
