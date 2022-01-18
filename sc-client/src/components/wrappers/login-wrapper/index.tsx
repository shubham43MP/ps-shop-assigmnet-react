import React from 'react'
import { Navigate } from 'react-router-dom'
import { hasAccessTokenSessionStorage } from 'config/utitlities'

type TLogggedinWrapper = {
  children: React.ReactNode;
}

function LogggedinWrapper({ children }: TLogggedinWrapper) {
  return (
    <>
      {
        hasAccessTokenSessionStorage() ?
          <>
            { children }
          </>
          :
          <>{ <Navigate to="/login" /> }</>
      }
    </>
  )
}

export default LogggedinWrapper
