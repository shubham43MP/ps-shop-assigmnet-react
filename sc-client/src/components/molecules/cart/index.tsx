import React from 'react'
import './style.scss'

const EmptyCart = () => {
  return (
    <div className='empty-cart-container'>
      <h2 className="no-items-cart">No items in your cart</h2>
      <p className="no-items-cart-subheading">Your favourite items are just a click away</p>
    </div>
  )
}

function Cart() {
  return (
    <div className="cart-container">
      <div className="mycart-top-header">
        <p className="my-cart-text">My Cart</p>
        <svg xmlns="http://www.w3.org/2000/svg"
          className="close-icon"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd" />
        </svg>
      </div>
      <div className='cart-contents'>
        <EmptyCart />
      </div>
      <button className="btn-shopping">Start Shopping</button>
    </div>
  )
}

export default Cart
