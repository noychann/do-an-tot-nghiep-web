<script setup>
import { ref } from "vue";

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
    style="min-height: 20rem"
  >
    <!-- picture -->
    <div class="w-full bg-white">
      <!-- <img src="/images/sp1.png" class="w-full" style="object-fit: cover" /> -->
      <RouterLink
        :to="{
          name: 'ProductDetail',
          params: { id: product?.id },
        }"
      >
        <img
          :src="product?.image"
          class="w-full h-12rem"
          style="object-fit: cover"
      /></RouterLink>
    </div>

    <!-- Title and detail -->
    <div class="px-3">
      <!-- Title -->
      <span>{{ product?.name }}</span>

      <!-- detail -->
      <div class="flex justify-content-between align-items-center mt-3">
        <div class="flex flex-column row-gap-1">
          <!-- Star đánh giá -->

          <Rating :readonly="true" :stars="5" :cancel="false" />

          <span class="p-0">{{ product?.price }} VND</span>
        </div>

        <div>
          <Button class="border-circle mb-1" icon="pi pi-shopping-cart" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.p-rating {
  gap: 0.2rem;
}

.product-item {
  &:hover {
    border: 1px green;
  }
}
</style>
