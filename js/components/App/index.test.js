import React from "react";
import { App } from "./index";
import render from "react-test-renderer";

describe("<App />", () => {
  it("should render logined", () => {
    const auth = {
      user: {
        id: 1,
        name: "name"
      },
      key: 1,
      token: "123"
    };
    render.create(<App auth={auth} />);
  });

  it("should redner not login", () => {
    const auth = {
      user: null,
      key: 0,
      token: null
    };
    render.create(<App auth={auth} />);
  });
});
