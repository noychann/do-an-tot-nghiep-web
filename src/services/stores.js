import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { EnumShowModalAuth } from "@/utils/enums";

export * as STORE_HOME from "@/views/home/services/store";
export * as STORE_AUTH from "@/views/auth/services/store";
export * as STORE_CATEGORY from "@/views/category/services/store";
export * as STORE_ACCOUNT from "@/views/account/services/store";
export * as STORE_CART from "@/views/cart/services/store";

export const StoreApp = defineStore("StoreApp", () => {
  // Các hàm khác

  // States - Không trả về states
  const currentModalAuthComponentName = ref(EnumShowModalAuth.SIGN_IN);

  const visibleModalAuth = ref(false);

  // Getters - Không trả về .value
  const onGetterCurrentModalAuthComponentName = computed(
    () => currentModalAuthComponentName,
  );

  const onGetterVisibleModalAuth = computed(() => visibleModalAuth);

  // Actions
  const onActionToggleModalAuth = (
    componentName = EnumShowModalAuth.SIGN_IN,
    visible = true,
  ) => {
    currentModalAuthComponentName.value = componentName;
    visibleModalAuth.value = visible;
  };

  return {
    // Open modal Auth
    onGetterCurrentModalAuthComponentName,
    onGetterVisibleModalAuth,
    onActionToggleModalAuth,
  };
});
