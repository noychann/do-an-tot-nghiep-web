<script setup>
import { ref, onMounted, computed, reactive } from "vue";
import { STORE_CATEGORY, StoreApp } from "@/services/stores";
import { useRoute } from "vue-router";
import {
  formatNumberToLocale,
  appLocalStorage,
  EnumShowModalAuth,
} from "@/utils";

const STORE_PRODUCT_DETAIL = STORE_CATEGORY.StoreProduct();

const STORE_APP = StoreApp();

const route = useRoute();

const plant_id = route.params.id;
const user_id = appLocalStorage.value.userData.id;

const productQuantity = ref(1);

const seeMore = reactive({
  isFalse: false,
  message: "",
});

const onClickButtonSeeMore = () => {
  seeMore.isFalse = !seeMore.isFalse;
};

const images = computed(() => STORE_PRODUCT_DETAIL.onGetterPictureDetail.value);

const productDetail = computed(
  () => STORE_PRODUCT_DETAIL.onGetterProductDetail.value,
);

// const STORE_PRODUCT_DETAIL = STORE_CATEGORY.StoreProduct();

// const getProductDetail = () => {
//   STORE_PRODUCT_DETAIL.onActionGetProductDetail();
// };

// getProductDetail();

const onClickButtonAddToCart = () => {
  if (!appLocalStorage.value?.userData?.accessToken) {
    STORE_APP.onActionToggleModalAuth(EnumShowModalAuth.SIGN_IN);
  } else {
    STORE_PRODUCT_DETAIL.onActionUpdateCarts({
      plant_id: `${plant_id}`,
      user_id: `${user_id}`,
      image_url: productDetail.value.image_url,
      name: productDetail.value.name,
      price: productDetail.value.price,
      discount_price: productDetail.value.discount_price,
      quantity: `${productQuantity.value}`,
      type: "Kiểu 1",
    });
  }
};

onMounted(() => {
  STORE_PRODUCT_DETAIL.onActionGetProductDetail(plant_id);
  STORE_PRODUCT_DETAIL.onActionGetPictureDetail();
  console.log(images);
});
</script>

