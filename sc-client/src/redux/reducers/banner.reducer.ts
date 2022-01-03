import { AnyAction } from 'redux'
import { GET_BANNER_SUCCESS } from 'redux/types/action.verbs'

const initialState = {
  banners: []
}

export const bannerReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case GET_BANNER_SUCCESS : 
      return {
        ...state,
        banners: action.data,
      }
    default: return state
  }
}
