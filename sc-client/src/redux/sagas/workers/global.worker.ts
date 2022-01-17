import { put } from 'redux-saga/effects'
import axios from 'axios'
import { AnyAction } from 'redux'
import {
  GLOBAL_ADD_TO_CART_SUCCESS,
  GLOBAL_ADD_TO_CART_FAILURE,
  SET_NOTIFICATION
} from 'redux/types/action.verbs'
import {
  SHOPPING_ADD_TO_CART_POST
} from 'apis/urls'

export function* addToCartWorker(action: AnyAction) {
  try {
    yield axios({
      url: SHOPPING_ADD_TO_CART_POST,
      method: 'post',
      data: action.data,
    })
    yield put({ type: GLOBAL_ADD_TO_CART_SUCCESS, data: action.data.item })
    yield put({ type: SET_NOTIFICATION, data: {
      notification: {
        open: true,
        severity: 'success',
        alertLabel: 'Added to cart successfully'
      }
    } })
  } catch (e) {
    yield put({ type: GLOBAL_ADD_TO_CART_FAILURE })
    yield put({ type: SET_NOTIFICATION, data: {
      notification: {
        open: true,
        severity: 'error',
        alertLabel: 'Error adding to cart'
      }
    } })
  }
}