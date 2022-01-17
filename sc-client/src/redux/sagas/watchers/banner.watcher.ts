import { takeEvery } from 'redux-saga/effects'
import {  GET_BANNER } from 'redux/types/action.verbs'

import {
  getBannerWorker
} from 'redux/sagas/workers/banner.worker'

export function* getBannerWatcher() {
  yield takeEvery(GET_BANNER, getBannerWorker)
}
