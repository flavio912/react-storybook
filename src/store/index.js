import { applyMiddleware, createStore as baseCreateStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const middlewares = [thunk];
const enhancers = [applyMiddleware(...middlewares)];
const storeEnhancer = composeEnhancers(...enhancers);
const rootReducer = combineReducers(reducers);

export function createStore(preloadedState) {
  return baseCreateStore(rootReducer, preloadedState, storeEnhancer);
}
