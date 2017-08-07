import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, } from "react-native";
import { connect } from "react-redux";
import { Container, Button, Footer, FooterTab } from "native-base";
import Item from "./item";
import { fetchAddressRequest } from "../../../actions/address/index";

class ShoppingAddress extends Component {
  static navigationOptions = {
    title: "管理收货地址",
    headerBackTitle: null,
  };
  componentWillMount() {
    this.props.fetchAddress();
  }
  render() {
    const data = this.props.address.data;
    return (
      <Container>
        <ScrollView>
          {data.map(v => <Item key={v.id} data={v} />)}
        </ScrollView>
        <Footer>
          <FooterTab>
            <Button full primary onPress={() => this.props.navigation.navigate('NewShoppingAddress')}>
              <Text style={{ color: "white" }}>添加新地址</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

ShoppingAddress.propTypes = {
  fetchAddress: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
  address: PropTypes.shape({
    pending: PropTypes.bool.isRequired,
    data: PropTypes.array
  })
};

export default connect(
  state => ({
    address: state.address
  }),
  dispatch => ({
    fetchAddress: () => dispatch(fetchAddressRequest())
  })
)(ShoppingAddress);
