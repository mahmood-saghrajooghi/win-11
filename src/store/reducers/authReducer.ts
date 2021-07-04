import * as actionTypes from '../types/actions';
import { Auth } from '../types/auth';
import { updateObject } from '../utility';

const initialState: Auth = {
  token: 'null',
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: null,
  isAuthenticated: false
}

const authRequest= (state: Auth, action: actionTypes.AuthRequest) => {
  return updateObject(state, { error: null, loading: true })
}

const authSuccess = (state: Auth, action: actionTypes.AuthSuccess) => {
  return updateObject(state, {
    token: action.token,
    userId: action.userId,
    isAuthenticated: true,
    error: null,
    loading: false,
  })
}

const authFail = (state: Auth, action: actionTypes.AuthFailure) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  })
}

const authLogout = (state: Auth, action: actionTypes.AuthLogout) => {
  return updateObject(state, {
    token: null,
    userId: null
  })
}

const setAuthRedirectPath = (state: Auth, action: actionTypes.SetAuthRedirectPath) => {
  return updateObject(state, { authRedirectPath: action.path })
}


const reducer = (
  state: Auth = initialState,
  action: actionTypes.AuthActionTypes
): Auth => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST: return authRequest(state, action);
    case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
    case actionTypes.AUTH_FAILURE: return authFail(state, action);
    case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action)
    default:
      return state;
  }
}

export default reducer;