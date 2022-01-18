import React from 'react'
import { useNavigate } from 'react-router'
import Tooltip from '@mui/material/Tooltip';
import './style.scss'

function HomeProduct() {
  const navigate = useNavigate() 
  return (
    <div className='home-product-container'>
      <Tooltip title="Home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon home-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={ () =>  navigate('/home') }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={ 2 }
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </Tooltip>
      <Tooltip title="Products">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon product-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          onClick={ () =>  navigate('/products') }
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={ 2 }
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </Tooltip>
    </div>
  )
}

export default HomeProduct
