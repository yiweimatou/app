import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { AsyncStorage, View, } from "react-native";
import { Spinner } from "native-base";
import configureStore from "../../configureStore";
import App from "../App";
import rootSaga from "../../sagas";

const store = configureStore(undefined);
store.runSaga(rootSaga);

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false
    };
  }

  componentWillMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage
      },
      () => {
        this.setState({ rehydrated: true });
      }
    );
  }
  render() {
    if (this.state.rehydrated) {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      );
    }
    return ( 
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Spinner color="black" />
      </View>
    )
  }
}

export default Root;
