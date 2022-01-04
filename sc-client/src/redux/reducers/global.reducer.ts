import { AnyAction } from 'redux'
import {
  SET_GLOBAL_PRODUCT,
  GLOBAL_ADD_TO_CART_SUCCESS
} from 'redux/types/action.verbs'

const initialState = {
  productSelected: null,
  cart: []
}

export const globalReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case SET_GLOBAL_PRODUCT : 
      return {
        ...state,
        productSelected: action.data.productSelected,
      }

    case GLOBAL_ADD_TO_CART_SUCCESS:
      return {
        ...state,
        cart: [ ...state.cart, action.data ]
      }
    default: return state
  }
}
