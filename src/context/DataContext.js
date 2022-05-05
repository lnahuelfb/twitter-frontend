import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  
  return (
    <DataContext.Provider value={{
      isLogin,
      setIsLogin
    }}>
      {children}
    </DataContext.Provider>
  )
}