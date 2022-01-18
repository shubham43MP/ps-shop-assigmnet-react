import React from 'react'
import './style.scss';

type ButtonPropType = {
  label: string;
  handleClick?: () => void;
}

function Button({ label='', handleClick }: ButtonPropType) {
  return (
    <>
      <button
        className='button-style'
        onClick={ handleClick }
      >
        { label }
      </button> 
    </>
  )
}

export default Button
