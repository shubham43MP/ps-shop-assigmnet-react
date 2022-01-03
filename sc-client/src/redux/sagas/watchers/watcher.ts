import { takeEvery } from 'redux-saga/effects'
import { GET_PRODUCTS } from '../../types/action.verbs'
import { getProductsWorker } from '../workers/workers'

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS, getProductsWorker)
}