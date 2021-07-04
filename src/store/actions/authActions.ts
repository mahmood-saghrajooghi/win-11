import * as actionTypes from '../types/actions';
import { AppActions } from '../types/actions'
import type { Dispatch } from 'redux';
import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';


export const authRequest = (): AppActions => {
    return {
        type: actionTypes.AUTH_REQUEST
    }
}


export const authSuccess = (token: string, userId: string): AppActions => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: userId
    }
}


export const authFailure = (error: string): AppActions => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: error
    }
}

export const logout = (): AppActions => {
    localStorage.removeItem('token')
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime: number) => {
    return (dispatch: Dispatch<AppActions>) => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}

export const auth = (username: string, password: string, isSignUp: boolean) => {
    //   return dispatch => {
    //       // ....
    //       dispatch(authRequest());
    //       const authData = {
    //           email: email,
    //           password: password,
    //           returnSecureToken: true
    //       }
    //       let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBJMNCZgDCNgPUQnvuIwGPqHNKyUQX_x0A';
    //       if(!isSignUp) {
    //           url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBJMNCZgDCNgPUQnvuIwGPqHNKyUQX_x0A'
    //       }
    //       axios.post(url, authData)
    //           .then(res => {
    //               const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
    //               localStorage.setItem('token' , res.data.idToken)
    //               localStorage.setItem('expirationDate' , expirationDate)
    //               localStorage.setItem('userId' , res.data.localId)
    //               dispatch(authSuccess(res.data.idToken , res.data.localId));
    //               dispatch(checkAuthTimeout(res.data.expiresIn));
    //           })
    //           .catch(err => {
    //               dispatch(authFail(err.response.data.error));
    //           })
    //   }
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(authSuccess('token', 'userID'))
    }
}

export const setAuthRedirectPath = (path: string | undefined): AppActions => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}

export const authCheckState = () => {
    return (dispatch: Dispatch<AppActions>) => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout())
        } else {
            const expirationTime = new Date(JSON.stringify(localStorage.getItem('expirationDate')));
            if (expirationTime.getTime() >= new Date().getTime()) {
                const userId = JSON.stringify(localStorage.getItem('userId'));
                dispatch(authSuccess(token, userId))
                // dispatch(checkAuthTimeout(Number(expirationTime.getTime() - new Date().getTime()) / 1000))
            } else {
                dispatch(logout());
            }
        }
    }
}

export const authEditAccount = (accountDetails: AccountInfo) => {
    return (dispatch: Dispatch) => {
        axios.post('EDIT_ACCOUNT_ENDPOINT')
            .then(res => {
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const siteInit = () => {
    return (dispatch: Dispatch<AppActions>) => {
        axios.get('/init')
            .then(res => {
                // console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const checkBrowserToken = () => {
    return (dispatch: ThunkDispatch<{}, {},  AppActions>) => {
        console.log('chekcing browsser token');
        const browserToken = localStorage.getItem('browser-token');
        if (!browserToken) {
            dispatch(siteInit());
        } else {
            axios.defaults.headers.common = {
                "browser-token": browserToken,
            };
        }
    }
}