<script setup>
import { computed } from "vue";
import { EnumShowModalAuth } from "@/utils/enums";
import { StoreApp } from "@/services/stores";

const props = defineProps({
  visible: { type: Boolean, required: false, default: false },
  title: { type: String, required: false, default: "SIGN_IN" },
});

const STORE_APP = StoreApp();

const visible = computed(() => props.visible);

//const emits = defineEmits(["onClickTextSignIn", "onClickTextSignUp"]);

const ButtonInPictureSignInOrSignUp = () => {
  if (props.title === "SIGN_IN") {
    STORE_APP.onActionToggleModalAuth(EnumShowModalAuth.SIGN_UP, true);
  }
  if (props.title === "SIGN_UP") {
    STORE_APP.onActionToggleModalAuth(EnumShowModalAuth.SIGN_IN, true);
  }
};
</script>
<!--     style="
      width: 74.429rem;
      width: 70rem;
      max-width: calc(100% - 1rem);
      max-height: calc(100% - 2rem);
    " -->
<template>
  <Dialog
    v-model:visible="visible"
    :modal="true"
    class="bg-red-200"
    content-class="sm:overflow-visible p-0 border-round-xs bg-yellow-200"
    style="width: 74.429rem; width: 70rem"
  >
    <!-- Body -->
    <div class="flex">
      <!-- Form -->
      <div
        v-if="props.title === 'SIGN_UP'"
        class="flex flex-column col bg-green-200 z-2"
        style="width: 500px; height: 600px"
      >
        <slot name="content" />
      </div>

      <!-- Image and content -->
      <div class="hidden md:flex bg-yellow-200">
        <div class="relative flex justify-content-center align-items-center">
          <div class="bg-red-200" style="width: 600px; height: 600px">
            <!-- <img
              src="@/../public/banner/banner-SignIn.png"
              class="image-custom"
              style="width: 550px; height: 700px"
            /> -->
          </div>

          <div class="absolute flex flex-column w-9">
            <span class="text-white text-center text-4xl"
              >Nếu bạn chưa có tài khoản</span
            >
            <button
              @click="ButtonInPictureSignInOrSignUp"
              class="flex justify-content-center mt-3 button-custom"
            >
              Đăng ký ngay tại đây
            </button>

            <span class="text-center mt-3 text-white font-normal"
              >purus purus cursus semper lobortis aliquet lectus fringilla. Sit
              varius scelerisque morbi nisi amet sit. Et iaculis cursus at
              pretium orci nibh laoreet. Massa in arcu vivamus non sit potenti
              enim in. Placerat volutpat sit etiam laoreet id lorem turpis et
              mauris. Odio egestas nisi sit praesent dignissim aliquam.</span
            >
          </div>
        </div>
      </div>

      <!-- Form -->
      <div v-if="props.title === 'SIGN_IN'" class="flex flex-column col">
        <!-- Content -->
        <slot name="content" />
      </div>
    </div>
  </Dialog>
</template>

<style lang="scss" scoped>
.button-custom {
  background: rgba(242, 242, 242, 0.711);
  color: rgba(58, 153, 67, 1);
  font-size: 30px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  padding: 10px 0;
  cursor: pointer;
  &:hover {
    background: rgba(242, 242, 242, 0.503);
    color: rgb(115, 255, 129);
    transition: 0.3s;
  }
}
</style>
