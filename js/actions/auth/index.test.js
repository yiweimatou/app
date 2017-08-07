import * as actions from './index';

describe("auth actions", () => {
  it("should equal login with password request", () => {
    expect(actions.LOGIN_WITH_PWD).toEqual({
      "REQUEST": "LOGIN_WITH_PWD_REQUEST",
      "SUCCESS": "LOGIN_WITH_PWD_SUCCESS",
      "FAILURE": "LOGIN_WITH_PWD_FAILURE"
    });
  });

  it("should equal login with code request", () => {
    expect(actions.LOGIN_WITH_CODE).toEqual({
      "REQUEST": "LOGIN_WITH_CODE_REQUEST",
      "SUCCESS": "LOGIN_WITH_CODE_SUCCESS",
      "FAILURE": "LOGIN_WITH_CODE_FAILURE",
    })
  })

  it("should equal logout request", () => {
    expect(actions.LOGOUT).toEqual({
      "REQUEST": "LOGOUT_REQUEST",
      "SUCCESS": "LOGOUT_SUCCESS",
      "FAILURE": "LOGOUT_FAILURE"
    })
  })

  it("should create a action to request login with code", () => {
    expect(actions.loginWithCode("code1234")).toEqual({
      type: "LOGIN_WITH_CODE_REQUEST",
      payload: {
        code: "code1234",
        appId: "wx9f3bf590b9f4b443"
      }
    });
  });

  it("should create a action to request login with code failure", () => {
    const error = "error";
    expect(actions.loginWithCodeFailure(error)).toEqual({
      type: "LOGIN_WITH_CODE_FAILURE",
      error,
    });
  });

  it("should create a action to request login with code success", () => {
    const response = {
      code: 200,
      msg: "",
    }
    expect(actions.loginWithCodeSuccess(response)).toEqual({
      type: "LOGIN_WITH_CODE_SUCCESS",
      response,
    });
  });

  it("should create a action to request login with pwd", () => {
    const payload = {
      mobile: "13838383838",
      pwd: "123456"
    };
    expect(actions.loginWithPwd(payload)).toEqual({
      type: "LOGIN_WITH_PWD_REQUEST",
      payload,
    });
  });

  it("should create a action to request login with pwd failure", () => {
    const error = "error";
    expect(actions.loginWithPwdFailure(error)).toEqual({
      type: "LOGIN_WITH_PWD_FAILURE",
      error,
    });
  });

  it("should create a action to request login with pwd success", () => {
    const response = {
      code: 200,
      msg: "",
    };
    expect(actions.loginWithPwdSuccess(response)).toEqual({
      type: "LOGIN_WITH_PWD_SUCCESS",
      response,
    });
  });

  it("should create a action to request logout", () => {
    expect(actions.logoutRequest()).toEqual({
      type: "LOGOUT_REQUEST"
    });
  });

  it("should create a action to request logout success", () => {
    expect(actions.logoutSuccess()).toEqual({
      type: "LOGOUT_SUCCESS",
    });
  });

  it("should create a action to request logout failure", () => {
    const error = "error";
    expect(actions.logoutFailure(error)).toEqual({
      type: "LOGOUT_FAILURE",
      error,
    });
  });
});