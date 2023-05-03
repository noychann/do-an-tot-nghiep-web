import { AxiosInstance } from "@/services/api";

class ApiForgetPassword {
  // Api gui code qua mail de xac nhan (dung cho cac truong hop xac thuc)
  onApiResetUserPassword = (email) => {
    return AxiosInstance({
      method: "post",
      url: "/api/v1/auth/send-code",
      data: { email },
    });
  };

  //   API xac thuc code (neu dung thi cho doi mat khau)
  onApiResetUserPasswordOTP = ({ email, activationCode }) => {
    return AxiosInstance({
      method: "post",
      url: "/api/v1/auth/accuracy-password",
      data: { email, activationCode },
    });
  };

  //   API doi mat khau (khi ma da xac thuc code oke)
  onApiResetUsernewPassword = ({ email, password }) => {
    return AxiosInstance({
      method: "post",
      url: "/api/v1/auth/reset-password",
      data: { email, password },
    });
  };
}
export const API_FORGET_PASSWORD = new ApiForgetPassword();
