import { AnyAction } from 'redux'
import { GET_PRODUCTS_SUCCESS } from '../types/action.verbs'

const initialState = {
  products: []
}

export const productReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case GET_PRODUCTS_SUCCESS : 
      return {
        ...state,
        products: action.data,
      }
    default: return state
  }
}
