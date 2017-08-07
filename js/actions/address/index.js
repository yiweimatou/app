import * as types from '../index';

export const FETCH_ADDRESS = types.createRequestType('FETCH_ADDRSS');
export const NEW_ADDRESS = types.createRequestType('NEW_ADDRESS');

export function fetchAddressRequest() {
  return {
    type: FETCH_ADDRESS[types.REQUEST],
  }
}

export const fetchAddressSuccess = list => ({
  type: FETCH_ADDRESS[types.SUCCESS],
  payload: list,
});

export const fetchAddressFailure = error => ({
  type: FETCH_ADDRESS[types.FAILURE],
  error,
});

export const newAddressSuccess = address => ({
  type: NEW_ADDRESS[types.SUCCESS],
  payload: address,
})