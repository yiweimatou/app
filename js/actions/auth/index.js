import { REQUEST, SUCCESS, FAILURE, createRequestType } from "../index";

export const LOGIN_WITH_PWD = createRequestType("LOGIN_WITH_PWD");

export const LOGIN_WITH_CODE = createRequestType("LOGIN_WITH_CODE");

export const LOGOUT = createRequestType("LOGOUT");

export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";

export const UPDATE_USER = createRequestType("UPDATE_USER");

export const updateUser = user => ({
  type: UPDATE_USER[REQUEST],
  payload: user
});

export const updateUserSuccess = user => ({
  type: UPDATE_USER[SUCCESS],
  payload: user
});

export const updateUserFailure = error => ({
  type: UPDATE_USER[FAILURE],
  error
});

export const loginWithCode = code => ({
  type: LOGIN_WITH_CODE[REQUEST],
  payload: {
    code,
    appId: "wx9f3bf590b9f4b443"
  }
});

export const loginWithCodeSuccess = response => ({
  type: LOGIN_WITH_CODE[SUCCESS],
  response
});

export const loginWithCodeFailure = error => ({
  type: LOGIN_WITH_CODE[FAILURE],
  error
});

export const fetchUserSuccess = user => ({
  type: FETCH_USER_SUCCESS,
  payload: user
});

export const loginWithPwd = payload => ({
  type: LOGIN_WITH_PWD[REQUEST],
  payload
});

export const loginWithPwdSuccess = response => ({
  type: LOGIN_WITH_PWD[SUCCESS],
  response
});

export const loginWithPwdFailure = error => ({
  type: LOGIN_WITH_PWD[FAILURE],
  error
});

export const logoutRequest = () => ({
  type: LOGOUT[REQUEST]
});

export const logoutSuccess = () => ({
  type: LOGOUT[SUCCESS]
});

export const logoutFailure = error => ({
  type: LOGOUT[FAILURE],
  error
});
