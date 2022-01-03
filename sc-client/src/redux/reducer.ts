import { combineReducers } from 'redux';
import { productReducer } from 'redux/reducers/products.reducer'
import { bannerReducer } from 'redux/reducers/banner.reducer'
import { categoryReducer } from 'redux/reducers/category.reducer'
import { globalReducer } from './reducers/global.reducer';

export default combineReducers({
  productReducer,
  bannerReducer,
  categoryReducer,
  globalReducer  
})