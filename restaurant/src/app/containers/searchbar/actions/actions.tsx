import { Category, Pricerange } from '../models/models';

export const GET_CATEGORIES = "REQUEST_CATEGORIES"
export const GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS"
export const GET_CATEGORIES_FAILURE = "GET_CATEGORIES_FAILURE"

export const GET_PRICERANGE = "GET_PRICERANGE"
export const GET_PRICERANGE_SUCCESS = "GET_PRICERANGE_SUCCESS"
export const GET_PRICERANGE_FAILTURE = "GET_PRICERANGE_FAILURE"

// categories
export function getCategories() {
  return {
    type: GET_CATEGORIES,
  };
}

export function getCategoriesSuccess(categories: Category[]) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories: categories,
  };
}

export function getCategoriesFailure(error: string) {
  return {
    type: GET_CATEGORIES_FAILURE, 
    error
  };
}

// pricerange

export function getPriceRange() {
  return {
    type: GET_PRICERANGE,
  };
}

export function getPriceRangeSuccess(price_range: Pricerange[]) {
  return {
    type: GET_PRICERANGE_SUCCESS,
    pricerange: price_range
  };
}

export function getPriceRangeFailure(error: string) {
  return{
    type: GET_PRICERANGE_FAILTURE,
    error,
  }
}