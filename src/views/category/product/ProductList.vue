<script setup>
import { computed } from "vue";
import { STORE_CATEGORY } from "@/services/stores";
import ProductItemCOmponent from "./components/ProductItem.vue";

const STORE_PRODUCT = STORE_CATEGORY.StoreProduct();

const onGetProducts = () => {
  STORE_PRODUCT.onActionGetListProduct();
};

onGetProducts();

const products = computed(() => STORE_PRODUCT.onGetterListProduct.value);

// const productTest = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 },
//   { id: 7 },
//   { id: 8 },
//   { id: 9 },
//   { id: 10 },
//   { id: 11 },
//   { id: 12 },
//   { id: 13 },
//   { id: 14 },
// ];
</script>

<template>
  <!-- v-for="product in products.data"
        :key="product.id"
        :data="product" -->

  <!--  v-for="productTest in productTest"
          :key="productTest.id"
          :data="productTest" -->

  <div
    class="w-10 mx-auto px-4 py-4 mt-3 gap-2 border-1 surface-border shadow-4 mb-3"
  >
    <div class="flex flex-wrap justify-content-center gap-5">
      <!-- SP yêu thích - Bán chạy -->
      <div class="flex flex-column row-gap-2 px-5">
        <!-- SP yêu thích -->
        <div>
          <Checkbox />
          <label for="ingredient2" class="ml-2">
            Sảm phẩm được yêu thích
          </label>
        </div>

        <!-- Bán chạy -->
        <div>
          <Checkbox />
          <label for="ingredient3" class="ml-2"> Bán chạy </label>
        </div>
      </div>

      <!-- Khoarng gias -->
      <div class="flex flex-column row-gap-2 px-5 border-x-2 border-300">
        <!-- Khoảng giá -->
        <div>
          <div>
            <InputText
              class="w-8rem h-2rem"
              placeholder="Khoảng giá (đ)"
            ></InputText>
            <span class="mx-2">-</span>
            <InputText
              class="w-8rem h-2rem"
              placeholder="Khoảng giá (đ)"
            ></InputText>
          </div>
          <div class="mt-2">
            <Button class="w-full h-2rem" label="Áp dụng"></Button>
          </div>
        </div>
      </div>

      <!-- Giá thấp tới cao - Nơi bán -->
      <div class="px-5">
        <div class="flex align-items-center">
          <Checkbox />
          <Dropdown
            :disabled="true"
            placeholder="Giá thấp tới cao"
            class="w-full ml-2 h-2rem align-items-center"
          />
        </div>

        <div class="flex align-items-center mt-2">
          <Checkbox />
          <Dropdown
            :disabled="false"
            placeholder="Nơi bán"
            class="w-full ml-2 h-2rem align-items-center"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="w-10 mx-auto px-3 py-4 mt-3 gap-2 border-1 surface-border shadow-4 mb-3"
  >
    <div class="w-full mx-auto">
      <div class="product-item-list-custom mx-auto">
        <ProductItemCOmponent
          v-for="product in products.data"
          :key="product.plant_id"
          :data="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-item-list-custom {
  display: grid;
  grid-template-columns: repeat(5, minmax(92px, 1fr));
  gap: 2rem;
}
</style>
