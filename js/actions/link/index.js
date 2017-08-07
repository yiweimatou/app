import {
 REQUEST,
 SUCCESS,
 FAILURE,
 createRequestType, 
} from "../index.js";

export const FETCH_MY_FOCUS = createRequestType('FETCH_MY_FOCUS');

export const FETCH_FOCUS_ME = createRequestType('FETCH_FOCUS_ME');

export const fetchMyFocus = () => ({
  type: FETCH_MY_FOCUS[REQUEST],
});

export const fetchMyFocusSuccess = list => ({
  type: FETCH_MY_FOCUS[SUCCESS],
  payload: list,
});

export const fetchMyFocusFailure = error => ({
  type: FETCH_MY_FOCUS[FAILURE],
  error,
});

export const fetchFocusMe = () => ({
  type: FETCH_FOCUS_ME[REQUEST],
});

export const fetchFocusMeSuccess = list => ({
  type: FETCH_FOCUS_ME[SUCCESS],
  payload: list,
});

export const fetchFocusMeFailure = error => ({
  type: FETCH_FOCUS_ME[FAILURE],
  error,
});