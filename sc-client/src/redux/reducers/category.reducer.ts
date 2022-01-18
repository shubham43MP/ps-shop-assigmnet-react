import { AnyAction } from 'redux'
import { GET_CATEGORY_SUCCESS } from 'redux/types/action.verbs'

const initialState = {
  category: []
}

export const categoryReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case GET_CATEGORY_SUCCESS : 
      return {
        ...state,
        category: action.data,
      }
    default: return state
  }
}
