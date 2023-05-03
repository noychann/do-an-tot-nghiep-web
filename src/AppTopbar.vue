<script setup>
import { ref } from "vue";
import ModalAuth from "@/views/auth/Auth.vue";
import { StoreApp } from "@/services/stores";
import { useRouter } from "vue-router";
import { OnClickOutside } from "@vueuse/components";
import {
  loginStatus,
  EnumShowModalAuth,
  ToastService,
  onDeleteUserData,
  appLocalStorage,
} from "@/utils";

const STORE_APP = StoreApp();

const TOAST = ToastService();

const router = useRouter();

const displayOverlayAccountMenu = ref(false);

const name = ref(appLocalStorage.value.userData.id);

const onNewFeature = () => {
  TOAST.info("Tính năng đang được phát triển");
};

const onToggleModalAuth = (componentName, isVisible = true) => {
  STORE_APP.onActionToggleModalAuth(componentName, isVisible);
};

const onClickOutsideAccount = () => {
  displayOverlayAccountMenu.value = false;
};

const onClickAccount = () => {
  displayOverlayAccountMenu.value = !displayOverlayAccountMenu.value;
};

const onClickLogOut = () => {
  onDeleteUserData();

  displayOverlayAccountMenu.value = false;
};

const onClickCart = () => {
  router?.push({
    name: "Cart",
  });
};

const onClickAccountInfo = () => {
  router?.push({
    name: "AccountUpdate",
  });
};
</script>

<template>
  <!-- Header content -->
  <div
    class="flex flex-wrap align-items-center topbar-custom justify-content-center"
  >
    <!-- Left -->
    <div class="col-12 lg:col-4 flex justify-content-center">
      <span
        tabindex="1"
        class="cursor-pointer font-bold"
        @click="onNewFeature()"
        >Home</span
      >
      <span
        tabindex="2"
        class="cursor-pointer font-bold ml-4"
        @click="onNewFeature()"
        >About</span
      >
      <span
        tabindex="3"
        class="cursor-pointer font-bold ml-4"
        @click="onNewFeature()"
        >Info</span
      >
      <span
        tabindex="4"
        class="cursor-pointer font-bold ml-4"
        @click="onNewFeature()"
        >Contact</span
      >
    </div>

    <!-- Logo -->
    <div class="col-12 md:col-4 flex justify-content-center">
      <router-link to="/" tabIndex="6">
        <img
          src="/icons/NoriShop.png"
          class="object-fit-contain pt-2 cursor-pointer"
          style="width: 261px; height: 67px"
        />
      </router-link>
    </div>

    <!-- Right -->
    <div
      v-if="!loginStatus"
      class="col-12 lg:col-4 flex justify-content-center align-items-center"
    >
      <span
        tabindex="2"
        class="cursor-pointer font-bold ml-4"
        @click="onToggleModalAuth(EnumShowModalAuth.SIGN_IN)"
        >SignIn</span
      >
      <span
        tabindex="2"
        class="cursor-pointer font-bold ml-4"
        @click="onToggleModalAuth(EnumShowModalAuth.SIGN_UP)"
        >SignUp</span
      >
      <div
        tabindex="3"
        class="cursor-pointer ml-4 cart-custom px-3 py-1 border-round-sm border-1 border-green-700"
        @click="onClickCart()"
      >
        <i class="pi pi-shopping-cart mr-1"></i>
        <span class="ml-2 pl-2 border-left-1 border-400">99+</span>
      </div>
    </div>

    <div
      v-else
      class="col-12 lg:col-4 flex justify-content-center align-items-center"
    >
      <OnClickOutside @trigger="onClickOutsideAccount()" class="z-1">
        <div
          @click="onClickAccount()"
          class="flex justify-content-center align-items-center p-2 cursor-pointer hover:bg-green-50"
        >
          <img
            src="/images/sp5.png"
            class="border-circle border-1 border-400"
            style="width: 2.2rem; height: 2.2rem"
          />
          <span class="ml-2">{{ name }}</span>
        </div>

        <!-- Overlay -->
        <div
          v-if="displayOverlayAccountMenu"
          class="absolute flex flex-column shadow-4 overlay-account-menu"
        >
          <span class="txt-menu-item w-full" @click="onClickAccountInfo()">
            {{ "Thông tin tài khoản" }}
          </span>
          <span class="txt-menu-item" @click="onClickPurchaseOrder()">
            {{ "Đơn đã mua" }}
          </span>
          <span
            class="txt-menu-item"
            style="color: #e60000"
            @click="onClickLogOut()"
          >
            {{ "Đăng xuất" }}
          </span>
        </div>
      </OnClickOutside>

      <div
        tabindex="3"
        class="cursor-pointer ml-4 cart-custom px-3 py-1 border-round-sm border-1 border-green-700"
        @click="onClickCart()"
      >
        <i class="pi pi-shopping-cart mr-1"></i>
        <span class="ml-2 pl-2 border-left-1 border-400">99+</span>
      </div>
    </div>
  </div>

  <ModalAuth />
</template>

<style lang="scss">
.topbar-custom {
  box-shadow: rgba(0, 0, 0, 0.03) 0px 4px 10px, rgba(0, 0, 0, 0.06) 0px 0px 2px,
    rgba(0, 0, 0, 0.12) 0px 2px 6px;
}

.overlay-account-menu {
  background-color: white;
  width: 13rem;
  border-radius: 1rem;

  .txt-menu-item {
    border-radius: 1rem;
    padding: 1rem;
    padding-inline: 1.5rem;
    cursor: pointer;
    &:hover {
      background: rgba(222, 222, 222, 0.597);
    }
  }
}

.cart-custom {
  background: rgb(200, 255, 200);
}
</style>
