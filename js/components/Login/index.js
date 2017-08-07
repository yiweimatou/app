import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Button,
  Text,
  Header,
  Body,
  Input
} from "native-base";
import { Alert } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as WeChat from "react-native-wechat";
import { loginWithPwd, loginWithCode } from "../../actions/auth";

// const WeChat = require('react-native-wechat');
const styles = {
  login: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  }
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      pwd: ""
    };
  }

  componentDidMount() {
    WeChat.registerApp("wx9f3bf590b9f4b443");
  }

  loginHandler = () => {
    const { mobile, pwd } = this.state;

    if (mobile.length !== 11) {
      return Alert.alert("请输入正确的手机号码！");
    } else if (pwd.length === 0) {
      return Alert.alert("请输入密码");
    }

    this.props.login(mobile, pwd);
  };

  wxLogin = async () => {
    WeChat.sendAuthRequest("snsapi_userinfo", "wx_login")
      .then(data => {
        if (data.errCode === 0) {
          this.props.loginWithCode(data.code);
        } else {
          Alert.alert("您已经取消微信授权");
        }
      })
      .catch(() => {
        Alert.alert("登陆失败！");
      });
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Text>登陆</Text>
          </Body>
        </Header>
        <Content>
          <Form>
            <Item last>
              <Input
                clearButtonMode="while-editing"
                value={this.state.mobile}
                onChangeText={v => this.setState({ mobile: v })}
                keyboardType="numeric"
                maxLength={11}
                placeholder="手机号码"
              />
            </Item>
            <Item last>
              <Input
                clearButtonMode="while-editing"
                value={this.state.pwd}
                onChangeText={v => this.setState({ pwd: v })}
                secureTextEntry={true}
                placeholder="密码"
              />
            </Item>
          </Form>
          <Button block style={styles.login} onPress={this.loginHandler}>
            <Text>登陆</Text>
          </Button>
          <Button block success style={styles.login} onPress={this.wxLogin}>
            <Text>微信登陆</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  loginWithCode: PropTypes.func.isRequired
};

export default connect(null, dispatch => ({
  login: (mobile, pwd) =>
    dispatch(
      loginWithPwd({
        mobile,
        pwd
      })
    ),
  loginWithCode: code => dispatch(loginWithCode(code))
}))(Login);
