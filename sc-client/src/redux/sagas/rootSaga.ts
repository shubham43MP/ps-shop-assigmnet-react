import { all, fork } from 'redux-saga/effects'
import {
  getProductsWatcher
} from 'redux/sagas/watchers/product.watcher'
import {
  getCategoryWatcher
} from 'redux/sagas/watchers/category.watcher'
import {
  getBannerWatcher
} from 'redux/sagas/watchers/banner.watcher'
import {
  addToCartWatcher
} from 'redux/sagas/watchers/global.watcher'

function* rootSaga() {
  yield all([
    fork(getProductsWatcher),
    fork(getCategoryWatcher),
    fork(getBannerWatcher),
    fork(addToCartWatcher)
  ])
}

export default rootSaga