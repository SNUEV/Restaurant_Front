import { put, call, take, fork, takeLatest } from 'redux-saga/effects';

import * as api from './api';
import moment from 'moment';

export function* getRestaurantsRequest() {
  while(true) {
   
  }
}

export function* getCategoriesRequest() {
  while(true) {
    
  }
}

export default function* rootSaga() {
  yield fork(getRestaurantsRequest)
  yield fork(getCategoriesRequest)
}