import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {autoRehydrate} from 'redux-persist';
import {composeWithDevTools} from 'remote-redux-devtools';
import rootReducer from './reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware), autoRehydrate()),
  );

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducers = require('./reducers').default;
      store.replaceReducer(nextReducers);
    });
  }

  store.runSaga = sagaMiddleware.run;
  return store;
}
