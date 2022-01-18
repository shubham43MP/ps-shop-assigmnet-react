import { put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_BANNER_SUCCESS,
  GET_BANNER_FAILURE
} from 'redux/types/action.verbs'
import {
  SHOPPING_BANNERS
} from 'apis/urls'
import { ResponseGenerator } from 'types/axios-response'

export function* getBannerWorker() {
  try {
    const banners: ResponseGenerator = yield axios({
      url: SHOPPING_BANNERS,
      method: 'get'
    })
    yield put({ type: GET_BANNER_SUCCESS, data: banners.data })
  } catch (e) {
    yield put({ type: GET_BANNER_FAILURE })
  }
}