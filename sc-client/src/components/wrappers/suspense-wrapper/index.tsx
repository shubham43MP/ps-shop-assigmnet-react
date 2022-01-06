import React from 'react'
import { TChildProps } from 'types/common.types'

function SuspenseWrapper({ children }: TChildProps) {
  return (
    <>
      <React.Suspense fallback={ <div>Loading...</div> }>
        { children }
      </React.Suspense>      
    </>
  )
}

export default SuspenseWrapper
