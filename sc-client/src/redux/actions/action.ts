import { GET_PRODUCTS, GET_BANNER, GET_CATEGORY } from 'redux/types/action.verbs'

export const getProducts = () => ({ type: GET_PRODUCTS })
export const getBanner = () => ({ type: GET_BANNER })
export const getCategory = () => ({ type: GET_CATEGORY })