import {
  GET_PRODUCTS,
  GET_BANNER,
  GET_CATEGORY,
  SET_GLOBAL_PRODUCT,
  GLOBAL_ADD_TO_CART
} from 'redux/types/action.verbs'
import { ProductType } from 'types/products'

export const getProducts = () => ({ type: GET_PRODUCTS })
export const getBanner = () => ({ type: GET_BANNER })
export const getCategory = () => ({ type: GET_CATEGORY })

export const setProduct = (data: { productSelected: string }) => ({ type: SET_GLOBAL_PRODUCT, data })
export const addToCart = (data: { item: ProductType }) => ({ type: GLOBAL_ADD_TO_CART, data })