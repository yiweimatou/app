import { fork, select, take, put, call } from "redux-saga/effects";
import * as actions from "../../actions/link/index";
import * as types from '../../actions/index';
import callApi from "../../services/api";

export function* watchFetchMyFocus() {
  while (true) {
    try {
      yield take(actions.FETCH_MY_FOCUS[types.REQUEST]);
      const key = yield select(state => state.auth.key);
      const data = yield call(callApi, "account_focus/list", { account_id: key });
      if (data.code === 200) {
        yield put(actions.fetchMyFocusSuccess(data.list));
      } else {
        yield put(actions.fetchMyFocusFailure(data.msg));
      }
    } catch (error) {
      yield put(actions.fetchMyFocusFailure(error.message || error));
    }
  }
}

export default function linkSaga() {
  return [
    fork(watchFetchMyFocus),
  ]
}
