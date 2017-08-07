import React from "react";
import { TouchableHighlight, Text } from "react-native";
import PropTypes from "prop-types";

const RightButton = ({ onPress, text }) =>
  <TouchableHighlight style={{ paddingRight: 20 }} onPress={onPress}>
    <Text>
      {text}
    </Text>
  </TouchableHighlight>;

RightButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default RightButton;
