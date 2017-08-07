import { combineReducers } from 'redux';
import auth from './auth';
import link from './link';
// import nav from './nav';

const appReducer = combineReducers({
  auth,
  link,
  address: require('./address/index').default,
  // nav,
});

const rootReducer = (state, action) => {
  if (action.type === "USER_LOGOUT") {
    state = undefined;
  }
  return appReducer(state, action);
}

export default rootReducer;
