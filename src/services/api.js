import axios from "axios";

export * as API_HOME from "@/views/home/services/api";
export * as API_AUTH from "@/views/auth/services/api";
export * as API_CATEGORY from "@/views/category/services/api";
export * as API_ACCOUNT from "@/views/account/services/api";
export * as API_CART from "@/views/cart/services/api";

export const AxiosInstance = axios.create({
  baseURL: "https://epulo.serveo.net", // process.env.VUE_APP_BASE_URL
  // header
  // headers: {
  //   Authorization: `Bearer ${localStorage.getItem("token")}`,
  // },
});

AxiosInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    // Do something with request error

    return Promise.reject(error);
  },
);

AxiosInstance.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response;
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  },
);
