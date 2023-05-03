import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { API_CATEGORY } from "@/services/api";
import { ToastService } from "@/utils";

export const StoreProduct = defineStore("StoreProduct", () => {
  // Các hàm khác
  const TOAST = ToastService();

  // State
  const listProduct = ref([]);

  const productDetails = ref({});

  const pictureList = ref([]);

  //Getter

  // Product List
  const onGetterListProduct = computed(() => listProduct);

  // Product detail
  const onGetterProductDetail = computed(() => productDetails);
  const onGetterPictureDetail = computed(() => pictureList);

  // Actions Product List
  const onActionGetListProduct = async () => {
    return API_CATEGORY.API_PRODUCT.onApiGetProducts()
      .then(({ data: res }) => {
        if (res.success) {
          listProduct.value = res;
          console.log(listProduct.value);
        } else {
          throw res;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  // Actions Product Details
  const onActionGetProductDetail = async (productId) => {
    return API_CATEGORY.API_PRODUCT_DETAILS.onApiGetProductDetail(productId)
      .then(({ data: res }) => {
        if (res.success) {
          productDetails.value = res.data;
          TOAST.success("Lấy Product detail thành công");
          console.log(productDetails);
        } else {
          TOAST.error("Lấy Product detail thaất bại");
          throw res.statusValue;
        }
      })
      .catch((error) => {
        throw error;
      });
  };

  const onActionGetPictureDetail = async () => {
    return API_CATEGORY.API_PRODUCT_DETAILS.onApiGetPictureDetail()
      .then((data) => {
        pictureList.value = data;
      })
      .catch((error) => {
        console.log("Lấy dữ liệu lỗi: " + error);
      });
  };

  // Thêm vào giỏ hàng
  const onActionUpdateCarts = async (args) => {
    return API_CATEGORY.API_PRODUCT_DETAILS.onApiUpdateCarts(args)
      .then(({ data: res }) => {
        if (res.success) {
          TOAST.success("Thêm vào giỏ hàng thành công");
          //return res.success;
        } else {
          TOAST.error("Thêm vào giỏ hàng Thất bại");
          throw res.statusValue;
        }
        return res.data;
      })
      .catch((error) => {
        TOAST.error(error);
        throw new Error(error);
      });
  };

  return {
    //Product List
    onGetterListProduct,
    onActionGetListProduct,

    // Product Detail
    onGetterProductDetail,
    onGetterPictureDetail,

    onActionGetProductDetail,
    onActionGetPictureDetail,

    onActionUpdateCarts,
  };
});
