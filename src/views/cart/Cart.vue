<script setup>
// import NoItemCart from "./components/EmptyCart.vue";
import CartProductItem from "./components/CartProductItem.vue";
import { useRouter } from "vue-router";
import { computed, onMounted } from "vue";
import { STORE_CART as STORE_CART_PARENT } from "@/services/stores";
import { appLocalStorage } from "@/utils";

const router = useRouter();

const STORE_CART = STORE_CART_PARENT.StoreCart();

const user_id = appLocalStorage.value.userData.id;

const carts = computed(() => STORE_CART.onGetterCarts.value);

const onClickOrder = () => {
  router?.push({
    name: "BillList",
  });
};

onMounted(() => {
  STORE_CART.onActionGetCart(user_id);
  console.log(carts);
});
</script>

<template>
  <div
    class="w-10 mx-auto px-4 py-4 mt-3 gap-2 border-1 surface-border shadow-4"
  >
    <div class="flex justify-content-between">
      <span class="text-2xl font-bold">Giỏ hàng</span>

      <!-- Buttom đặt hàng -->
      <Button @click="onClickOrder" label="Đặt hàng"></Button>
    </div>

    <div>
      <div class="grid mt-2">
        <!-- START- Product item -->
        <!-- START - QUÁN 1 -->
        <div
          class="col-12 bg-green-100 p-3 mt-3 border-1 border-300 border-round-md"
        >
          <!-- Title IN STROE 1 -->
          <div class="Cart-item-title-custom align-items-center">
            <!-- Chọn sản phẩm -->
            <div class="m-auto pb-1">
              <Checkbox class="" v-model="checkedAll" :binary="true" />
            </div>

            <!-- chọn tất cả -->
            <div class="">
              <span class="block">Chọn Tất cả</span>
            </div>

            <!-- Button delete -->
            <div class="">
              <Button
                icon="pi pi-trash"
                class="border-red-500 bg-red-100 text-red-500 border-5 p-1"
              />
            </div>
          </div>

          <!-- start - item -->
          <CartProductItem v-for="cart in carts" :key="cart" :data="cart" />
        </div>
        <!-- END - QUÁN 1 -->
      </div>
    </div>

    <!-- Trường hợp ko có sản phấm -->
    <!-- <NoItemCart /> -->
  </div>
</template>

<style lang="scss" scoped>
.Cart-item-title-custom {
  display: grid;
  grid-template-columns: 4% 92% 2%;
}

.Cart-item-detail-custom {
  display: grid;
  grid-template-columns: 2% 15% 80% 3%;
}
</style>
