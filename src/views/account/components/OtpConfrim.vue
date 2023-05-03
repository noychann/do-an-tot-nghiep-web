<script setup>
import { ref } from "vue";

const inputOtpRef = ref(null);

defineExpose({
  clearOtpInput: () => inputOtpRef.value.clearOtpValue(),
});
</script>

<template>
  <div class="flex flex-column w-full" :style="{ gap: '1rem' }">
    <div>
      <span>Nhập OTP</span>
    </div>

    <Button label="Tiếp tục"></Button>
  </div>
</template>

<style lang="scss"></style>
