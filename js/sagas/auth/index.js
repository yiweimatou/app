import { select, take, put, call, fork } from "redux-saga/effects";
import * as actions from "../../actions/auth";
import * as types from "../../actions";
import callApi from "../../services/api";

export function* login(payload) {
  try {
    const response = yield callApi("account/login", payload, "POST");
    yield put(actions.loginWithPwdSuccess(response));
    const user = yield callApi("account/get", { id: response.key });
    if (user.get.id) {
      yield put(actions.fetchUserSuccess(user.get));
    }
  } catch (error) {
    yield put(
      actions.loginWithPwdFailure(error.message ? error.message : error)
    );
  }
}

export function* watchLogin() {
  while (true) {
    const { payload } = yield take(actions.LOGIN_WITH_PWD[types.REQUEST]);
    yield call(login, payload);
  }
}

export function* watchLoginWithCode() {
  while (true) {
    const { payload } = yield take(actions.LOGIN_WITH_CODE[types.REQUEST]);
    try {
      const response = yield callApi(
        "/account/weixin/open",
        {
          weixin_open_code: payload.code,
          app_id: payload.appId
        },
        "POST"
      );
      const data = yield callApi(
        "account/login/weixin",
        { unionid: response.unionid },
        "POST"
      );
      yield put(actions.loginWithCodeSuccess(data));
      const user = yield callApi("account/get", { id: data.key });
      if (user.get.id) {
        yield put(actions.fetchUserSuccess(user.get));
      }
    } catch (error) {
      yield put(
        actions.loginWithCodeFailure(error.message ? error.message : error)
      );
    }
  }
}

export function* watchUpdateUser() {
  while (true) {
    const { payload } = yield take(actions.UPDATE_USER[types.REQUEST]);
    try {
      const auth = yield select(state => state.auth);
      const response = yield callApi(
        "account/put",
        {
          key: auth.key,
          token: auth.token,
          ...payload
        },
        "POST"
      );
      if (response.code === 200) {
        yield put(actions.updateUserSuccess(payload));
      } else {
        yield put(actions.updateUserFailure(response.msg));
      }
    } catch (error) {
      yield put(actions.updateUserFailure(error.message || error));
    }
  }
}

export default function authSaga() {
  return [fork(watchLogin), fork(watchLoginWithCode), fork(watchUpdateUser)];
}
