import { takeEvery } from 'redux-saga/effects'
import {  GET_CATEGORY } from 'redux/types/action.verbs'

import {
  getCategoryWorker
} from 'redux/sagas/workers/category.worker'

export function* getCategoryWatcher() {
  yield takeEvery(GET_CATEGORY, getCategoryWorker)
}
