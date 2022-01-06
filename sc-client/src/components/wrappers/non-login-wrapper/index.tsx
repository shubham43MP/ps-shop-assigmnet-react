import React from 'react'
import { Navigate } from 'react-router-dom'
import { hasAccessTokenSessionStorage } from 'config/utitlities'

type TNonLoginWrapper = {
  children: React.ReactNode;
}

function NonLoginWrapper({ children }: TNonLoginWrapper) {
  return (
    <>
      {
        hasAccessTokenSessionStorage() ?
          <><Navigate to="/home" /></>
          :
          <>{ children }</>
      }      
    </>
  )
}

export default NonLoginWrapper
