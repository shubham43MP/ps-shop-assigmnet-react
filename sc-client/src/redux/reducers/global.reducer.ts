import { AnyAction } from 'redux'
import { SET_GLOBAL_PRODUCT } from 'redux/types/action.verbs'

const initialState = {
  productSelected: null
}

export const globalReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case SET_GLOBAL_PRODUCT : 
      return {
        ...state,
        productSelected: action.data.productSelected,
      }
    default: return state
  }
}
