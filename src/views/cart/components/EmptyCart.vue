<script setup></script>

<template>
  <div class="">
    <div class="col-2 mx-auto pr-5 mt-5">
      <img src="/icons/cart.png" alt="Cart logo" class="w-full h-full" />
    </div>

    <div class="text-center mt-5">
      <p class="text-2xl">
        Giỏ hàng trống <br />
        Vui lòng chọn sản phẩm thêm vào giỏ hàng
      </p>
    </div>

    <div class="text-center mt-3">
      <RouterLink
        :to="{ name: 'ProductList' }"
        class="text-green-400 cursor-pointer"
        >Mua hàng ngay</RouterLink
      >
    </div>
  </div>
</template>
