/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, combineReducers } from 'redux';
import { productReducer } from 'redux/reducers/products.reducer'
import { bannerReducer } from 'redux/reducers/banner.reducer'
import { categoryReducer } from 'redux/reducers/category.reducer'
import { globalReducer } from './reducers/global.reducer';
import { USER_LOGOUT } from './types/action.verbs';

const appReducer = combineReducers({
  productReducer,
  bannerReducer,
  categoryReducer,
  globalReducer  
})

const rootReducer = (state: any, action: AnyAction) => {
  if (action.type === USER_LOGOUT) {
    return appReducer(undefined, action)
  }

  return appReducer(state, action)
}

export default rootReducer