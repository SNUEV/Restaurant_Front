import { put, call, take, fork } from 'redux-saga/effects';
import moment from 'moment';

import * as actions from '../actions/actions';
import * as api from '../../../../services/api';

export function* getRestaurantsRequest() {
  while(true) {
    const action = yield take(actions.GET_RESTAURANTS)
    const { data, error } = yield call(api.getAllRestaurants)
    if(data && !error) {

    } else {
      const errmsg = '카테고리 정보를 받아오지 못했습니다'
      yield put(actions.getRestaurantsFailure(errmsg));
    }
  }
}


export default [
  getRestaurantsRequest,
];