import { put } from 'redux-saga/effects'
import axios from 'axios'
import {
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_FAILURE
} from 'redux/types/action.verbs'
import {
  SHOPPING_CATEGORIES
} from 'apis/urls'
import { ResponseGenerator } from 'types/axios-response'

export function* getCategoryWorker() {
  try {
    const category: ResponseGenerator = yield axios({
      url: SHOPPING_CATEGORIES,
      method: 'get'
    })
    yield put({ type: GET_CATEGORY_SUCCESS, data: category.data })
  } catch (e) {
    yield put({ type: GET_CATEGORY_FAILURE })
  }
}