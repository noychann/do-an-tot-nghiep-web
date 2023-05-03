<script setup>
import { StoreApp, STORE_HOME as STORE_HOME_PARENT } from "@/services/stores";
import { EnumShowModalAuth } from "@/utils/enums";
import { useRouter } from "vue-router";
import ProductComponent from "./components/ProductComponent.vue";
import { computed } from "vue";

const STORE_APP = StoreApp();
const STORE_HOME = STORE_HOME_PARENT.StoreHome();

const router = useRouter();

const onToggleModalAuth = (componentName, isVisible = true) => {
  STORE_APP.onActionToggleModalAuth(componentName, isVisible);
};

const onClickButtonNewsSeeMore = () => {
  router.push({ name: "News" });
};

const onGetProducts = () => {
  STORE_HOME.onActionGetListProduct();
};

onGetProducts();

const products = computed(() => STORE_HOME.onGetterListProduct.value);
</script>

<template>
  <!-- Banners -->
  <div class="banner-custom grid grid-nogutter mt-2" style="height: 600px">
    <div class="border-round">
      <img src="/banner/banner4.png" alt="" />
    </div>
    <!-- Content -->
    <div
      class="content-custom absolute z-1 flex flex-column px-7 md:col-6 sm:col-12 xs:pt-2 mt-8"
    >
      <span class="text-4xl font-bold">Perfect Plant</span>
      <span class="text-4xl font-bold">Sale In Lookbook</span>
      <!-- Line -->
      <div class="h-1rem w-5 bg-grey-200"></div>
      <!-- Description -->
      <div>
        Chả bít ghi j Lorem ipsum dolor sit amet consectetur. Adipiscing
        adipiscing fringilla ut parturient hac. vulputate semper donec neque
        risus. Ipsum justo consequat justo amet eget libero cursus neque. Mattis
        tellus vulputate.
      </div>
      <!-- button -->
      <div class="mt-3">
        <Button
          @click="onToggleModalAuth(EnumShowModalAuth.SIGN_IN)"
          label="Shop collection"
        ></Button>
      </div>
    </div>
  </div>

  <p class="text-center">sản phẩm</p>
  <ProductComponent
    v-for="product in products.data"
    :key="product.plant_id"
    :data="product"
    wrapperClass="wrapper-component"
    productClass="grid-items"
  />
  <div></div>

  <p class="text-center">Tin Tức</p>
  <div class="mt-3 flex justify-content-center">
    <Button @click="onClickButtonNewsSeeMore" label="xem them" />
  </div>
</template>
<style lang="scss" scoped>
.banner-custom {
  background-color: rgba(247, 249, 248, 1);
  img {
    pointer-events: none;
    position: absolute;
    height: 600px;
    right: 0;
    z-index: 0;
  }
}

@media screen and (min-width: 821px) {
  .content-custom {
    margin-left: 60px;
    top: 180px;
  }
}

:deep(.grid-items) {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
}

@media only screen and (max-width: 1280px) {
  :deep(.grid-items) {
    grid-template-columns: repeat(4, 1fr);
  }

  :deep(.wrapper-component),
  .wrapper-component {
    padding: 1rem;

    .title {
      font-size: 1.313rem;
    }

    .icon {
      width: 20px;
      height: 20px;
    }
  }
}

@media only screen and (max-width: 768px) {
  :deep(.grid-items) {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  :deep(.p-galleria) {
    &.p-galleria-indicator-onitem .p-galleria-indicators {
      background: transparent;
    }

    .p-galleria-indicators {
      padding: 0.3rem;

      .p-galleria-indicator {
        button {
          width: 0.5rem;
          height: 0.5rem;
        }

        &.p-highlight button {
          width: 1.5rem;
          height: 0.5rem;
        }
      }
    }
  }
}

@media only screen and (max-width: 568px) {
  :deep(.grid-items) {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
