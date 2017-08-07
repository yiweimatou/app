import { login, watchLogin } from "./index";
import date from "lodash/date";
import fetchMock from "fetch-mock";
import { take, put, call } from "redux-saga/effects";
import configureStore from "redux-mock-store";
import * as actions from "../../actions/auth";
import * as types from "../../actions";

describe("auth saga", () => {
  const mockStore = configureStore();
  const store = mockStore();
  beforeEach(() => {
    store.clearActions();
  });
  describe("should watch login", () => {
    store.dispatch(
      actions.loginWithPwd({
        mobile: "123",
        pwd: "123"
      })
    );

    const mockActions = store.getActions();
    const generator = watchLogin();

    test("should take action login with pwd", () => {
      expect(generator.next().value).toEqual(
        take(actions.LOGIN_WITH_PWD[types.REQUEST])
      );
    });

    test("should call login", () => {
      expect(generator.next({ payload: mockActions[0].payload }).value).toEqual(
        call(login, mockActions[0].payload)
      );
    });
  });

  describe("login saga", () => {
    const expectResponse = {
      code: 200,
      msg: "",
      sysdate: date.now(),
      key: 1,
      token: "123"
    };
    const generator = login({
      mobile: "123",
      pwd: "123"
    });

    test("should call api", () => {
      expect.assertions(1);
      fetchMock.postOnce("*", expectResponse);
      return expect(generator.next().value).resolves.toEqual(expectResponse);
    });

    test("should put success action", () => {
      expect(generator.next(expectResponse).value).toEqual(
        put(actions.loginWithPwdSuccess(expectResponse))
      )
    });

    test("should put error action", () => {
      const errorGenerator = login({
        mobile: "123",
        pwd: "123"
      })
      fetchMock.postOnce("*", {
        throws: "error"
      });

      return expect(errorGenerator.next().value).rejects.toBe("error");
    });
  });
});
