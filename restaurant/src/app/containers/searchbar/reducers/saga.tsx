import { put, call, take, fork } from 'redux-saga/effects';
import moment from 'moment';

import * as actions from '../actions/actions';
import * as api from '../../../../services/api';

export function* getCategoriesRequest() {
  while(true) {
    const action = yield take(actions.GET_CATEGORIES)
    const { data, error } = yield call(api.getAllCategories)
    if(data && !error) {

    } else {
      const errmsg = '카테고리 정보를 받아오지 못했습니다'
      yield put(actions.getCategoriesFailure(errmsg));
    }
  }
}

export function* getPricerangeRequest() {
  while(true) {
    const action = yield take(actions.GET_PRICERANGE)
    const { data, error } = yield call(api.getAllPriceRange)
    if(data && !error) {

    } else {
      const errmsg = '가격대 정보를 받아오지 못했습니다'
      yield put(actions.getPriceRangeFailure(errmsg));
    }
  }
}

export default [
  getCategoriesRequest,
  getPricerangeRequest,
];