<template>
  <!-- START - Product Detail -->
  <div
    class="w-10 mx-auto p-2 mt-3 grid gap-2 border-1 surface-border shadow-4"
  >
    <!-- Ảnh sản phẩm -->
    <div class="col-3">
      <div class="w-full border-1 surface-border shadow-4 p-1">
        <img
          :src="productDetail.image_url"
          class="w-full h-18rem"
          style="object-fit: cover"
        />

        <!-- Những ảnh khác -->
        <div class="grid mx-auto w-full">
          <img src="/images/sp1.png" class="col-3" style="object-fit: cover" />
          <img src="/images/sp2.png" class="col-3" style="object-fit: cover" />
          <img src="/images/sp3.png" class="col-3" style="object-fit: cover" />
          <img src="/images/sp4.png" class="col-3" style="object-fit: cover" />
        </div>

        <!-- <Galleria
          :value="images"
          :responsiveOptions="responsiveOptions"
          :showThumbnails="true"
          :showIndicators="false"
          :showItemNavigatorsOnHover="true"
        >
          <template #item="slotProps">
            <img
              :src="slotProps.item.itemImageSrc"
              :alt="slotProps.item.alt"
              style="width: 100%"
            />
          </template>
          <template #thumbnail="slotProps">
            <img
              :src="slotProps.item.thumbnailImageSrc"
              :alt="slotProps.item.alt"
            />
          </template>
        </Galleria> -->
      </div>

      <!-- Chia sẻ và người like -->
      <div class="col-12 mt-4 text-center">
        <span class="block">Sản phẩm đc người yêu thích </span>
        <span class="block"
          ><i class="pi pi-heart text-red-500"></i> 15,11k người đã thích
        </span>
      </div>
    </div>

    <div class="col">
      <!-- Chủ đề sản phẩm -->
      <span class="text-2xl line-height-1">{{ productDetail.name }}</span>

      <!-- Đánh giá - Số người đánh giá - Số người mua -->
      <div class="flex align-items-center mt-3">
        <!-- sao đánh giá -->
        <span class="mr-2">5.0</span>
        <Rating :readonly="true" :stars="5" :cancel="false" />

        <!-- line -->
        <div class="bg-black-alpha-20 h-2rem mx-4" style="width: 2px"></div>

        <!-- Số người đánh giá -->
        <span>4.7k Đánh Giá</span>

        <!-- line -->
        <div class="bg-black-alpha-20 h-2rem mx-4" style="width: 2px"></div>

        <!-- Số người mua -->
        <span>11,8k Đã Bán</span>
      </div>

      <!-- Giá -->
      <div class="surface-100 p-3 flex align-items-center mt-3">
        <!-- Giá thiệt -->
        <span class="text-color-secondary line-through">{{
          formatNumberToLocale(productDetail.price)
        }}</span>
        <!-- Giá giảm còn -->
        <span class="text-green-700 text-4xl ml-2 font-bold">{{
          formatNumberToLocale(productDetail.discount_price)
        }}</span>
        <!-- Phần trăm giảm giá -->
        <span
          class="align-self-start bg-red-500 text-white p-1 text-xs ml-2 border-round font-bold"
          >38% GIẢM</span
        >
      </div>

      <!-- Kiểu -->
      <div class="button-custom grid mt-3">
        <span class="col-2">Kiểu:</span>

        <div class="col-8">
          <Button class="m-1">Kiểu 1</Button>
          <Button class="m-1">Kiểu 2dksaljdksa</Button>
          <Button class="m-1">Kiểu 3mdkfslfkds</Button>
          <Button class="m-1">Kiểu 4</Button>
          <Button class="m-1">Kiểu 4mfksdlfmkdsl</Button>
          <Button class="m-1">Kiểu 4</Button>
          <Button class="m-1">Kiểu 4</Button>
          <Button class="m-1">Kiểu 4</Button>
        </div>
      </div>

      <!-- Số lượng -->
      <div class="Quantity-custom grid mt-3">
        <span class="col-2">Số lượng:</span>

        <InputNumber
          class="ml-2"
          v-model="productQuantity"
          showButtons
          buttonLayout="horizontal"
          mode="decimal"
          :step="1"
          :min="1"
          decrementButtonClass="p-button-outlined border-round-left-2xl border-right-none border-300 bg-white"
          incrementButtonClass="p-button-outlined border-round-right-2xl mr-0 border-left-none border-300 bg-white"
          inputClass="w-4rem sm:w-5rem sm:w-6rem text-center font-medium border-300 text-black border-x-none"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
        />
      </div>

      <!-- Phí vẩn chuyển -->
      <div class="mt-3 grid">
        <span class="col-2">Vẩn chuyển:</span>
        <div class="col-8 text-500">
          <div>
            <span>Chuyển tới: &nbsp;</span>
            <span>Phường 7, Phú yên</span>
            <span
              class="text-green-600 font-medium ml-2 underline cursor-pointer"
              >Sửa vị trí</span
            >
          </div>
          <div>
            <span>Phí vẩn chuyển : &nbsp;</span>
            <span>52.000</span>
            <span class="text-xs vertical-align-top">đ</span>
          </div>
        </div>
      </div>

      <!-- Những điều kiện của quán -->
      <!-- <div class="mt-3 grid">
        <div class="col-2">
          <span>Shop đảm bảo:</span>
        </div>
        <div class="col-8">
          <span>3 ngày trả hàng / Hoàn tiền</span>
        </div>
      </div> -->

      <!-- Button thêm vào giỏ hàng -->
      <div class="mt-3">
        <Button
          @click="onClickButtonAddToCart"
          label="Thêm vào giỏ hàng"
          icon="pi pi-cart-plus"
          icon-class="text-2xl"
          class="font-bold mr-2 md:mr-5 white-space-nowrap px-4 md:px-5 py-3"
        />
      </div>
    </div>
  </div>
  <!-- END - Product Detail -->

  <!-- START - Thông tin quán -->
  <div
    class="w-10 mx-auto px-5 py-2 mt-3 grid border-1 surface-border shadow-4"
  >
    <div class="col-4">
      <div class="grid my-auto">
        <div class="col-3 p-0">
          <img
            src="/images/sp5.png"
            class="w-full border-circle border-1 p-0 border-300 cursor-pointer"
            alt=""
          />
        </div>

        <div class="col-8 text-center m-auto line-height-4">
          <span class="block">Quán bla bla bla</span>
          <span>45,5k Người theo dõi</span>
        </div>
      </div>
    </div>

    <div class="col-8 text-center my-auto">
      <div class="grid">
        <div class="col">
          <span class="block">Đánh giá quán</span>
          <span>4.9</span>
        </div>
        <div class="col">
          <span class="block">Số bán</span>
          <span>500.9k</span>
        </div>
        <div class="col">
          <span class="block">Liên hệ quán</span>
          <span>03 742 63933</span>
        </div>
      </div>
    </div>
  </div>
  <!-- END - Thông tin quán -->

  <!-- START - Mô tả sản phẩm -->
  <div
    class="w-10 mx-auto px-4 py-2 mt-3 grid gap-2 border-1 surface-border shadow-4"
  >
    <span class="uppercase text-2xl font-bold">Mô tả sản phẩm</span>
    <div
      :class="
        !seeMore.isFalse
          ? 'overflow-hidden text-overflow-ellipsis max-h-7rem'
          : ''
      "
    >
      <span>{{ productDetail.description }}</span>
    </div>

    <!-- Button see more -->
    <div class="w-full flex justify-content-center mt-2">
      <button
        @click="onClickButtonSeeMore"
        class="text-brand-color bg-white border-none flex align-items-center cursor-pointer"
        style="height: 3.071rem; font-size: 1.143rem"
      >
        <span
          v-if="
            !seeMore.isFalse
              ? (seeMore.message = 'Xem thêm')
              : (seeMore.message = 'Thu gọn')
          "
          class="font-semibold"
          style="font-size: 1.143rem"
          >{{ seeMore.message }}</span
        >
        <i
          :class="!seeMore.isFalse ? 'pi pi-angle-down' : 'pi pi-angle-up'"
          class="text-2xl"
          style="margin-left: 0.5rem; width: 1.125rem; font-weight: lighter"
        />
      </button>
    </div>
  </div>
  <!-- END - Mô tả sản phẩm -->

  <div
    class="w-10 mx-auto p-2 mt-3 grid gap-2 border-1 surface-border shadow-4 h-12rem"
  ></div>

  <div
    class="w-10 mx-auto p-2 mt-3 grid gap-2 border-1 surface-border shadow-4 h-12rem"
  ></div>

  <div
    class="w-10 mx-auto p-2 mt-3 grid gap-2 border-1 surface-border shadow-4 h-12rem mb-3"
  ></div>
</template>

<style scoped lang="scss">
.Quantity-custom {
  :deep(.p-inputtext) {
    &:enabled:focus {
      outline: none;
      outline-offset: 0;
      box-shadow: none !important;
    }
  }
}

.button-custom {
  :deep(.p-button) {
    color: #266129;
    background: #a5e1a7;
    border: 1px solid #4caf50;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color 0.2s, color 0.2s, border-color 0.2s,
      box-shadow 0.2s;
    border-radius: 3px;
    &:enabled:hover {
      background: #d1e9d2;
      color: #266129;
      border-color: #449e48;
    }
  }
}
</style>
