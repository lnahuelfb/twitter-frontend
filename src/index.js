import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import { DataProvider } from 'context/DataContext'
import App from 'App'
import 'index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-we1ictce.us.auth0.com'
      clientId='a7OW9piRXklHS7M1TsnCK7S8jE0CLiQB'
      redirectUri='http://localhost:3000/home'
    >
      <DataProvider>
        <App />
      </DataProvider>
    </Auth0Provider>
  </React.StrictMode>
)
