<script setup>
import { Form } from "vee-validate";
import InputValidation from "@/components/InputValidation.vue";
import * as Yup from "yup";
import { validationSchema, EnumShowModalAuth } from "@/utils";
import { STORE_AUTH, StoreApp } from "@/services/stores";

const STORE_FORGET_PASSWORD = STORE_AUTH.StoreForgetPassword();

const STORE_APP = StoreApp();

const onChangeComponents = (componentName, visible) => {
  STORE_APP.onActionToggleModalAuth(componentName, visible);
};

const onSubmitChangePassword = (values, { setFieldError }) => {
  STORE_FORGET_PASSWORD.onActionChangePassword({
    password: values.password,
  })
    .then(() => {
      onChangeComponents(EnumShowModalAuth.SIGN_IN, false);
    })
    .catch((error) => {
      setFieldError("password", error);
    });
};

const schema = Yup.object({
  password: validationSchema.password,
  passwordConfirm: validationSchema.passwordConfirm,
});
</script>

<template>
  <div class="text-center w-full">
    <Form
      @submit="onSubmitChangePassword"
      :validation-schema="schema"
      class="mt-3 mb-3 w-9 mx-auto"
    >
      <div class="flex flex-column w-full mx-auto">
        <span class="font-medium text-center font-normal">
          Vui lòng nhập mật khẩu mới
        </span>
        <!-- Password -->
        <InputValidation
          name="password"
          input-type="password"
          :inputProps="{
            maxlength: 10,
            placeholder: 'Nhập mật khẩu mới',
            autofocus: true,
          }"
          inputClass="w-full input mt-3"
        />

        <!-- Confirm Password -->
        <InputValidation
          name="passwordConfirm"
          input-type="password"
          :inputProps="{
            maxlength: 10,
            placeholder: 'Xác nhận lại mật khẩu',
            autofocus: true,
          }"
          inputClass="w-full input mt-3"
        />

        <div class="flex mt-3">
          <Button
            type="submit"
            class="flex-1 font-bold button-custom"
            label="Lưu"
          />
        </div>
      </div>
    </Form>
  </div>
</template>
