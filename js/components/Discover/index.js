import React, { Component } from "react";
import {
  Icon,
  Container,
  Content,
  Body,
  Text,
} from "native-base";

class Discover extends Component {
  static navigationOptions = {
    tabBarLabel: "发现",
    title: "发现",
    tabBarIcon: ({ tintColor, focused }) =>
      <Icon name="eye" active={focused} style={{ color: tintColor }} />
  };
  render() {
    return (
      <Container>
        <Body>
          <Content>
            <Text>Discover</Text>
          </Content>
        </Body>
      </Container>
    );
  }
}

export default Discover;
