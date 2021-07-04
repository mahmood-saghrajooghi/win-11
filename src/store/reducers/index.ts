import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import loadingMiddleware from '../middlewares/loadingMiddleware';
import authReducer from './authReducer';
import cartReducer from './cartReducer';
import loadingReducer from './loadingReducer';
import personalizeReducer from './personalize';
import dataReducer from './dataReducer';
import layoutReducer from './layoutReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  personalize: personalizeReducer,
  cart: cartReducer,
  loading: loadingReducer,
  layout: layoutReducer,
  data: dataReducer
});

// prevents from redux_devtools_txtension_compose type error
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(loadingMiddleware, thunk)
));

export type AppState = ReturnType<typeof rootReducer>;