import { Middleware } from 'redux';
import { AppState } from '../reducers';
import { AppActions } from '../types/actions';
const loadingMiddleware: Middleware<{}, AppState> = store => next => (action :AppActions)=> {
  // const type = action.type;
  // const matches = /(.*)\/(START|SUCCESS|FAIL)/.exec(type);
  return next(action);
}

export default loadingMiddleware;