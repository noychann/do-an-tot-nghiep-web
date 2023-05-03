import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { API_CATEGORY } from "@/services/api";
import { ToastService } from "@/utils";

export const StoreHome = defineStore("StoreHome", () => {
  // Các hàm khác
  const TOAST = ToastService();

  // State
  const listProduct = ref([]);

  //Getter

  // Product List
  const onGetterListProduct = computed(() => listProduct);

  // Actions Product List
  const onActionGetListProduct = async () => {
    return API_CATEGORY.API_PRODUCT.onApiGetProducts()
      .then(({ data: res }) => {
        if (res.success) {
          listProduct.value = res;
          console.log(listProduct.value);
          TOAST.success("Tao danh sach thanh cong");
        } else {
          throw res;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  return {
    //Product List
    onGetterListProduct,
    onActionGetListProduct,
  };
});
