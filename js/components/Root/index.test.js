import "react-native";
import React from 'react';
import Root from './index';
import renderer from 'react-test-renderer';

test("<Root />", () => {
  renderer.create(
    <Root />
  ).toJSON();
});