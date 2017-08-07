import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TouchableHighlight
} from "react-native";
import { Item, Input, Label } from "native-base";
import { connect } from "react-redux";
import { newAddressSuccess } from "../../../actions/address/index";
import RightButton from "../../RightButton";
import callApi from "../../../services/api";

const styles = StyleSheet.create({
  paddingLeft: {
    paddingLeft: 10
  },
  bgc: {
    backgroundColor: "white"
  }
});

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cname: "",
      tel: "",
      address: "",
      pending: false
    };
  }
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      headerBackTitle: null,
      title: "添加新地址",
      headerRight: <RightButton onPress={() => params.submit()} text="保存" />
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({ submit: this.submit });
  }

  submit = () => {
    const { cname, tel, address } = this.state;
    callApi(
      "account_address/add",
      {
        cname,
        tel,
        address
      },
      "POST"
    )
      .then(data => {
        this.props.newAddress({
          cname,
          tel,
          address,
          id: data.identity
        });
      })
      .catch(error => {});
  };
  render() {
    const { pending, cname, tel, address } = this.state;
    return (
      <View style={styles.bgc}>
        <TouchableHighlight onPress={() => this.setState({ pending: true })}>
          <Text>open</Text>
        </TouchableHighlight>
        <Modal animationType="fade" transparent={true} visible={pending}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}>
            <View
              style={{
                shadowOpacity: 0.1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 4,
                  height: 4
                },
                elevation: 10,
                shadowRadius: 6,
                justifyContent: "center",
                padding: 20,
                alignItems: "center",
                borderRadius: 10,
                opacity: 0.7,
                backgroundColor: "#e3e3e3"
              }}>
              <Text>hello modal</Text>
              <TouchableHighlight
                onPress={() => this.setState({ pending: false })}>
                <Text>close</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <Item>
          <Label style={styles.paddingLeft}>收货人</Label>
          <Input
            onChangeText={text => this.setState({ cname: text })}
            value={cname}
          />
        </Item>
        <Item>
          <Label style={styles.paddingLeft}>联系方式</Label>
          <Input
            value={tel}
            onChangeText={text => this.setState({ tel: text })}
          />
        </Item>
        <Item>
          <Input
            placeholder="详细地址"
            blurOnSubmit={false}
            multline={true}
            numberOfLines={5}
            onChangeText={text => this.setState({ address: text })}
            value={address}
          />
        </Item>
      </View>
    );
  }
}

New.propTypes = {
  navigation: PropTypes.shape({
    setParams: PropTypes.func.isRequired
  }),
  newAddress: PropTypes.func.isRequired
};

export default connect(null, dispatch => ({
  newAddress: adddress => dispatch(newAddressSuccess(adddress))
}))(New);
