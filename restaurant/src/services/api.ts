import axios from 'axios';
import { environment } from '../environments/environment';

axios.defaults.baseURL = environment.apiAddress;

const option = {
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  })
}

// this is the sample api function call
// url & data type should match api requirements
// 나중에 규모가 커지면 컨테이너 별로 분류 필요

// sample (will be deleted)
export function getAllData() {
  return axios.get(`/data`).catch(error => { return error });
}

export function postData(data: any) {
  return axios.post(`/data/post/`, data, option).catch(error => { return error });
}

// restaurants

export function getAllRestaurants() {
  return axios.get(`/restaurants`).catch(error => { return error });
}

// categories

export function getAllCategories() {
  return axios.get('/categories').catch(error => { return error });
}

// price ranges

export function getAllPriceRange() {
  return axios.get('/pricerange').catch(error => { return error });
}