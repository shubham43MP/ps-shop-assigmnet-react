import React from 'react'
import { useDispatch } from 'react-redux'
import Tooltip from '@mui/material/Tooltip';
import { ProductType } from 'types/products'
import CartItem from 'components/atoms/cart-item'
import { LOWEST_PRICE_PROMOTION } from 'apis/constants'
import { CartCount } from 'redux/types/rootStateType'
import { removeCartItem, updateCartItemCount } from 'redux/actions/action'
import './style.scss'

type TCartProps = {
  cart: (ProductType & CartCount)[];
  handleClose: () => void;
}

const EmptyCart = () => {
  return (
    <div className='empty-cart-container'>
      <h2 className="no-items-cart">No items in your cart</h2>
      <p className="no-items-cart-subheading">Your favourite items are just a click away</p>
    </div>
  )
}

function Cart({ cart = [], handleClose }: TCartProps) {
  const dispatch = useDispatch()
  const isCartEmpty = cart.length === 0
  const handleIncDec = (incDecThreshold: number, productId: string) => {
    let [ filteredItems ] = cart.filter(it => it.id === productId)
    if(incDecThreshold === -1 && filteredItems.count === 0) {
      return
    }
    filteredItems = {
      ...filteredItems,
      count: filteredItems.count + incDecThreshold
    }
    dispatch(updateCartItemCount({ item: filteredItems }))
  }

  const totalPrice = React.useMemo(() => {
    let price = 0;
    cart.forEach(ci => price = price + (ci.count * ci.price))
    return price
  }, [ cart ])

  return (
    <div className="cart-container">
      <div className="mycart-top-header">
        <p className="my-cart-text">
          { 'My Cart' }
          <span className='items-number'>
            {`(${ cart.length } items)`}
          </span>
        </p>
        <Tooltip title="Close">
          <svg xmlns="http://www.w3.org/2000/svg"
            className="close-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={ handleClose }
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd" />
          </svg>
        </Tooltip>
      </div>
      <div className={ `cart-contents ${ isCartEmpty ? 'cart-content-empty' : '' }` }>
        {
          !isCartEmpty ?
            <div className='cart-item-contain'>
              {
                cart.map(item => (
                  <CartItem
                    key={ item.id }
                    handleIncrementDecrement={ handleIncDec }
                    itemId={ item.id }
                    heading= { item.name }
                    imageURL = { item.imageURL }
                    quantity = { item.count }
                    unitPrice = { item.price }
                    handleDeleteCartItem={ (itemId: string) => dispatch(removeCartItem({ itemId })) }               
                  />
                ))
              }
              <section className='sb-promotion'>
                <img src={ LOWEST_PRICE_PROMOTION } className="sb-promotion-img" alt="Lowest price promotion"/>
                <p className="sb-promotion-text">You wont find it cheaper anywhere</p>
              </section>
            </div>
            :
            <EmptyCart />
        }
        <button className={ `btn-shopping ${ !isCartEmpty ? 'btn-non-empty' : '' }` }>
          {
            isCartEmpty ? 'Start Shopping'
              : (
                <>
                  <p>Proceed to checkout</p>
                  <p>&#8377; <strong>{totalPrice}</strong></p>
                </>
              )
          }        
        </button>
      </div>
    </div>
  )
}

export default Cart
