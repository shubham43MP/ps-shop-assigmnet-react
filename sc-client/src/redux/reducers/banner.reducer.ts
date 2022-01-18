import { AnyAction } from 'redux'
import { GET_BANNER_FAILURE, GET_BANNER_SUCCESS } from 'redux/types/action.verbs'

const initialState = {
  banners: [],
  loading: true
}

export const bannerReducer = (state=initialState, action: AnyAction) =>{

  switch(action.type){

    case GET_BANNER_SUCCESS : 
      return {
        ...state,
        banners: action.data,
        loading: false
      }

    case GET_BANNER_FAILURE : 
      return {
        ...state,
        loading: false
      }
    default: return state
  }
}
