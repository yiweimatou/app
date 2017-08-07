import authSaga from './auth';
import linkSaga from './link';
import { take, fork } from 'redux-saga/effects';
import addressSaga from './address';
// import { Alert } from "react-native";
import Toast from 'react-native-root-toast';

function* watchError() {
  while(true) {
    const { error } = yield take("*");
    if (error) {
      // Alert.alert(error);
      Toast.show(error || '出错了', {
        position: Toast.positions.CENTER,
      });
    }
  }
}

function* rootSaga() {
  yield [
    ...authSaga(),
    ...linkSaga(),
    ...addressSaga(),
    fork(watchError),
  ];
}

export default rootSaga;