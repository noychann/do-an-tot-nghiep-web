<script setup>
import InputOtpValidation from "@/components/InputOtpValidation.vue";
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const inputOtpRef = ref(null);

defineExpose({
  clearOtpInput: () => inputOtpRef.value.clearOtpValue(),
});
</script>

<template>
  <div class="flex flex-column w-full" :style="{ gap: '1rem' }">
    <div>
      <span>Mã OTP đã gửi tới </span>
      <span style="white-space: break-spaces" class="font-bold">{{
        props.data.email
      }}</span>
    </div>
    <div>
      <span
        class="font-medium text-center font-normal"
        style="white-space: break-spaces"
        >Vui lòng bạn check mail lại rầu nhập zô</span
      >
    </div>

    <InputOtpValidation ref="inputOtpRef" :data="props.data" />
  </div>
</template>
<style lang="scss"></style>
