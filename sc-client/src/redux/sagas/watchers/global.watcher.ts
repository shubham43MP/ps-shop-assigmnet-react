import { takeEvery } from 'redux-saga/effects'
import { GLOBAL_ADD_TO_CART } from 'redux/types/action.verbs'

import {
  addToCartWorker
} from 'redux/sagas/workers/global.worker'

export function* addToCartWatcher() {
  yield takeEvery(GLOBAL_ADD_TO_CART, addToCartWorker)
}
