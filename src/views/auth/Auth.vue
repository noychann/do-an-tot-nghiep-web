<script setup>
import AuthDialog from "./components/AuthDialog.vue";
import { EnumShowModalAuth } from "@/utils/enums";
import { StoreApp } from "@/services/stores";
import { computed } from "vue";
import SignInView from "./sign-in/SignIn.vue";
import SignUpView from "./sign-up/SignUp.vue";
import forgetPassword from "./forget-password/forget-password.vue";

const STORE_APP = StoreApp();

const currentComponentTitle = computed(() => {
  switch (currentComponentName.value) {
    case EnumShowModalAuth.SIGN_IN:
      return "SIGN_IN";

    case EnumShowModalAuth.SIGN_UP:
      return "SIGN_UP";

    case EnumShowModalAuth.FORGET_PASSWORD:
      return "FORGET_PASSWORD";
    default:
      return "";
  }
});

const currentComponentName = computed(
  () => STORE_APP.onGetterCurrentModalAuthComponentName.value,
);
// const onClickTextSignUp = () => {
//   currentComponentName.value = EnumShowModalAuth.SIGN_IN;
// };
</script>

<template>
  <AuthDialog
    :visible="STORE_APP.onGetterVisibleModalAuth.value"
    :title="currentComponentTitle"
    :showHeader="false"
    :close-on-escape="false"
  >
    <template #content>
      <SignInView v-if="currentComponentName === EnumShowModalAuth.SIGN_IN" />

      <SignUpView v-if="currentComponentName === EnumShowModalAuth.SIGN_UP" />

      <forgetPassword
        v-if="currentComponentName === EnumShowModalAuth.FORGET_PASSWORD"
      />
    </template>
  </AuthDialog>
</template>
