import { api, BASE_URL } from "./api";
import axios from "axios";

let token = JSON.parse(localStorage.getItem("token"));
// let token = JSON.parse(localStorage.getItem("token"));

const configParams = {
  "Content-Type": "application/json",
};

const userInfoConfigParams = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `Bearer ${token}`,
};

// const jsonConfigParams = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };
// const userInfoConfigParams = {
//   "Content-Type": "application/x-www-form-urlencoded",
//   Authorization: `Bearer ${token}`,
// };

// const jsonConfigParams = {
//   Accept: "application/json",
//   "Content-Type": "application/json",
//   Authorization: `Bearer ${token}`,
// };
export const SIGNUP_CALL = (data) => {
  return axios.post(api.user.signUp, data, { headers: configParams });
};

export const SIGNUP_OTP_CALL = (data) => {
  return axios.post(api.user.signUpOTP, data, { headers: configParams });
};

export const SIGNUP_RESEND_OTP_CALL = (data = " ") => {
  return axios.post(api.user.signUpResendOTP, data, { headers: configParams });
};

export const SIGNIN_CALL = (data) => {
  return axios.post(api.user.signIn, data, { headers: configParams });
};

export const LOGOUT_CALL = (token) => {
  return axios.post(api.user.logout, token, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const GET_USER_INFO_CALL = (token) => {
  return axios.post(api.user.getInfo, token, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const USER_ORDER_HISTORY_CALL = (token) => {
  console.log(token);
  return axios.post(api.user.orderHistory, token, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

//-------------Forgot Password Services-------------//

export const FORGOT_PASS_OTP_REQ = (phone) => {
  return axios.post(api.user.forgotPassword.otpReq, phone, {
    headers: configParams,
  });
};

export const FORGOT_PASS_OTP_SEND = (data) => {
  return axios.post(api.user.forgotPassword.otpSend, data, {
    headers: configParams,
  });
};

export const RESET_PASSWORD_REQ = (data) => {
  return axios.post(api.user.forgotPassword.resetPassword, data, {
    headers: configParams,
  });
};

export const GET_PRODUCT_CATEGORIES_CALL = () => {
  return axios.get(api.productCategories);
};

export const GET_PRODUCTS = (categoryWithId) => {
  console.log(categoryWithId);
  return axios.post(api.products, categoryWithId, { headers: configParams });
};

export const GET_ALL_PRODUCTS = (pageNumber) => {
  console.log(pageNumber);
  return axios.get(`${BASE_URL}/all-products?page=${pageNumber}`);
};

export const SEARCH_PRODUCTS = (searchTerm) => {
  return axios.post(api.search, searchTerm, { headers: configParams });
};

export const GET_FEATURED_PRODUCTS = (type) => {
  return axios.get(`${BASE_URL}/product/${type}`);
};

export const USER_ORDER = (orderData, token) => {
  return axios.post(api.order, orderData, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
  });
};

export const VERIFY_EMAIL_CALL = (key) => {
  return axios.get(api.user.verifyEmail(key), {
    headers: userInfoConfigParams,
  });
};
// export const VERIFY_EMAIL_CALL = (key) => {
//   return axios.get(api.user.verifyEmail(key), {
//     headers: userInfoConfigParams,
//   });
// };

// export const SIGNIN_CALL = (data) => {
//   return axios.post(api.user.signIn, data, { headers: configParams });
// };

// export const GET_USER_INFO = () => {
//   return axios.get(api.user.getInfo, { headers: userInfoConfigParams });
// };

// export const UPDATE_USER_CALL = (data) => {
//   return axios.put(api.user.updateInfo, data, {
//     headers: jsonConfigParams,
//   });
// };

// export const CREATE_DATASET_CALL = (data) => {
//   return axios.post(api.dataset.create, data, {
//     headers: userInfoConfigParams,
//   });
// };
