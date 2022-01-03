import { AnyAction } from 'redux'
import { GET_PRODUCTS_SUCCESS } from 'redux/types/action.verbs'
import { ProductReducerType } from 'redux/types/rootStateType'

const initialState: ProductReducerType = {
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
