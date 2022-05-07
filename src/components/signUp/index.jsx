import React from 'react'
import twitter from '../../images/twitter.svg'
import './index.css'

export const SingUp = () => {
  return (
    <div className='signup'>
      <div className="signup-container">
        <div className="signup-header">
          <div className="signup-header-item-1">
            <button>
              x
            </button>
          </div>
          <div className="signup-header-item-2">
            <img src={twitter} alt='twitter logo' />
          </div>
          <div className="signup-header-item-3"></div>
        </div>
      </div>
    </div>
  )
}
