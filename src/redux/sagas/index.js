import { call, put, takeEvery } from "redux-saga/effects";

import {
  getProductList
} from "../../lib/api";
import apiConstants from "../constants/apiConstants";

function* _getProductList(action) {
  try {
    const response = yield call(getProductList);
    yield put({
      type: apiConstants.GET_PRODUCT_LISTS_SUCCESS,
      response: response.data
    });

  } catch (e) {
    yield put({
      type: apiConstants.GET_PRODUCT_LISTS_FAIL,
      response: e.response
    });
  }
}

function* _updateProductList(action) {
  try {
    const response = action.payload;
    yield put({
      type: apiConstants.UPDATE_PRODUCT_LISTS_SUCCESS,
      response: response
    });

  } catch (e) {
    yield put({
      type: apiConstants.UPDATE_PRODUCT_LISTS_FAIL,
      response: e.response
    });
  }
}

export function* Saga() {
  yield takeEvery(apiConstants.GET_PRODUCT_LISTS, _getProductList);
  yield takeEvery(apiConstants.UPDATE_PRODUCT_LISTS, _updateProductList);
}
