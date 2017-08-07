import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text } from "react-native";
import { Icon, CheckBox } from "native-base";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    marginBottom: 20
  },
  name: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10
  },
  divider: {
    borderBottomColor: "#e3e3e3",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  address: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  set: {
    flexDirection: "row"
  },
  opre: {
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    alignSelf: "center",
    fontSize: 12
  },
  icon: {
    flexDirection: "row",
    marginLeft: 10
  }
});

const Item = props => {
  return (
    <View style={styles.container}>
      <View style={styles.name}>
        <Text>
          {props.data.cname}
        </Text>
        <Text>
          {props.data.tel}
        </Text>
      </View>
      <View style={styles.address}>
        <Text>
          {props.data.address}
        </Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.opre}>
        <View style={styles.set}>
          <CheckBox checked={props.data.rank === 1} />
          <Text style={{ alignSelf: "center", marginLeft: 15, fontSize: 12 }}>
            默认地址
          </Text>
        </View>
        <View style={styles.set}>
          <View style={styles.icon}>
            <Icon
              name="ios-create-outline"
              style={{ fontSize: 20, marginRight: 5 }}
            />
            <Text style={styles.text}>编辑</Text>
          </View>
          <View style={styles.icon}>
            <Icon
              name="ios-trash-outline"
              style={{ fontSize: 20, marginRight: 5 }}
            />
            <Text style={styles.text}>删除</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cname: PropTypes.string.isRequired,
    tel: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired
  })
};

export default Item;
