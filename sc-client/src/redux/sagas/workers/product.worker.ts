import { put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_PRODUCTS_FALURE,
  GET_PRODUCTS_SUCCESS,
} from 'redux/types/action.verbs'
import {
  SHOPPING_PRODUCTS
} from 'apis/urls'
import { ResponseGenerator } from 'types/axios-response'

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