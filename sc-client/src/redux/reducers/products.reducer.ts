import { AnyAction } from 'redux'
import { GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FALURE } from 'redux/types/action.verbs'
import { ProductReducerType } from 'redux/types/rootStateType'

const initialState: ProductReducerType = {
  loading: true,
  products: [],
}

export const productReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case GET_PRODUCTS_SUCCESS : 
      return {
        ...state,
        products: action.data,
        loading: false
      }

    case GET_PRODUCTS_FALURE: 
      return {
        ...state,
        loading: false
      }
    default: return state 
  }
}
