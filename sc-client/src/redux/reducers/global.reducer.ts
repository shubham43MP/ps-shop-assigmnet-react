import { hasAccessTokenSessionStorage } from 'config/utitlities'
import { AnyAction } from 'redux'
import {
  SET_GLOBAL_PRODUCT,
  GLOBAL_ADD_TO_CART_SUCCESS,
  GLOBAL_ADD_TO_CART,
  GLOBAL_ADD_TO_CART_FAILURE,
  SET_NOTIFICATION,
  UPDATE_CART_ITEM_COUNT,
  REMOVE_CART_ITEM,
  EMPTY_CART,
  ADD_USER,
  REMOVE_USER_ON_SIGNOUT,
  USER_LOGOUT
} from 'redux/types/action.verbs'
import { GlobalReducerType } from 'redux/types/rootStateType'

const initialState: GlobalReducerType = {
  productSelected: undefined,
  cart: [],
  enableBackdropAddCart: false,
  notification: {
    open: false,
    severity: 'success',
    alertLabel: ''
  },
  user: null,
  isLoggedIn: hasAccessTokenSessionStorage()
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

    case UPDATE_CART_ITEM_COUNT: {
      const updatedCart = state.cart.map(it => {
        if(it.id === action.data.item.id) {
          return {
            ...it,
            count: action.data.item.count
          }
        }
        return it
        
      })
      return {
        ...state,
        cart: updatedCart

      }
    }

    case REMOVE_CART_ITEM: {
      const updatedCart = state.cart.filter (ct => ct.id !== action.data.itemId)
      return {
        ...state,
        cart: updatedCart
      }
    }

    case EMPTY_CART: {
      return {
        ...state,
        cart: []
      }
    }

    case ADD_USER : {
      return {
        ...state,
        user: action.data.user,
        isLoggedIn: true
      }
    }

    case REMOVE_USER_ON_SIGNOUT :{
      return {
        ...state,
        user: null,
        isLoggedIn: false
      }
    }

    case USER_LOGOUT :{
      return {
        ...state,
        user: null,
        isLoggedIn: false
      }
    }
    
    default: return state
  }
}
