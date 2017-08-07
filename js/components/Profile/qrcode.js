import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

class Qrcode extends React.Component {
  render() {
    return <Icon name="qrcode" {...this.props} />
  }
}

export default Qrcode;