<script setup>
import { ref, onMounted } from "vue";
import OtpInput from "vue3-otp-input";
import { useField } from "vee-validate";
import { STORE_AUTH } from "@/services/stores";

const otp = useField("otp", (value) => !!value);

const STORE_FORGET_PASSWORD = STORE_AUTH.StoreForgetPassword();

const props = defineProps({
  data: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const emits = defineEmits(["onClickConfirm"]);

const refOtpInput = ref(null);

const intervalCountDown = ref(null);

const timeCountDown = ref(props.data.expiredTime);

const onClickConfirmOTP = () => {
  otp.value.value?.length === 4 && emits("onClickConfirm", otp.value.value);
};

const onCountTimeToResendOTP = () => {
  intervalCountDown.value = setInterval(() => {
    if (timeCountDown.value === 0) {
      clearInterval(intervalCountDown.value);
    } else {
      timeCountDown.value--;
    }
  }, 1000);
};

const onClickTextResendOTP = async () => {
  clearInterval(intervalCountDown.value);
  //   if (props.data.page === "Sign_Up") {
  //     await STORE_SIGN_UP.onActionVerifyPhone({
  //       mobiphone: props.data.phone,
  //     }).then(() => {
  //       refOtpInput.value.clearInput();
  //       timeCountDown.value = props.data.secTimer;
  //       onCountTimeToResendOTP();
  //     });
  //   }

  if (props.data.page === "Forget_Password") {
    await STORE_FORGET_PASSWORD.onActionResetUser({
      email: props.data.email,
    }).then(() => {
      refOtpInput.value.clearInput();
      timeCountDown.value = props.data.expiredTime;
      onCountTimeToResendOTP();
    });
  }
};

const onInputOtpComplete = (value) => {
  otp.value.value = value;
};

const onInputOtpChange = (value) => {
  otp.value.value = value;
};

onMounted(() => {
  onCountTimeToResendOTP();
});

defineExpose({
  clearOtpValue: () => refOtpInput.value.clearInput(),
});
</script>

<template>
  <div class="div-otp-input flex flex-column align-items-center">
    <OtpInput
      class="InputOTP mx-auto"
      ref="refOtpInput"
      separator="&ensp;"
      :input-classes="['otp-input', otp.errorMessage.value ? 'p-invalid' : '']"
      :conditional-class="['one', 'two', 'three', 'four']"
      :num-inputs="4"
      input-type="number"
      :should-auto-focus="true"
      @on-complete="onInputOtpComplete"
      @on-change="onInputOtpChange"
    />

    <div class="mt-1 flex justify-content-center" v-if="otp.errorMessage.value">
      <small class="p-error">
        {{ otp.errorMessage.value }}
      </small>
    </div>
  </div>

  <!-- countDown of resend otp -->
  <div class="text-center text-sm div-otp-input">
    <span class="font-normal text-500"> Bạn chưa nhận được mã? Nhấn </span>

    <span>
      <Button
        type="button"
        class="p-button-link p-0 outline-none font-bold"
        :disabled="timeCountDown > 0"
        @click="onClickTextResendOTP"
      >
        Gửi lại
      </Button>
    </span>

    <span class="font-normal text-500"> sau {{ timeCountDown }} giây </span>
  </div>

  <div class="mt-0">
    <Button
      class="flex-1 font-bold button-custom w-full"
      type="submit"
      label="Xác nhận"
      @click="onClickConfirmOTP"
    />
  </div>
</template>

<style lang="scss">
.InputOTP {
  input {
    width: 52px;
    height: 52px;
    font-size: 18px;
    text-align: center;
    border: 1px solid #d0d0d0;
    border-radius: 16px;
    outline-color: #007444;
  }

  :hover {
    border-color: #007444;
    transition: 0.3s;
  }

  &::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield; /* Firefox */
  }
}

.otp-input {
  &.p-invalid {
    border: 1px solid red;
  }
}
</style>
