import { AxiosInstance } from "@/services/api";

class ApiSignIn {
  onApiLogin = ({ email = "", password = "" }) => {
    return AxiosInstance({
      method: "post",
      url: "/api/v1/auth/login",
      data: {
        email,
        password,
      },
    });
  };
}

export const API_SIGN_IN = new ApiSignIn();
