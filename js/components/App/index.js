import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../Login';
import AppNavigator from "../../navigators/AppNavigator";

export const App = props => {
  if (props.auth.key) {
    return <AppNavigator /> 
  }

  return <Login />
}

App.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.any,
    key: PropTypes.number,
    token: PropTypes.string,
  })
}

export default connect(
  state => ({
    auth: state.auth,
  })
)(App);