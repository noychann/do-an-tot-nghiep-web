<script setup>
import AppTopbar from "./AppTopbar.vue";
// import AppFooter from "./AppFooter.vue";
import Toast from "primevue/toast";
</script>

<template>
  <div>
    <Toast />

    <AppTopbar />

    <div>
      <router-view></router-view>
    </div>

    <!-- <AppFooter /> -->
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arizonia&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

@keyframes xAxis {
  100% {
    transform: translateX(calc(50vw - 5px));
  }
}

@keyframes yAxis {
  100% {
    transform: translateY(calc(-50vh + 5px));
  }
}
</style>
