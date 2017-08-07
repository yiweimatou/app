import { select, take, put, call, fork } from "redux-saga/effects";
import callApi from "../../services/api";
import * as actions from "../../actions/address/index";

export function* watchFetchAddress() {
  while (true) {
    try {
      yield take(actions.fetchAddressRequest().type);
      const key = yield select(state => state.auth.key);
      const response = yield call(callApi, "account_address/list", {
        account_id: key,
        state: 1
      });
      if (response.code === 200) {
        yield put(actions.fetchAddressSuccess(response.list));
      } else {
        yield put(actions.fetchAddressFailure(response.msg));
      }
    } catch (error) {
      yield put(actions.fetchAddressFailure(error.message || error));
    }
  }
}

export default function addressSaga() {
  return [
    fork(watchFetchAddress),
  ]
}