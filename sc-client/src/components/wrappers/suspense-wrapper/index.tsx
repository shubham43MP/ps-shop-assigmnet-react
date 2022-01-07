import CircularLoader from 'components/molecules/circular-loader'
import React from 'react'
import { TChildProps } from 'types/common.types'

function SuspenseWrapper({ children }: TChildProps) {
  return (
    <>
      <React.Suspense fallback={ <CircularLoader /> }>
        { children }
      </React.Suspense>      
    </>
  )
}

export default SuspenseWrapper
