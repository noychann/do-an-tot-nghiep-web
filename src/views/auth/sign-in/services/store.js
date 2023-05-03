import { defineStore } from "pinia";
import { API_AUTH } from "@/services/api";
import { ToastService, appLocalStorage } from "@/utils";

export const StoreSignIn = defineStore("StoreSignIn", () => {
  const TOAST = ToastService();

  const { API_SIGN_IN } = API_AUTH;

  const onActionLogin = async ({ email = "", password = "" }) => {
    return API_SIGN_IN.onApiLogin({
      email,
      password,
    })
      .then(async ({ data: res }) => {
        if (res?.success) {
          await Object.assign(appLocalStorage.value.userData, res.data);
          appLocalStorage.value.userData.accessToken = await res?.token;

          console.log("hello");
          console.log(res.data);
          TOAST.success("Đăng nhập thành công");

          return res;
        } else {
          appLocalStorage.value.userData.accessToken = await res?.token;
          throw res?.statusValue;
        }
      })
      .catch((error) => {
        throw new Error(error).message;
      });
  };

  return {
    onActionLogin,
  };
});
