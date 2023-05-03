<script setup>
import { ref } from "vue";
import BillSuccess from "./components/BillSuccess.vue";

const OrderSuccessfully = ref(false);

const onClickOrder = () => {
  OrderSuccessfully.value = true;
};
</script>

<template>
  <div
    class="w-10 mx-auto px-4 py-4 mt-3 gap-2 border-1 surface-border shadow-4 mb-3"
  >
    <span class="text-2xl font-bold">Hóa đơn</span>

    <!-- Order-list -->
    <div
      class="grid mt-2 bg-green-100 p-3 mt-3 border-1 border-300 border-round-md"
    >
      <!-- START- Order item -->
      <div class="col-12">
        <!-- PRODUCT 1 IN STORE 1 -->
        <div class="Cart-item-detail-custom bg-white mt-1 p-2 px-3">
          <!-- Thứ tự -->
          <div class="my-auto">
            <span>1</span>
          </div>

          <!-- Ảnh sản phẩm - quán -->
          <div class="p-2">
            <img src="/images/sp1.png" class="w-full border-round-md" />
            <span class="block">Cửa hàng: ABC123</span>
          </div>

          <!-- Detail sản phẩm -->
          <div class="p-2">
            <!-- Chủ đề sản phẩm -->
            <div class="">
              <span class="text-xl line-height-1"
                >[ GIẢM NGAY 50k ] Sen đá kim tuyến Đà Lạt size mini cây cảnh
                trang trí nhà cửa Lolita garden cửa Lolita garden</span
              >
            </div>

            <!-- Detail - Kiểu - giá - số lượng - Phí vẩn chuyển - Mã khuyến mãi - Tổng -->

            <div class="grid p-2 mt-2 surface-200">
              <!-- Kiểu - Giá - Số lượng -->
              <div class="detail-order-custom col-3">
                <!-- Kiểu -->
                <div class="">
                  <span class="font-bold">Kiểu :&nbsp;</span>
                  <span>123456485</span>
                </div>

                <!-- Giá -->
                <div class="">
                  <span class="font-bold">Giá : &nbsp;</span>
                  <span class="text-xs line-through text-500">600.000 đ</span>
                  <span class="ml-2 text-xl">300.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>

                <!-- Số lượng -->
                <div class="flex align-items-end">
                  <span class="p-0 m-0 font-bold">Số lượng :&nbsp;&nbsp; </span>
                  <span>2</span>
                </div>
              </div>

              <!-- Phí vẩn chuyển -->
              <div class="detail-order-custom col-2">
                <span class="font-bold block">Phí vẩn chuyển:</span>
                <div>
                  <span class="text-xl">325.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>
              </div>

              <!-- Mã khuyến mãi -->
              <div class="col-5">
                <span class="font-bold">Sử dụng mã giảm giá:</span>

                <div class="grid gap-1 p-2">
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm sốc 20%</span>
                  <span class="bg-red-200 text-xs p-1 pr-3"
                    >Miễn phí giao hàng</span
                  >

                  <!-- Button add pomotion -->
                  <div class="">
                    <Button
                      icon="pi pi-plus-circle"
                      class="p-button-success p-button-text p-button-sm"
                      style="height: 1.8rem"
                    ></Button>
                  </div>
                </div>
              </div>

              <!-- Tổng -->
              <div class="detail-order-custom col-2 text-center line-height-1">
                <span class="font-bold">Tổng:</span>

                <span class="line-through text-xs">1.000.000 đ</span>

                <span class="text-2xl">600.000 đ</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUCT 2 IN STORE 1 -->
        <div class="Cart-item-detail-custom bg-white mt-1 p-2 px-3">
          <!-- Thứ tự -->
          <div class="my-auto">
            <span>1</span>
          </div>

          <!-- Ảnh sản phẩm - quán -->
          <div class="p-2">
            <img src="/images/sp2.png" class="w-full border-round-md" />
            <span class="block">Cửa hàng: ABC123</span>
          </div>

          <!-- Detail sản phẩm -->
          <div class="p-2">
            <!-- Chủ đề sản phẩm -->
            <div class="">
              <span class="text-xl line-height-1"
                >[ GIẢM NGAY 50k ] Sen đá kim tuyến Đà Lạt size mini cây cảnh
                trang trí nhà cửa Lolita garden cửa Lolita garden</span
              >
            </div>

            <!-- Detail - Kiểu - giá - số lượng - Phí vẩn chuyển - Mã khuyến mãi - Tổng -->

            <div class="grid p-2 mt-2 surface-200">
              <!-- Kiểu - Giá - Số lượng -->
              <div class="detail-order-custom col-3">
                <!-- Kiểu -->
                <div class="">
                  <span class="font-bold">Kiểu :&nbsp;</span>
                  <span>123456485</span>
                </div>

                <!-- Giá -->
                <div class="">
                  <span class="font-bold">Giá : &nbsp;</span>
                  <span class="text-xs line-through text-500">600.000 đ</span>
                  <span class="ml-2 text-xl">300.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>

                <!-- Số lượng -->
                <div class="flex align-items-end">
                  <span class="p-0 m-0 font-bold">Số lượng :&nbsp;&nbsp; </span>
                  <span>2</span>
                </div>
              </div>

              <!-- Phí vẩn chuyển -->
              <div class="detail-order-custom col-2">
                <span class="font-bold block">Phí vẩn chuyển:</span>
                <div>
                  <span class="text-xl">325.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>
              </div>

              <!-- Mã khuyến mãi -->
              <div class="col-5">
                <span class="font-bold">Sử dụng mã giảm giá:</span>

                <div class="grid gap-1 p-2">
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm sốc 20%</span>
                  <span class="bg-red-200 text-xs p-1 pr-3"
                    >Miễn phí giao hàng</span
                  >

                  <!-- Button add pomotion -->
                  <div class="">
                    <Button
                      icon="pi pi-plus-circle"
                      class="p-button-success p-button-text p-button-sm"
                      style="height: 1.8rem"
                    ></Button>
                  </div>
                </div>
              </div>

              <!-- Tổng -->
              <div class="detail-order-custom col-2 text-center line-height-1">
                <span class="font-bold">Tổng:</span>

                <span class="line-through text-xs">1.000.000 đ</span>

                <span class="text-2xl">600.000 đ</span>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUCT 3 IN STORE 1 -->
        <div class="Cart-item-detail-custom bg-white mt-1 p-2 px-3">
          <!-- Thứ tự -->
          <div class="my-auto">
            <span>1</span>
          </div>

          <!-- Ảnh sản phẩm - quán -->
          <div class="p-2">
            <img src="/images/sp4.png" class="w-full border-round-md" />
            <span class="block">Cửa hàng: ABC123</span>
          </div>

          <!-- Detail sản phẩm -->
          <div class="p-2">
            <!-- Chủ đề sản phẩm -->
            <div class="">
              <span class="text-xl line-height-1"
                >[ GIẢM NGAY 50k ] Sen đá kim tuyến Đà Lạt size mini cây cảnh
                trang trí nhà cửa Lolita garden cửa Lolita garden</span
              >
            </div>

            <!-- Detail - Kiểu - giá - số lượng - Phí vẩn chuyển - Mã khuyến mãi - Tổng -->

            <div class="grid p-2 mt-2 surface-200">
              <!-- Kiểu - Giá - Số lượng -->
              <div class="detail-order-custom col-3">
                <!-- Kiểu -->
                <div class="">
                  <span class="font-bold">Kiểu :&nbsp;</span>
                  <span>123456485</span>
                </div>

                <!-- Giá -->
                <div class="">
                  <span class="font-bold">Giá : &nbsp;</span>
                  <span class="text-xs line-through text-500">600.000 đ</span>
                  <span class="ml-2 text-xl">300.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>

                <!-- Số lượng -->
                <div class="flex align-items-end">
                  <span class="p-0 m-0 font-bold">Số lượng :&nbsp;&nbsp; </span>
                  <span>2</span>
                </div>
              </div>

              <!-- Phí vẩn chuyển -->
              <div class="detail-order-custom col-2">
                <span class="font-bold block">Phí vẩn chuyển:</span>
                <div>
                  <span class="text-xl">325.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>
              </div>

              <!-- Mã khuyến mãi -->
              <div class="col-5">
                <span class="font-bold">Sử dụng mã giảm giá:</span>

                <div class="grid gap-1 p-2">
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm 50k</span>
                  <span class="bg-red-200 text-xs p-1 pr-3">Giảm sốc 20%</span>
                  <span class="bg-red-200 text-xs p-1 pr-3"
                    >Miễn phí giao hàng</span
                  >

                  <!-- Button add pomotion -->
                  <div class="">
                    <Button
                      icon="pi pi-plus-circle"
                      class="p-button-success p-button-text p-button-sm"
                      style="height: 1.8rem"
                    ></Button>
                  </div>
                </div>
              </div>

              <!-- Tổng -->
              <div class="detail-order-custom col-2 text-center line-height-1">
                <span class="font-bold">Tổng:</span>

                <span class="line-through text-xs">1.000.000 đ</span>

                <span class="text-2xl">600.000 đ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END - Order item  -->

      <!-- Line -->
      <div class="bg-green-500 w-full my-3" style="height: 1px"></div>

      <div class="grid bg-white mt-1 p-3 px-3 m-2 w-full">
        <!-- Left -->
        <div class="col-4">
          <span class="font-bold"> Thông tin thanh toán:</span>

          <div class="grid-total-custom">
            <span>Tổng tiền gốc :</span>
            <span class="text-right"> 1.520.000 đ</span>
            <span>Tổng vẩn chuyển :</span>
            <span class="text-right"> 320.000 đ</span>
            <span>Tổng tiền được giảm :</span>
            <span class="text-right"> 1.520.000 đ</span>
            <span class="font-bold">Tổng tiền :</span>
            <span class="text-right"> 25.122.000 đ</span>
          </div>
        </div>

        <!-- Right -->
        <div class="col-7">
          <span class="font-bold ml-4"
            >Thông tin vẩn chuyển cho khách hàng: &nbsp;</span
          >
          <span class="text-green-600 cursor-pointer">Sửa thông tin</span>

          <div class="border-1 border-400 w-11 mt-2 ml-4 p-2 flex flex-column">
            <div>
              <span class="font-bold">Họ Tên: &nbsp;</span>
              <span>Nori fjfjía njdskn</span>
            </div>

            <div>
              <span class="font-bold">Số điện thoại: &nbsp;</span>
              <span>0374263933</span>
            </div>

            <div>
              <span class="font-bold">Đỉa chỉ: &nbsp;</span>
              <span>18, Trần Phú, P.7, Tuy Hòa, Phú yên</span>
            </div>
          </div>
        </div>

        <!-- Button thanh toan -->
        <div class="col-1">
          <Button
            @click="onClickOrder"
            class="w-full h-full"
            label="Thanh toán"
          ></Button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="OrderSuccessfully">
    <BillSuccess />
  </div>
</template>

<style lang="scss" scoped>
.Cart-item-detail-custom {
  display: grid;
  grid-template-columns: 2% 15% 83%;
}

.detail-order-custom {
  display: grid;
  grid-template-rows: 30px 30px 30px;
}

.grid-total-custom {
  display: grid;
  grid-template-columns: 60% 40%;
}
</style>
