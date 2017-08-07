import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
  Left,
  Separator,
  Right,
  Input,
  Button,
  Header,
  Item,
  Icon,
  Container,
  Text,
  List,
  ListItem
} from "native-base";
import { ScrollView, RefreshControl } from "react-native";
import { connect } from 'react-redux';
import { fetchMyFocus } from '../../actions/link';
import { getRefreshing } from '../../selectors/link';

class Link extends Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    tabBarLabel: "医互联",
    title: "医互联",
    tabBarIcon: ({ tintColor, focused }) =>
      <Icon name="link" active={focused} style={{ color: tintColor }} />
  };

  _onRefresh =  
    this.props.fetchMyFocus
  
  render() {
    const { refreshing } = this.props;
    return (
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="搜索" />
          </Item>
          <Button transparent>
            <Text>搜索</Text>
          </Button>
        </Header>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this._onRefresh}
            />
          }>
          <List>
            <ListItem>
              <Left>
                <Icon name="flask" />
                <Text>课程</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="folder-open" />
                <Text>档案</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-people-outline" />
                <Text>机构</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Icon name="ios-build-outline" />
                <Text>硬件</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Left>
                <Icon name="ios-shirt-outline" />
                <Text>商品</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <Separator />
          <List>
            <ListItem itemDivider>
              <Text>主讲</Text>
            </ListItem>
          </List>
        </ScrollView>
      </Container>
    );
  }
}

Link.propTypes = {
  refreshing: PropTypes.bool.isRequired,
  fetchMyFocus: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    refreshing: getRefreshing(state),
  }),
  dispatch => ({
    fetchMyFocus: () => dispatch(fetchMyFocus()),
  })
)(Link);
