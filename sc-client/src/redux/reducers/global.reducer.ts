import { AnyAction } from 'redux'
import {
  SET_GLOBAL_PRODUCT,
  GLOBAL_ADD_TO_CART_SUCCESS,
  GLOBAL_ADD_TO_CART,
  GLOBAL_ADD_TO_CART_FAILURE,
  SET_NOTIFICATION,
} from 'redux/types/action.verbs'

const initialState = {
  productSelected: null,
  cart: [],
  enableBackdropAddCart: false,
  notification: {
    open: false,
    severity: 'success',
    alertLabel: ''
  }
}

export const globalReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case SET_GLOBAL_PRODUCT : 
      return {
        ...state,
        productSelected: action.data.productSelected,
      }

    case GLOBAL_ADD_TO_CART:
      return {
        ...state,
        enableBackdropAddCart: true
      }

    case GLOBAL_ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [ ...state.cart, { ...action.data, count: 1 } ],
        enableBackdropAddCart: false
      }

    case GLOBAL_ADD_TO_CART_FAILURE:
      return {
        ...state,
        enableBackdropAddCart: false
      }

    case SET_NOTIFICATION:
      return {
        ...state,
        notification: {
          ...state.notification,
          ...action.data.notification
        }
      }
    
    default: return state
  }
}
