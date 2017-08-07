import React from "react";
import PropTypes from "prop-types";
import { TouchableHighlight, View } from "react-native";
import { Spinner } from "native-base";
import styles from "./styles";

const HOCSpinner = props => {
  if (props.visible) {
    return (
      <View style={{flex: 1}}>
        {props.children}
        <TouchableHighlight
          style={[
            styles.overlay,
            {
              backgroundColor: props.overlayColor
            }
          ]}
          activeOpacity={1}>
          <View style={styles.container}>
            <Spinner color="#000000" />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
  return (
    <View>
      {props.children}
    </View>
  );
};

HOCSpinner.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  overlayColor: PropTypes.string
};

export default HOCSpinner;
