import reducer from "./index";
import * as actions from "../../actions/auth";
import date from "lodash/date";

describe("auth reducer", () => {
  const initialState = {
    user: {},
    pending: false,
    key: 0,
    token: null,
    loginTime: null
  };
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  describe("should handle login with code", () => {
    it("should handle request", () => {
      const code = "code1234";
      expect(reducer(initialState, actions.loginWithCode(code))).toEqual({
        user: {},
        pending: true,
        key: 0,
        token: null,
        loginTime: null
      });
    });

    it("should handle success", () => {
      const response = {
        code: 200,
        key: 1,
        token: "123",
        sysdate: date.now(),
        msg: ""
      };
      const state = {
        user: null,
        key: 0,
        token: null,
        pending: true,
        loginTime: null
      };
      expect(reducer(state, actions.loginWithCodeSuccess(response))).toEqual({
        user: {},
        key: 1,
        token: "123",
        loginTime: response.sysdate,
        pending: false
      });
    });

    it("should handle failure", () => {
      const error = "error";
      const state = {
        user: null,
        key: 0,
        token: null,
        pending: true,
        loginTime: null
      };

      expect(reducer(state, actions.loginWithCodeFailure(error))).toEqual({
        user: null,
        pending: false,
        key: 0,
        token: null,
        loginTime: null
      });
    });
  });

  describe("should handle login with pwd", () => {
    it("should handle request", () => {
      const payloady = {
        mobile: "13838383838",
        pwd: "123456"
      };
      expect(reducer(initialState, actions.loginWithPwd(payloady))).toEqual({
        user: {},
        pending: true,
        key: 0,
        token: null,
        loginTime: null
      });
    });

    it("should handle success", () => {
      const response = {
        code: 200,
        msg: "",
        sysdate: date.now(),
        key: 1,
        token: "123"
      };
      const state = {
        user: null,
        key: 0,
        token: null,
        loginTime: null,
        pending: true
      };
      expect(reducer(state, actions.loginWithPwdSuccess(response))).toEqual({
        user: {},
        key: 1,
        token: "123",
        loginTime: response.sysdate,
        pending: false
      });
    });

    it("should handle failure", () => {
      const error = "error";
      const state = {
        ...initialState,
        pending: true
      };
      expect(reducer(state, actions.loginWithPwdFailure(error))).toEqual(
        initialState
      );
    });
  });

  describe("should handle logout", () => {
    const state = {
      user: {},
      key: 1,
      token: "123",
      pending: false,
      loginTime: date.now()
    };
    it("should handle logout request", () => {
      expect(reducer(state, actions.logoutRequest())).toEqual({
        ...state,
        pending: true
      });
    });

    it("should handle logout success", () => {
      expect(
        reducer(
          {
            ...state,
            pending: true
          },
          actions.logoutSuccess()
        )
      ).toEqual(initialState);
    });

    it("should handle logout failure", () => {
      expect(
        reducer(
          {
            ...state,
            pending: true
          },
          actions.logoutFailure("error")
        )
      ).toEqual(state);
    });
  });
});
