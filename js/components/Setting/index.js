import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImagePicker from "react-native-image-picker";
import { NativeModules, View, Alert, Modal } from "react-native";
import {
  Spinner,
  Separator,
  Content,
  Left,
  Right,
  Text,
  Container,
  List,
  ListItem,
  Thumbnail,
  Body,
  Icon
} from "native-base";
import { updateUser } from "../../actions/auth";

const RNUploader = NativeModules.RNUploader;
class Setting extends Component {
  
  static navigationOptions = {
    title: "个人信息"
  };

  imagePick = () => {
    ImagePicker.launchImageLibrary({}, response => {
      if (response.didCancel) {
        Alert.alert("您已经取消");
      } else if (response.error) {
        Alert.alert(response.error || "出错了");
      } else {
        RNUploader.upload(
          {
            url: "http://image.yiweimatou.com:999/logo",
            files: [
              {
                name: "upload_file",
                filepath: response.uri,
                filetype: response.type,
                filename: response.fileName
              }
            ]
          },
          (error, res) => {
            if (error) {
              return;
            }
            const data = JSON.parse(res.data);
            if (data.code === 200) {
              this.props.update({ logo: data.logo });
            }
          }
        );
      }
    });
  };
  render() {
    const { id, mobile, cname, logo } = this.props.user;
    const { pending } = this.props;
    return (
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Modal
          animationType={"fade"}
          transparent={false}
          visible={pending}>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Spinner />
          </View>
        </Modal>
        <Content>
          <Separator style={{ height: 20 }} />
          <List>
            <ListItem onPress={this.imagePick}>
              <Left>
                <Text>头像</Text>
              </Left>
              <Body />
              <Right
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center"
                }}>
                <Thumbnail source={{ uri: logo || "https://image.yiweimatou.com/ywmt/face/default.png" }} />
                <Icon style={{ marginLeft: 10 }} name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>名字</Text>
              </Left>
              <Right style={{ flex: 1 }}>
                <Text>
                  {cname}
                </Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>码头号</Text>
              </Left>
              <Right>
                <Text>
                  {id}
                </Text>
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>手机号码</Text>
              </Left>
              <Right style={{ flex: 1 }}>
                <Text>
                  {mobile}
                </Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

Setting.propTypes = {
  user: PropTypes.any,
  pending: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired
};

export default connect(
  state => ({
    user: state.auth.user,
    pending: state.auth.pending,
  }),
  dispatch => ({
    update: user => dispatch(updateUser(user))
  })
)(Setting);
