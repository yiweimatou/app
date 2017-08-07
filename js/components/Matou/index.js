import React, { Component } from "react";
import { Icon, Text } from "native-base";
// import HOCSpinner from "../HOCSpinner";

class Matou extends Component {
  static navigationOptions = {
    tabBarLabel: "医码头",
    title: "医码头",
    tabBarIcon: ({ tintColor, focused }) =>
      <Icon name="apps" active={focused} style={{ color: tintColor }} />
  };

  render() {
    return (
        <Text>Matou</Text>
    );
  }
}

export default Matou;
