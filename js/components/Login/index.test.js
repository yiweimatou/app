import React from "react";
import { Login } from './index';
import render from "react-test-renderer";

test("should render correctly", () => {
  render.create(<Login />)
})