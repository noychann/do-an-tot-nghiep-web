<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const showModal = ref(true);

const router = useRouter();

const onClickCloseModel = () => {
  showModal.value = !showModal.value;

  router?.push({
    name: "ProductList",
  });
};
</script>

<template>
  <Dialog
    :visible="showModal"
    :showHeader="false"
    :modal="true"
    content-class="p-0"
    class="overflow-hidden"
    style="width: 28rem; max-width: calc(100% - 1rem); border-radius: 1.143rem"
  >
    <div class="flex flex-column text-center p-4">
      <!-- <i class="pi pi-check text-4xl mb-2 text-green-500"></i> -->
      <span class="text-2xl font-bold">Đặt hàng đã thành công!</span>

      <img src="/images/thank-you.png" class="p-5 pl-2" alt="" />

      <span>Xin cảm ơn quý khách</span>

      <Button @click="onClickCloseModel" class="mt-3" label="Đóng"></Button>
    </div>
  </Dialog>
</template>
