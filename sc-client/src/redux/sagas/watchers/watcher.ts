import { takeEvery } from 'redux-saga/effects'
import {
  GET_CATEGORY,
  GET_PRODUCTS,
  GET_BANNER,
  GLOBAL_ADD_TO_CART
} from 'redux/types/action.verbs'

import {
  getProductsWorker,
} from 'redux/sagas/workers/product.worker'

import {
  getCategoryWorker
} from 'redux/sagas/workers/category.worker'

import {
  getBannerWorker
} from 'redux/sagas/workers/banner.worker'

import {
  addToCartWorker
} from 'redux/sagas/workers/global.worker'

export function* getProductsWatcher() {
  yield takeEvery(GET_PRODUCTS, getProductsWorker)
}

export function* getCategoryWatcher() {
  yield takeEvery(GET_CATEGORY, getCategoryWorker)
}

export function* getBannerWatcher() {
  yield takeEvery(GET_BANNER, getBannerWorker)
}

export function* addToCartWatcher() {
  yield takeEvery(GLOBAL_ADD_TO_CART, addToCartWorker)
}
