import React from 'react'

import twitter from 'images/twitter.svg'

import './index.css'

export const Loading = () => {
  return (
    <div className='container'>
      <div className='loading-container'>
        <img src={twitter} alt='Twitter logo' />
        <div className='loading-text'>
          <span>Loading...</span>
        </div>
      </div>
    </div>
  )
}
