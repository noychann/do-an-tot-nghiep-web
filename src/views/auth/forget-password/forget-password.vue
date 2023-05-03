<script setup>
import { ref, watch, reactive } from "vue";
import { Form } from "vee-validate";
import { STORE_AUTH } from "@/services/stores";
import InputValidation from "@/components/InputValidation.vue";
import OtpConfirmComponent from "../components/OtpConfirm.vue";
import FormForgetPassword from "./components/FormForgetPassword.vue";
import { validationSchema, EnumShowComponentsForgetPassword } from "@/utils";
import * as Yup from "yup";

const STORE_FORGET_PASSWORD = STORE_AUTH.StoreForgetPassword();

const schemas = {
  FORGET_PASSWORD: Yup.object({
    email: validationSchema.emailTest,
  }),
  OTP_CONFIRM: Yup.object({
    otp: validationSchema.otp,
  }),
};

const otpRef = ref(null);

const otpData = reactive({
  email: "",
  expiredTime: 0,
  page: "Forget_Password",
});

const currentComponent = ref(EnumShowComponentsForgetPassword.FORGET_PASSWORD);
const currentSchema = ref(schemas.FORGET_PASSWORD);

const onCheckEmail = async (values, setFieldError) => {
  await STORE_FORGET_PASSWORD.onActionResetUser({
    email: values.email,
  })
    .then((res) => {
      otpData.email = values.email;
      otpData.expiredTime = res.expiredTime;
      console.log("ok");

      currentComponent.value = EnumShowComponentsForgetPassword.OTP_CONFIRM;
    })
    .catch((error) => {
      console.log(error);
      setFieldError("email", error.statusValue);
    });
};

const onClickContinueOtpConfirm = (values, setFieldError, resetField) => {
  STORE_FORGET_PASSWORD.onActionVerifyOTPResetPassword({
    activationCode: values.otp,
  })
    .then(() => {
      currentComponent.value =
        EnumShowComponentsForgetPassword.FORGET_PASSWORD_FORM;
    })
    .catch((error) => {
      console.log("not ok");
      console.log(values.otp);
      otpRef.value.clearOtpInput();

      resetField("otp", { error: "" });

      setFieldError("otp", error.statusValue);
    });
};

const onClickContinue = (values, { setFieldError, resetField }) => {
  switch (currentComponent.value) {
    case EnumShowComponentsForgetPassword.FORGET_PASSWORD:
      onCheckEmail(values, setFieldError);
      break;

    case EnumShowComponentsForgetPassword.OTP_CONFIRM:
      onClickContinueOtpConfirm(values, setFieldError, resetField);
      break;

    default:
      break;
  }
};

watch(currentComponent, () => {
  switch (currentComponent.value) {
    case EnumShowComponentsForgetPassword.FORGET_PASSWORD:
      currentSchema.value = schemas.FORGET_PASSWORD;
      break;
    case EnumShowComponentsForgetPassword.OTP_CONFIRM:
      currentSchema.value = schemas.OTP_CONFIRM;
      break;

    default:
      break;
  }
});
</script>

<template>
  <div class="text-center w-full">
    <span class="font-bold text-4xl">Forgot Password</span>

    <Form
      @submit="onClickContinue"
      :validation-schema="currentSchema"
      class="mt-3 mb-3 w-9 mx-auto"
    >
      <!-- Login with email -->
      <div
        v-if="
          currentComponent === EnumShowComponentsForgetPassword.FORGET_PASSWORD
        "
        class="flex flex-column w-full mx-auto"
      >
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

        <!-- Button Sign In -->
        <div class="mt-3 flex justify-content-center">
          <Button
            type="submit"
            label="Tiếp tục"
            class="w-11 flex justify-content-center button-custom"
          />
        </div>
      </div>

      <OtpConfirmComponent
        ref="otpRef"
        :data="otpData"
        v-if="currentComponent === EnumShowComponentsForgetPassword.OTP_CONFIRM"
      />
    </Form>

    <FormForgetPassword
      v-if="
        currentComponent ===
        EnumShowComponentsForgetPassword.FORGET_PASSWORD_FORM
      "
    />
  </div>
</template>

<style></style>
