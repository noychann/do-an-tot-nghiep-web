import { defineStore } from "pinia";
import { API_AUTH } from "@/services/api";
import { ToastService } from "@/utils";
import { ref, computed } from "vue";

export const StoreSignUp = defineStore("StoreSignUp", () => {
  const TOAST = ToastService();

  const { API_SIGN_UP } = API_AUTH;

  // States
  const emaill = ref("");

  // Getters
  const onGetterEmail = computed(() => emaill);

  // Actions
  const onActionCreateUser = async ({
    fullName = "",
    email = "",
    password = "",
  }) => {
    return API_SIGN_UP.onApiCreateUser({
      fullName,
      email,
      password,
    })
      .then(({ data: res }) => {
        if (res.success) {
          TOAST.success("Đăng ký thành công!");
          console.log(res);
          return res.data;
        } else {
          console.log(res);
          throw res;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const onActionVerifyOTPSignUp = async ({
    email = emaill.value,
    activationCode,
  }) => {
    return API_SIGN_UP.onApiVerifyOTPSignUp({
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

  return {
    onActionCreateUser,
    onActionVerifyOTPSignUp,

    onGetterEmail,
  };
});
