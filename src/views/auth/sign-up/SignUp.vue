<script setup>
import { Form } from "vee-validate";
import { ref, watch, reactive } from "vue";
import { validationSchema, EnumShowComponentsSignUp } from "@/utils";
import { STORE_AUTH } from "@/services/stores";
import InputValidation from "@/components/InputValidation.vue";
import OtpConfirmComponent from "../components/OtpConfirm.vue";
import * as Yup from "yup";

const STORE_SIGN_UP = STORE_AUTH.StoreSignUp();

const currentComponent = ref(EnumShowComponentsSignUp.SIGN_UP);

const schemas = {
  SIGN_UP: Yup.object({
    fullName: validationSchema.fullName,
    email: validationSchema.emailTest,
    password: validationSchema.password,
    confirmPassword: validationSchema.passwordConfirm,
  }),
  OTP_CONFIRM: Yup.object({
    otp: validationSchema.otp,
  }),
};

const currentSchema = ref(schemas.SIGN_UP);

const otpRef = ref(null);

const otpData = reactive({
  email: "",
  expiredTime: 0,
  page: "SIGN_UP",
});

const onSubmitFormSignUp = async (values) => {
  STORE_SIGN_UP.onActionCreateUser({
    fullName: values.fullName,
    email: values.email,
    password: values.password,
  })
    .then(() => {
      currentComponent.value = EnumShowComponentsSignUp.OTP_CONFIRM;
    })
    .catch(() => {
      console.log("not ok");
    });
};

const onClickContinueOtpConfirm = (values, setFieldError, resetField) => {
  STORE_SIGN_UP.onActionVerifyOTPSignUp({
    activationCode: values.otp,
  })
    .then(() => {
      console.log("OK");
    })
    .catch((err) => {
      resetField("otp", { error: "" });

      setFieldError("otp", `${err.errors?.detail}. Vui lòng thử lại`);
    });
};

const onClickContinue = (values, { setFieldError, resetField }) => {
  switch (currentComponent.value) {
    case EnumShowComponentsSignUp.SIGN_UP:
      onSubmitFormSignUp(values, setFieldError);
      break;

    case EnumShowComponentsSignUp.OTP_CONFIRM:
      onClickContinueOtpConfirm(values, setFieldError, resetField);
      break;

    default:
      break;
  }
};

watch(currentComponent, () => {
  switch (currentComponent.value) {
    case EnumShowComponentsSignUp.SIGN_UP:
      currentSchema.value = schemas.SIGN_UP;
      break;

    case EnumShowComponentsSignUp.OTP_CONFIRM:
      currentSchema.value = schemas.OTP_CONFIRM;
      break;

    default:
      break;
  }
});
</script>
<template>
  <div class="text-center my-auto w-full">
    <Form
      @submit="onClickContinue"
      :validation-schema="currentSchema"
      class="mt-3 mb-3 w-9 mx-auto"
    >
      <!-- Login with phone -->
      <div v-if="currentComponent === EnumShowComponentsSignUp.SIGN_UP">
        <div class="flex flex-column w-11 mx-auto">
          <span class="font-bold text-4xl">SIGN UP</span>
          <!-- fullname -->
          <InputValidation
            name="fullName"
            input-type="text"
            :inputProps="{
              maxlength: 250,
              autofocus: true,
            }"
            inputClass="w-full"
            disableLabel="asterisk"
            labelMessage="Họ và tên"
          />

          <!-- Phone -->
          <InputValidation
            name="email"
            inputType="text"
            :inputProps="{
              maxlength: 50,
              autofocus: true,
            }"
            inputClass="input w-full mt-2"
            disableLabel="asterisk"
            labelMessage="Nhập email"
          />

          <!-- Password -->
          <InputValidation
            name="password"
            input-type="password"
            :inputProps="{
              feedback: false,
              class: 'w-full',
            }"
            inputClass="w-full input mt-2"
            disableLabel="asterisk"
            labelMessage="Mật khẩu"
          />

          <!-- Confirm password -->
          <InputValidation
            name="confirmPassword"
            input-type="password"
            :inputProps="{
              autofocus: true,
            }"
            inputClass="w-full input mt-2"
            disableLabel="asterisk"
            labelMessage="Nhập lại mật khẩu"
          />
        </div>

        <!-- Button Sign In -->
        <div class="mt-3 flex justify-content-center">
          <Button
            type="submit"
            class="w-11 flex justify-content-center button-custom"
            >SIGN UP</Button
          >
        </div>
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

      <OtpConfirmComponent
        ref="otpRef"
        :data="otpData"
        v-if="currentComponent === EnumShowComponentsSignUp.OTP_CONFIRM"
      />
    </Form>
  </div>
</template>

<style scoped lang="scss">
.button-custom {
  font-weight: 500;
  background: rgba(36, 95, 41, 1);
}
</style>
