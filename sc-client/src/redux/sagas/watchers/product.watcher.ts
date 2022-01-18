import { takeEvery } from 'redux-saga/effects'
import { GET_PRODUCTS } from 'redux/types/action.verbs'

import {
  getProductsWorker,
} from 'redux/sagas/workers/product.worker'

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS, getProductsWorker)
}
