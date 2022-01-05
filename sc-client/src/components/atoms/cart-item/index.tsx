import React from 'react'
import './style.scss'

type TCartItem = {
  heading?: string;
  imageURL?: string;
  quantity?: number;
  unitPrice?: number;
  handleIncrementDecrement: (threshold: number, itemId: string) =>  void;
  itemId: string;
  handleDeleteCartItem: (itemId: string) => void
}

function CartItem({
  heading= 'Apple - Washington, Regular 4pcs',
  imageURL = '/static/images/products/fruit-n-veg/apple.jpg',
  quantity = 2,
  unitPrice = 187,
  handleIncrementDecrement,
  itemId,
  handleDeleteCartItem
}: TCartItem) {
  return (
    <div className='cart-item-container'>
      <img src={ imageURL } alt="Product" className='ci-img' />
      <div className="cart-item-detail">
        <h4 className='base-font-color heading-product'>{ heading }</h4>

        <div className="item-quantity-picker">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="delete-cart-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={ () => handleDeleteCartItem(itemId) }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={ 2 }
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          <button
            className="item-btn"
            disabled={ quantity === 0 }
            onClick={ () => handleIncrementDecrement(-1, itemId) }
          >
            -
          </button>
          <p className="item-unit base-font-color">{ quantity }</p>
          <button className="item-btn" onClick={ () => handleIncrementDecrement(1, itemId) }>+</button>
          <p className="item-unit-price base-font-color">
            <strong className='strong-x-element'>X</strong><span>&#8377;</span>{` ${ unitPrice }`}</p>
        </div>
      </div>      
      <p className="total-price base-font-color">&#8377;<strong>{` ${ unitPrice * quantity }`}</strong></p>
    </div>
  )
}

export default CartItem
