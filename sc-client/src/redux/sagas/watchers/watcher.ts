import { takeEvery } from 'redux-saga/effects'
import { GET_CATEGORY, GET_PRODUCTS, GET_BANNER } from 'redux/types/action.verbs'
import { getProductsWorker, getCategoryWorker, getBannerWorker } from 'redux/sagas/workers/workers'

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS, getProductsWorker)
}

export function* getCategoryWatcher() {
  yield takeEvery(GET_CATEGORY, getCategoryWorker)
}

export function* getBannerWatcher() {
  yield takeEvery(GET_BANNER, getBannerWorker)
}
