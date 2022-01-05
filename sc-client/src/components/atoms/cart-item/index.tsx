import React from 'react'
import './style.scss'

type TCartItem = {
  heading?: string;
  imageURL?: string;
  quantity?: number;
  unitPrice?: number;
  handleIncrementDecrement: (threshold: number, itemId: string) =>  void;
  itemId: string;
}

function CartItem({
  heading= 'Apple - Washington, Regular 4pcs',
  imageURL = '/static/images/products/fruit-n-veg/apple.jpg',
  quantity = 2,
  unitPrice = 187,
  handleIncrementDecrement,
  itemId,
}: TCartItem) {
  return (
    <div className='cart-item-container'>
      <img src={ imageURL } alt="Product" className='ci-img' />
      <div className="cart-item-detail">
        <h4 className='base-font-color heading-product'>{ heading }</h4>
        <div className="item-quantity-picker">
          <button className="item-btn" onClick={ () => handleIncrementDecrement(-1, itemId) }>-</button>
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
