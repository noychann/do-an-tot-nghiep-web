<script setup>
import { Form } from "vee-validate";
import { STORE_AUTH, StoreApp } from "@/services/stores";
import InputValidation from "@/components/InputValidation.vue";
import { validationSchema, EnumShowModalAuth } from "@/utils";
import * as Yup from "yup";

const STORE_APP = StoreApp();

const STORE_SIGN_IN = STORE_AUTH.StoreSignIn();

const onChangeComponents = (componentName, visible) => {
  STORE_APP.onActionToggleModalAuth(componentName, visible);
};

const onSubmitFormLogin = async (values, { setFieldError }) => {
  return STORE_SIGN_IN.onActionLogin({
    email: values.email,
    password: values.password,
  })
    .then(() => {
      onChangeComponents(EnumShowModalAuth.SIGN_IN, false);
    })
    .catch((error) => {
      if (error === "Email không chính xác, vui lòng nhập lại!") {
        setFieldError("email", error);
      }

      if (error === "Mật khẩu không chính xác, vui lòng nhập lại!") {
        setFieldError("password", error);
      }
    });
};

const onClickTextForgetPassword = () => {
  onChangeComponents(EnumShowModalAuth.FORGET_PASSWORD);
};

const schema = Yup.object({
  email: validationSchema.emailTest,
  password: validationSchema.password,
});
</script>

<template>
  <div class="text-center w-full">
    <span class="font-bold text-4xl">SIGN IN</span>

    <Form
      @submit="onSubmitFormLogin"
      :validation-schema="schema"
      class="mt-3 mb-3 w-9 mx-auto"
    >
      <!-- Login with email -->
      <div class="flex flex-column w-full mx-auto">
        <!-- Email -->
        <InputValidation
          name="email"
          inputType="text"
          :inputProps="{
            maxlength: 150,
            placeholder: 'Nhập email',
            autofocus: true,
          }"
          inputClass="input w-full"
        />

        <!-- Password -->
        <InputValidation
          name="password"
          input-type="password"
          :inputProps="{
            placeholder: 'Mật khẩu',
            feedback: false,
            class: 'w-full',
          }"
          inputClass="w-full input mt-3"
        />
      </div>

      <!-- Login with FB or GG -->
      <!-- <div class="mt-3">
        <div class="flex justify-content-between align-items-center">
          <div class="w-5 bg-gray-300" style="height: 2px"></div>
          <span>hoặc</span>
          <div class="w-5 bg-gray-300" style="height: 2px"></div>
        </div>

        <div class="mt-1">
          <span>đăng nhập bằng tài khoản</span>
          <div class="flex justify-content-center gap-5 mt-1">
            <div class="w-3rem h-3rem bg-yellow-200"></div>
            <div class="w-3rem h-3rem bg-yellow-200"></div>
          </div>
        </div>
      </div> -->

      <!-- Forgot password -->

      <Button
        @click="onClickTextForgetPassword"
        class="p-button-text p-0 border-round-sm w-max mt-2"
        style="color: black"
        label="Quên mật khẩu?"
      >
        <!-- <div class="w-full bg-gray-300 mb-3" style="height: 2px"></div> -->
      </Button>

      <!-- Button Sign In -->
      <div class="mt-3 flex justify-content-center">
        <Button
          type="submit"
          label="Đăng nhập"
          class="w-11 flex justify-content-center button-custom"
        />
      </div>

      <div class="md:hidden flex justify-content-center mt-3">
        <span
          class="md:hidden cursor-pointer hover:text-green-700 transition-duration-100"
        >
          đăng ký tại đây
        </span>
      </div>
    </Form>
  </div>
</template>

<style scoped lang="scss">
.button-custom {
  font-weight: 500;
  background: rgba(36, 95, 41, 1);
}
</style>
