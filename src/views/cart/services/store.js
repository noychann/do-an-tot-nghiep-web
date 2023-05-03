import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { API_CART } from "@/services/api";
import { ToastService } from "@/utils";

export const StoreCart = defineStore("StoreCart", () => {
  // Các hàm khác
  const TOAST = ToastService();

  // State
  const carts = ref([]);

  //Getter
  const onGetterCarts = computed(() => carts);

  //Action

  const onActionGetCart = async (user_id) => {
    return API_CART.API_CART.onApiGetCart(user_id)
      .then(({ data: res }) => {
        if (res.success) {
          carts.value = res.data;
          TOAST.success("Lấy Cart thành công");
          console.log(carts);
        } else {
          TOAST.error("Lấy Cart detail thaất bại");
          throw res.statusValue;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  return {
    onGetterCarts,
    onActionGetCart,
  };
});
