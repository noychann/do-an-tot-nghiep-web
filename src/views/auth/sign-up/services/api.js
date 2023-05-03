import { AxiosInstance } from "@/services/api";

class ApiSignUp {
  onApiCreateUser = ({ fullName, email, password }) => {
    return AxiosInstance({
      method: "post",
      url: "/api/v1/auth/register",
      data: {
        fullName,
        email,
        password,
      },
    });
  };

  onApiVerifyOTPSignUp = ({ email, activationCode }) => {
    return AxiosInstance({
      method: "post",
      url: "/api/v1/auth/accuracy",
      data: {
        email,
        activationCode,
      },
    });
  };
}

export const API_SIGN_UP = new ApiSignUp();
