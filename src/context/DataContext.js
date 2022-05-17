import React, {
  createContext,
  useState,
  useEffect
} from 'react'
import { useAuth0 } from '@auth0/auth0-react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  const {
    user,
    isAuthenticated,
    isLoading,
    logout,
    login
  } = useAuth0()

  useEffect(() => {
    isAuthenticated && setIsLogin(true)
  }, [isAuthenticated])

  return (
    <DataContext.Provider value={{
      isLogin,
      setIsLogin,
      user,
      isLoading,
      logout,
      login
    }}
    >
      {children}
    </DataContext.Provider>
  )
}
