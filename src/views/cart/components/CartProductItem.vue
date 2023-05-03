<script setup>
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const cart = ref(props.data);

const productTypeSelect = ref("");
const productQuantity = ref(1);
productQuantity.value = cart.value.quantity;

const checked = ref(false);
const checkedAll = ref(false);

const productTypeList = ref([
  { name: "kiểu 1fkdals" },
  { name: "kiểu jdskfhjkadshj" },
  { name: "kiểu 1fdksalf" },
  { name: "kiểu 1fkd" },
]);
</script>
<template>
  <!-- PRODUCT 1 IN STORE 1 -->
  <div class="Cart-item-detail-custom bg-white mt-2 p-2 px-3">
    <!-- Chọn sản phẩm -->
    <div class="my-auto">
      <Checkbox class="" v-model="checked" :binary="true" />
    </div>

    <!-- Ảnh sản phẩm -->
    <div class="p-2">
      <img
        :src="cart.image_url"
        class="w-full border-round-md h-9rem"
        style="object-fit: cover"
      />
    </div>

    <!-- Detail sản phẩm -->
    <div class="p-2">
      <!-- Chủ đề sản phẩm -->
      <div class="" style="min-height: 2rem">
        <span class="text-xl line-height-1">{{ cart?.name }}</span>
      </div>

      <!-- Kiểu - Số lượng - Giá 1 cái - Giá tổng -->
      <div class="grid text-center p-2 mt-2 surface-200">
        <!-- Kiểu -->
        <div class="col-3">
          <span>Kiểu:</span>
          <Dropdown
            v-model="cart.type"
            :options="productTypeList"
            optionLabel="name"
            class="w-full"
          ></Dropdown>
        </div>

        <!-- Số lượng -->
        <div class="flex flex-column col-3">
          <span>Số lượng:</span>
          <InputNumber
            class="ml-2"
            v-model="cart.quantity"
            showButtons
            buttonLayout="horizontal"
            mode="decimal"
            :step="1"
            :min="1"
            decrementButtonClass="p-button-outlined border-round-left-2xl border-right-none border-300 bg-white"
            incrementButtonClass="p-button-outlined border-round-right-2xl mr-0 border-left-none border-300 bg-white"
            inputClass="w-4rem sm:w-5rem sm:w-6rem text-center font-medium border-300 text-black border-x-none"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>

        <!-- Giá 1 cái -->
        <div class="col-3">
          <span class="block">Giá:</span>
          <div class="flex justify-content-center">
            <span class="text-xs line-through text-500 align-self-center"
              >{{ cart.price }} đ</span
            >
            <span class="ml-2 text-2xl">{{ cart.discount_price }}</span>
            <span class="text-xs">đ</span>
          </div>
        </div>

        <!-- Giá tổng -->
        <div class="col-3">
          <span class="block">Tổng:</span>
          <div class="flex">
            <span class="text-xs line-through text-500 align-self-center"
              >600.000 đ
            </span>

            <span class="ml-2 text-2xl">1.000.000</span>
            <span class="text-xs">đ</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Button delete -->
    <div class="my-auto mx-auto pl-1 h-full">
      <Button
        icon="pi pi-trash"
        class="p-button-danger p-button-text h-full hover:bg-red-100 transition-duration-100"
      />
    </div>
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
