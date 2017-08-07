import callApi from "./api";
import date from "lodash/date";
import fetchMock from "fetch-mock";

describe("callApi function", () => {
  it("should get correct user", async () => {
    const expectResponse = {
      code: 200,
      msg: "",
      get: {
        id: 1,
        name: "123"
      },
      sysdate: date.now()
    };
    fetchMock.getOnce("*", expectResponse);
    await expect(callApi("user", { id: 1 })).resolves.toEqual(expectResponse);
  });

  it("should post something", async () => {
    const expectResponse = {
      code: 200,
      msg: ""
    };
    fetchMock.postOnce("*", expectResponse);
    await expect(callApi("user", undefined, "POST")).resolves.toEqual(expectResponse);
  });

  describe("should reject request", () => {
    it("server timeout", () => {
      expect.assertions(1);
      fetchMock.getOnce("*", {
        throws: "error"
      });
      return expect(callApi("user")).rejects.toMatch("error");
    });

    it("request error", () => {
      const response = {
        code: 500,
        msg: "error"
      };
      expect.assertions(1);
      fetchMock.getOnce("*", response);
      return expect(callApi("user")).rejects.toMatch("error");
    });
  });
});
