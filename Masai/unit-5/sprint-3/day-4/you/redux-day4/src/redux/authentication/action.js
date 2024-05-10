import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

export const loginReq = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuc = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const loginFail = () => {
  return { type: LOGIN_FAIL };
};
