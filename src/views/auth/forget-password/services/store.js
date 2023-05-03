import { defineStore } from "pinia";
import { API_AUTH } from "@/services/api";
import { ref } from "vue";
import { ToastService } from "@/utils";

export const StoreForgetPassword = defineStore("StoreForgetPassword", () => {
  const TOAST = ToastService();

  const { API_FORGET_PASSWORD } = API_AUTH;

  // States
  const mail = ref("");

  // Getters
  // code ...

  // Actions
  const onActionResetUser = async ({ email = "" }) => {
    return API_FORGET_PASSWORD.onApiResetUserPassword(email)
      .then(({ data: res }) => {
        if (res.success === true) {
          mail.value = email;
          console.log(res.expiredTime);
          return res;
        } else {
          throw res;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const onActionVerifyOTPResetPassword = async ({
    email = mail.value,
    activationCode,
  }) => {
    return API_FORGET_PASSWORD.onApiResetUserPasswordOTP({
      email,
      activationCode,
    })
      .then(({ data: res }) => {
        if (res.success) {
          return res;
        } else {
          throw res;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const onActionChangePassword = async ({ email = mail.value, password }) => {
    return API_FORGET_PASSWORD.onApiResetUsernewPassword({
      email,
      password,
    })
      .then(({ data: res }) => {
        if (res.success) {
          TOAST.success("Đã lưu mật khẩu");

          return res;
        } else {
          throw res;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    onActionResetUser,
    onActionVerifyOTPResetPassword,
    onActionChangePassword,
  };
});
