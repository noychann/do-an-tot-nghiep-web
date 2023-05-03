import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { API_ACCOUNT } from "@/services/api";
import { ToastService } from "@/utils";

export const StoreAccountUpdate = defineStore("StoreAccountUpdate", () => {
  // Các hàm khác
  const TOAST = ToastService();

  // States - Không trả về states
  const accountInformation = ref();

  // Getters - Không trả về .value
  const onGetterAccountInformation = computed(() => accountInformation);

  // Actions Acount Details
  const onActionGetAccountInformation = async () => {
    return API_ACCOUNT.API_ACCOUNT_UPDATE.onApiGetCustomer()
      .then(({ data: res }) => {
        if (res.success) {
          accountInformation.value = res.data;
          console.log(res);
          TOAST.success("Lấy user thành công");
          return res.data;
        } else {
          TOAST.error("Lấy user thất bại");
          throw res;
        }
      })
      .catch((error) => {
        TOAST.error(error + "");
        throw new Error(error);
      });
  };

  return { onActionGetAccountInformation, onGetterAccountInformation };
});
