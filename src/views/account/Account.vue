<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import AccountSubmenu from "./components/AccountSubmenu.vue";

const route = useRoute();

const items = ref([
  {
    id: "1",
    label: "Thông tin tài khoản",
    icon: "pi pi-user icon",
    class: "",
    items: [
      {
        id: "1-1",
        label: "Thông tin cá nhân",
        to: "AccountInfo",
      },
      {
        id: "1-2",
        label: "Đổi mật khẩu",
        to: "UpdatePassword",
      },
    ],
  },
  {
    id: "2",
    label: "Quản lý đơn hàng",
    icon: "pi pi-book icon",
    class: "",
    items: [],
    to: "Order",
  },
  {
    id: "3",
    label: "Đăng xuất",
    icon: "pi pi-sign-out",
    class: "",
    items: [],
    to: "Home",
  },
]);

// Click item con thì item cha cũng kích hoat
const onClickMenuItemParent = (data) => {
  let itemSelected = "";
  if (data.itemActive !== undefined) {
    if (data.itemActive.id.includes("-")) {
      itemSelected = data.itemActive.id.split("-")[0];
    } else {
      itemSelected = data.itemActive.id;
    }
    items.value = items.value.map((item) => {
      if (item.id === itemSelected && item.to !== "") {
        return {
          ...item,
          class: "active-parent-item",
        };
      }
      return {
        ...item,
        class: "",
      };
    });
  }
};

// Khi truy cập hoặc refresh lại trang thì phải có hiển thị được active tương ứng
// Tìm nếu thằng con được kích hoat thì thằng cha cũng kích hoat
// thằng nào không có thằng con thì thằng đó được kích hoat
items.value.map((item) => {
  if (item.items.length > 0) {
    item.items.map((i) => {
      if (i.to === route.name) {
        onClickMenuItemParent({
          originalEvent: null,
          itemActive: i,
        });
      }
    });
  } else {
    if (item.to === route.name) {
      onClickMenuItemParent({
        originalEvent: null,
        itemActive: item,
      });
    }
  }
});
</script>
<template>
  <div class="grid mt-3 w-10 mx-auto gap-3">
    <!-- Sidebar -->
    <div
      class="col max-w-20rem border-1 surface-border shadow-4 px-4"
      style="min-width: 10rem"
    >
      <!-- Avatar - name shop -->
      <div
        class="flex align-items-center column-gap-3 border-bottom-2 surface-border py-2"
      >
        <img
          src="/images/sp5.png"
          class="border-1 border-300"
          style="width: 3.571rem; height: 3.571rem; border-radius: 3.571rem"
        />

        <div class="flex flex-column">
          <span>NoriCHan SHop</span>
          <span class="text-xs text-500">Người theo dõi 10,5k</span>
        </div>
      </div>

      <!-- Menu -->
      <div class="layout-submenu-wrapper mt-3">
        <AccountSubmenu
          :items="items"
          class="layout-menu"
          :root="true"
          @onClickMenuItemParent="onClickMenuItemParent"
        />
      </div>
    </div>

    <!-- Right- content -->

    <div class="col border-1 surface-border shadow-4" style="min-height: 580px">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss"></style>
