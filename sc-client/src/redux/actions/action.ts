import {
  GET_PRODUCTS,
  GET_BANNER,
  GET_CATEGORY,
  SET_GLOBAL_PRODUCT
} from 'redux/types/action.verbs'

export const getProducts = () => ({ type: GET_PRODUCTS })
export const getBanner = () => ({ type: GET_BANNER })
export const getCategory = () => ({ type: GET_CATEGORY })

export const setProduct = (data: { productSelected: string }) => ({ type: SET_GLOBAL_PRODUCT, data })