import {
  REQUEST,
  SUCCESS,
  FAILURE,
  createRequestType,
} from './index';

describe("actions index", () => {
  it("should equal request", () => {
    expect(REQUEST).toBe("REQUEST");
  });

  it("should equal success", () => {
    expect(SUCCESS).toBe("SUCCESS");
  });

  it("should equal failure", () => {
    expect(FAILURE).toBe("FAILURE");
  });

  it("should return array with login", () => {
    expect(createRequestType("LOGIN")).toEqual({
      REQUEST: "LOGIN_REQUEST",
      SUCCESS: "LOGIN_SUCCESS",
      FAILURE: "LOGIN_FAILURE"
    });
  });

})