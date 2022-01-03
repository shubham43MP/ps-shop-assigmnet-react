import { combineReducers } from 'redux';
import { productReducer } from './reducers/products.reducer'
import { bannerReducer } from './reducers/banner.reducer'
import { categoryReducer } from './reducers/category.reducer'

export default combineReducers({
  productReducer,
  bannerReducer,
  categoryReducer
})