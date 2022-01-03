import { put } from 'redux-saga/effects'
import {
  GET_PRODUCTS_FALURE,
  GET_PRODUCTS_SUCCESS,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE,
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILURE
} from '../../types/action.verbs'
import axios from 'axios'
import {
  SHOPPING_PRODUCTS,
  SHOPPING_CATEGORIES,
  SHOPPING_BANNERS
} from '../../../apis/urls'
import { ResponseGenerator } from '../../../types/axios-response'

export function* getProductsWorker() {
  try {
    const products: ResponseGenerator = yield axios({
      url: SHOPPING_PRODUCTS,
      method: 'get'
    })
    yield put({ type: GET_PRODUCTS_SUCCESS, data: products.data })
  } catch (e) {
    yield put({ type: GET_PRODUCTS_FALURE })
  }
}

export function* getCategoryWorker() {
  try {
    const category: ResponseGenerator = yield axios({
      url: SHOPPING_CATEGORIES,
      method: 'get'
    })
    yield put({ type: GET_CATEGORY_SUCCESS, data: category.data })
  } catch (e) {
    yield put({ type: GET_CATEGORY_FAILURE })
  }
}

export function* getBannerWorker() {
  try {
    const banners: ResponseGenerator = yield axios({
      url: SHOPPING_BANNERS,
      method: 'get'
    })
    yield put({ type: GET_BANNER_SUCCESS, data: banners.data })
  } catch (e) {
    yield put({ type: GET_BANNER_FAILURE })
  }
}