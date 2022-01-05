import { UserCredential } from 'firebase/auth'
import {
  GET_PRODUCTS,
  GET_BANNER,
  GET_CATEGORY,
  SET_GLOBAL_PRODUCT,
  GLOBAL_ADD_TO_CART,
  SET_NOTIFICATION,
  UPDATE_CART_ITEM_COUNT,
  REMOVE_CART_ITEM,
  EMPTY_CART,
  ADD_USER,
  REMOVE_USER_ON_SIGNOUT,
  USER_LOGOUT
} from 'redux/types/action.verbs'
import { CartCount, TNotification } from 'redux/types/rootStateType'
import { ProductType } from 'types/products'

export const getProducts = () => ({ type: GET_PRODUCTS })
export const getBanner = () => ({ type: GET_BANNER })
export const getCategory = () => ({ type: GET_CATEGORY })

export const setProduct = (data: { productSelected: string }) => ({ type: SET_GLOBAL_PRODUCT, data })
export const addToCart = (data: { item: ProductType }) => ({ type: GLOBAL_ADD_TO_CART, data })

export const setNotification = (data: { notification: Partial<TNotification> }) => ({ type: SET_NOTIFICATION, data })

export const updateCartItemCount = (data: { item: ProductType & CartCount }) => ({ type: UPDATE_CART_ITEM_COUNT, data })

export const removeCartItem = (data: { itemId: string }) => ({ type: REMOVE_CART_ITEM, data })

export const emptyCart = () => ({ type: EMPTY_CART })

export const addUser = (data:{ user: UserCredential }) => ({ type: ADD_USER, data })

export const removeUserOnSignout = () => ({ type: REMOVE_USER_ON_SIGNOUT })
export const userLogout = () => ({ type: USER_LOGOUT })