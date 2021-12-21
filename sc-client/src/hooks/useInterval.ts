import { useEffect, useRef } from 'react'

export default function useInterval(callback: any, delay: number) {
  const savedCallback = useRef<any>()
  useEffect(() => {
    savedCallback.current = callback
  }, [ callback ])
  
  useEffect(() => {
    function tick() {
      if(savedCallback) savedCallback.current() 
    }
    if (delay !== null) {
      const id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [ delay ])
}