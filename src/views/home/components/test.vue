<script setup>
import { ref } from "vue";
import { formatNumberToLocale } from "@/utils";

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const product = ref(props.data);
</script>

<template>
  <div
    class="product-item border-1 surface-border shadow-4 m-1 cursor-pointer"
    style="min-height: 19rem"
  >
    <!-- picture -->
    <div class="w-full bg-white">
      <!-- <img src="/images/sp1.png" class="w-full" style="object-fit: cover" /> -->
      <RouterLink
        :to="{
          name: 'ProductDetail',
          params: { id: product?.plant_id },
        }"
      >
        <img
          :src="product?.image"
          class="w-full h-12rem"
          style="object-fit: cover"
      /></RouterLink>
    </div>

    <!-- Title and detail -->
    <div class="pl-3 pr-3 mt-1">
      <!-- Title -->
      <div class="line-height-2" style="min-height: 2rem">
        <span class="text-sm description-custom">d</span>
      </div>

      <!-- detail -->

      <div class="flex flex-column row-gap-1 mt-2">
        <!-- Star đánh giá -->
        <div class="flex">
          <span class="mr-1 text-sm">4.5</span>
          <Rating :readonly="true" :stars="5" :cancel="false" />
        </div>
      </div>

      <!-- Giá - số người mua -->
      <div class="flex justify-content-between mt-2">
        <!-- Giá -->
        <div>
          <span class="p-0 font-semibold text-green-700">{{
            formatNumberToLocale(product.price)
          }}</span>
          <span class="text-xs vertical-align-top text-green-700">&nbsp;đ</span>
        </div>

        <!-- số người mua -->
        <div class="text-right">
          <span class="text-xs text-500">Đã bán 15.6k</span>
        </div>
      </div>
    </div>
  </div>

  <Button @click="onClickButtonSeeMore">Xem thêm product</Button>
</template>
