import React, { useContext } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { DataContext } from 'context/DataContext'

export const Home = () => {
  const { isLogin, user, isLoading } = useContext(DataContext)
  const { logout } = useAuth0()

  console.log(user)

  return (
    <>
      {
        isLoading
          ? <div>Loading...</div>
          : <> </>
      }
      {
        isLogin
          ? (
            <div>
              <img src={user.picture} alt={user.name} />
              <h1>{user.name}</h1>
              <h2>{user.email}</h2>
              <h3>{user.nickname}</h3>
              <h4>{user.email_verified.toString()}</h4>
              <button onClick={() => logout({ returnTo: 'http://localhost:3000/' })}>Logout</button>
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
