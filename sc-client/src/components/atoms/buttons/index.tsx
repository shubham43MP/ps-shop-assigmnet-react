import React from 'react'
import './style.scss';

type ButtonPropType = {
  label: string;
}

function Button({ label='' }: ButtonPropType) {
  return (
    <>
      <button className='button-style'>{ label }</button> 
    </>
  )
}

export default Button
