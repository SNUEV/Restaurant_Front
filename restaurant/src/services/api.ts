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
export function getAllData() {
  return axios.get(`data`).catch(error => { return error });
}

export function postData(data: any) {
  return axios.post(`data/post/`, data, option).catch(error => { return error });
}