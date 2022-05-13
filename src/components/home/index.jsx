import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../../context/DataContext'

export const Home = () => {
  const { isLogin } = useContext(DataContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    }
  })

  return (
    <h1>Home</h1>
  )
}
