import { Restaurant } from '../models/models';

export const GET_RESTAURANTS = "REQUEST_RESTAURANTS";
export const GET_RESTAURANTS_SUCCESS = "GET_RESTAURANTS_SUCCESS";
export const GET_RESTAURANTS_FAILURE = "GET_RESTAURANTS_FAILURE";


// categories
export function getRestaurants() {
  return {
    type: GET_RESTAURANTS,
  };
}

export function getRestaurantsSuccess(restaurants: Restaurant[]) {
  return {
    type: GET_RESTAURANTS_SUCCESS,
    restaurants: restaurants,
  };
}

export function getRestaurantsFailure(error: string) {
  return {
    type: GET_RESTAURANTS_FAILURE, 
    error
  };
}
