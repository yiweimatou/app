import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Qrcode from "./qrcode";
import {
  Icon,
  Container,
  Content,
  Text,
  Body,
  List,
  ListItem,
  Thumbnail,
  Right,
  Separator,
  Left
} from "native-base";

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: "我",
    title: "我",
    tabBarIcon: ({ tintColor, focused }) =>
      <Icon name="person" active={focused} style={{ color: tintColor }} />
  };

  render() {
    const { logo, cname, id, amount } = this.props.user;
    const { logout, navigation } = this.props;
    return (
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Content>
          <Separator style={{ height: 10 }} />
          <List>
            <ListItem
              thumbnail
              last
              onPress={() => navigation.navigate("Setting")}>
              <Thumbnail source={{ uri: logo }} square size={80} />
              <Body>
                <Text>
                  {cname}
                </Text>
                <Text note>
                  码头号: {id}
                </Text>
              </Body>
              <Right style={{ flexDirection: "row" }}>
                <Qrcode color="grey" size={25} />
                <Icon style={{ marginLeft: 10 }} name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <Separator height={20} />
          <List>
            <ListItem last>
              <Left>
                <Text>余额</Text>
              </Left>
              <Right>
                <Text>
                  {amount * 0.01}元
                </Text>
              </Right>
            </ListItem>
          </List>
          <Separator height={20} />

          <List>
            <ListItem>
              <Left>
                <Text>助教课程管理</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Left>
                <Text>主讲课程管理</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <Separator height={20} />
          <List>
            <ListItem>
              <Left>
                <Text>关连服务</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>服务签到</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>订单管理</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>商品中心</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigation.navigate("ShoppingAddress")}>
              <Left>
                <Text>收货地址</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>帮助</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Left>
                <Text>更多</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <Separator />
          <List>
            <ListItem
              last
              style={{ justifyContent: "center" }}
              onPress={logout}>
              <Text>退出登陆</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  })
};
export default connect(
  state => ({
    user: state.auth.user
  }),
  dispatch => ({
    logout: () =>
      dispatch({
        type: "USER_LOGOUT"
      })
  })
)(Profile);
