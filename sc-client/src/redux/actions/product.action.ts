import {  GET_PRODUCTS, SET_GLOBAL_PRODUCT } from 'redux/types/action.verbs'

export const getProducts = () => ({ type: GET_PRODUCTS })
export const setProduct = (data: { productSelected: string }) => ({ type: SET_GLOBAL_PRODUCT, data })
