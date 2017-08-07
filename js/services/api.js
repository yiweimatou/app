import Promise from "bluebird";

export const API_ROOT = "https://api.yiweimatou.com/";

function object2String(params) {
  if (typeof params !== "object") {
    return null;
  }
  return Object.keys(params).reduce((prev, value) => {
    if (prev === "") {
      return `${value}=${params[value]}`;
    }
    return `${prev}&${value}=${params[value]}`;
  }, "");
}

function callApi(endpoint, params, method = "GET") {
  let fullUrl =
    endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint;
  if (method === "GET") {
    fullUrl = fullUrl + "?" + object2String(params);
  }
  return fetch(fullUrl, {
    method,
    headers: {
      "Content-Type":
        method.toUpperCase() === "GET"
          ? "application/json"
          : "application/x-www-form-urlencoded"
    },
    body: method === "GET" ? null : object2String(params)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response.statusText());
    })
    .then(data => {
      if (data.code === 200) {
        return data;
      } else {
        return Promise.reject(data.msg || "服务器开小差了，请稍后再试");
      }
    });
}

export default callApi;
