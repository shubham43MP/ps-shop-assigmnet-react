import { all, fork } from 'redux-saga/effects'
import { getProductsWatcher } from './watchers/watcher'

function* rootSaga() {
  yield all([
    fork(getProductsWatcher)
  ])
}

export default rootSaga