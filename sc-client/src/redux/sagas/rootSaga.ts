import { all, fork } from 'redux-saga/effects'
import { getProductsWatcher, getCategoryWatcher, getBannerWatcher } from 'redux/sagas/watchers/watcher'

function* rootSaga() {
  yield all([
    fork(getProductsWatcher),
    fork(getCategoryWatcher),
    fork(getBannerWatcher)
  ])
}

export default rootSaga