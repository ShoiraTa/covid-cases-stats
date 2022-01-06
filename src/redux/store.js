import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countriesReducer from './reducers.js/countries';
import regionsReducer from './reducers.js/regions';

const reducer = combineReducers({
  countries: countriesReducer,
  reg: regionsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
