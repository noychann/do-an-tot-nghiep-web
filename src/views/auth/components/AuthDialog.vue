<script setup>
import { computed } from "vue";
import { EnumShowModalAuth } from "@/utils/enums";
import { StoreApp } from "@/services/stores";

import { ref } from "vue";

const props = defineProps({
  visible: { type: Boolean, required: false, default: false },
  title: { type: String, required: false, default: "SIGN_IN" },
});

const STORE_APP = StoreApp();

const visible = computed(() => props.visible);

const signInCss = ref(false);

// const onClickTextSignUp = () => {
//   signInCss.value = !signInCss.value;
//   STORE_APP.onActionToggleModalAuth(EnumShowModalAuth.SIGN_UP, true);
// };

// const onClickTextSignIn = () => {
//   signInCss.value = !signInCss.value;
//   STORE_APP.onActionToggleModalAuth(EnumShowModalAuth.SIGN_IN, true);
// };

const onClickIconCloseDialog = () => {
  STORE_APP.onActionToggleModalAuth(EnumShowModalAuth.SIGN_IN, false);
};
</script>

<template>
  <div class="relative">
    <div>
      <Dialog
        v-model:visible="visible"
        :showHeader="false"
        :modal="true"
        class="border-round-xl w-4"
        content-class="sm:overflow-visible p-0 border-round-xl"
        style="max-width: calc(100% - 1rem); max-height: calc(100% - 2rem)"
      >
        <div
          class="absolute"
          style="padding: 0.393rem; right: 10px; z-index: 5; top: 10px"
          @click="onClickIconCloseDialog"
        >
          <i class="pi pi-times cursor-pointer" />
        </div>
        <!-- Body -->
        <div
          class="container"
          :class="{ 'right-panel-active': signInCss }"
          id="container"
        >
          <!-- Form SIGN_IN -->
          <div class="form-container sign-in-container col-12">
            <slot name="content" />
          </div>

          <!-- Form SIGN_UP -->
          <!-- <div
            v-if="props.title === 'SIGN_UP'"
            class="form-container sign-up-container col-12 md:col-6"
          >
            <slot name="content" />
          </div> -->

          <!-- Form FORGOT_PASSWORD -->
          <!-- <div
            v-if="props.title === 'FORGET_PASSWORD'"
            class="form-container sign-up-container col-6 md:col-6"
          >
            <slot name="content" />
          </div> -->

          <!-- Noi dung -->
          <!-- <div
            v-if="props.title === 'SIGN_IN' || props.title === 'SIGN_UP'"
            class="hidden md:flex"
          >
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <div class="custom-in-overlay-left">
                    <h1>Xin chào bạn!</h1>
                    <p>
                      Nếu bạn mún shopping và có tài khoản r thì đăng nhập tại
                      đây
                    </p>
                    <button
                      class="ghost"
                      @click="onClickTextSignIn"
                      id="signIn"
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                <div
                  class="overlay-panel overlay-right custom-in-overlay-right"
                >
                  <div
                    class="absolute"
                    style="
                      padding: 0.393rem;
                      right: 10px;
                      z-index: 5;
                      top: 10px;
                      color: white;
                    "
                    @click="onClickIconCloseDialog"
                  >
                    <i class="pi pi-times cursor-pointer" />
                  </div>
                  <h1>Welcome!</h1>
                  <p>Bạn chưa có tài khoản đúng ko đăng ký tại đây nhá</p>
                  <button @click="onClickTextSignUp" class="ghost" id="signUp">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div> -->
        </div>
      </Dialog>
    </div>
  </div>
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

/*
h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

button {
  border-radius: 20px;
  border: 1px solid #196129;
  background-color: #196129;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  .ghost {
    background-color: transparent;
    border-color: #ffffff;
  }
}
form {
  flex-direction: column;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  z-index: 2;
}

.container.right-panel-active .sign-in-container {
  transform: translateX(100%);
}

.sign-up-container {
  margin-top: 1%;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.right-panel-active .sign-up-container {
  transform: translateX(100%);
  opacity: 1;
  z-index: 4;
  animation: show 0.6s;
}

@keyframes show {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%,
  100% {
    opacity: 1;
    z-index: 4;
  }
}

.overlay-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: transform 0.6s ease-in-out;
  z-index: 100;
}

.container.right-panel-active .overlay-container {
  transform: translateX(-100%);
}

.overlay {
  background-image: url("@/../public/banner/banner2.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.container.right-panel-active .overlay {
  transform: translateX(50%);
}

.overlay-panel {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: translateX(0);
  transition: transform 0.6s ease-in-out;
}

.overlay-left {
  transform: translateX(-20%);
}

.container.right-panel-active .overlay-left {
  transform: translateX(0);
}

.overlay-right {
  right: 0;
  transform: translateX(0);
}

.container.right-panel-active .overlay-right {
  transform: translateX(20%);
}

.custom-in-overlay-left {
  background: #e1ffea80;
  border-radius: 20px;
  padding: 20px;
  color: #17331c;
}

.custom-in-overlay-right {
  color: #005515;
} */
</style>
