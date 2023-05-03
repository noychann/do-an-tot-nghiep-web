<script setup>
import { ref } from "vue";
import OtpConfirmComponent from "../components/OtpConfrim.vue";
import UpdatePasswordSuccess from "./components/UpdatePasswordSuccess.vue";

const displaySentOTP = ref(true);
const displayOTP = ref(false);
const displaySuccess = ref(false);

const onClickContinue = () => {
  displaySentOTP.value = false;
  displayOTP.value = true;
  displaySuccess.value = false;
};
</script>

<template>
  <div class="w-10 mx-auto my-3">
    <span class="font-medium text-2xl block">Đổi mật khẩu</span>

    <span class="text-center font-normal mt-3"> Gửi OTP qua </span>
    <span class="font-semibold">a.ptm1711@gmail.com</span>
    <span>&nbsp;để thay đổi mật khẩu</span>

    <Form class="mt-3 mb-3 w-6 mx-auto" @submit="onClickContinue">
      <!-- Button Sign In -->
      <div v-if="displaySentOTP" class="mt-3 flex justify-content-center">
        <Button
          type="submit"
          label="Gửi"
          class="w-11 flex justify-content-center button-custom"
        />
      </div>

      <OtpConfirmComponent v-if="displayOTP" />
    </Form>

    <UpdatePasswordSuccess v-if="displaySuccess" />
  </div>
</template>
