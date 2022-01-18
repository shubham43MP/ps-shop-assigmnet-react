import React from 'react'
import CircularLoader from 'components/molecules/circular-loader'
import { TChildProps } from 'types/common.types'
import './style.scss'

type TLW = {
  loading: boolean
}

function LoadingWrapper({ loading, children }: TLW & TChildProps) {
  return (
    <>
      {
        loading ?
          <div className='wrapper-circular-loader'>
            <CircularLoader />
          </div>
          : 
          <>{ children }</>
      }
    </>
  )
}

export default LoadingWrapper
