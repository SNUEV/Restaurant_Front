import { combineReducers } from 'redux';

function testreducer(state="", action:any) {
  switch(action.type) {
    default: 
      return ""
  }
}

export const mapReducers = combineReducers({
  testreducer,
});