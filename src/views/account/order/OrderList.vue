<script setup>
import { reactive } from "vue";

const data = reactive({
  tabViewOrder: [
    { index: 0, key: null, label: "Tất cả" },
    { index: 1, key: "CONFIRMATION", label: "Chờ xác nhận" },
    { index: 2, key: "PENDING", label: "Chờ duyệt" },
    { index: 3, key: "ACCEPTED", label: "Đã duyệt" },
    { index: 4, key: "RETURNED", label: "Đã trả" },
    { index: 5, key: "CANCEL", label: "Đã hủy" },
  ],
});
</script>

<template>
  <div class="mx-auto gap-2 mb-3">
    <div class="w-full">
      <TabMenu :model="data.tabViewOrder" />
    </div>

    <!-- Order-list -->
    <div
      class="grid mt-2 bg-green-100 mx-1 mt-3 border-1 border-300 border-round-md"
    >
      <!-- START- Order item -->

      <!-- STORE - DATE - STATUS -->
      <div class="col-12">
        <div class="flex bg-green-50 mt-1 px-2">
          <div class="col-10">
            <!-- Image store -->
            <div class="flex justify-content-between align-items-center">
              <div class="flex align-items-center">
                <img
                  src="/images/sp4.png"
                  class="border-1 border-300"
                  style="
                    width: 1.871rem;
                    height: 1.871rem;
                    border-radius: 3.571rem;
                  "
                />
                <span class="ml-2">NANI shop</span>
              </div>

              <!-- DATE -->
              <div class="">
                <span>Đặt ngày : 05/01/2023 8:50</span>
              </div>

              <!-- status -->

              <div
                class="w-7rem text-center"
                :class="['customer-badge', 'status-new']"
              >
                <p class="font-normal">Chờ duyệt</p>
              </div>
            </div>
          </div>

          <div class="col-2 flex justify-content-end align-items-center">
            <span class="text-green-500 underline cursor-pointer"
              >Xem chi tiết</span
            >
          </div>
        </div>

        <!-- PRODUCT 1 IN STORE 1 -->
        <div class="Cart-item-detail-custom bg-white mt-1 p-2 px-3">
          <!-- Thứ tự -->
          <div class="my-auto">
            <span>1</span>
          </div>

          <!-- Ảnh sản phẩm - quán -->
          <div class="p-2">
            <img src="/images/sp1.png" class="w-full border-round-md" />
          </div>

          <!-- Detail sản phẩm -->
          <div class="p-2">
            <!-- Chủ đề sản phẩm -->
            <div class="">
              <span class="line-height-1"
                >[ GIẢM NGAY 50k ] Sen đá kim tuyến Đà Lạt size mini cây cảnh
                trang trí nhà cửa Lolita garden cửa Lolita garden</span
              >
            </div>

            <!-- Detail - Kiểu - giá - số lượng - Phí vẩn chuyển - Mã khuyến mãi - Tổng -->

            <div class="grid p-1 mt-2 surface-200">
              <!-- Kiểu - Giá - Số lượng -->
              <div class="detail-order-custom col-3">
                <!-- Kiểu -->
                <div class="">
                  <span class="font-bold block text-xs">Kiểu:</span>
                  <span>1</span>
                </div>
              </div>

              <!-- Mã khuyến mãi -->
              <div class="col-3">
                <span class="font-bold block text-xs">Giá: </span>
                <div>
                  <span class="line-through text-xs block text-500"
                    >600.000 đ</span
                  >
                </div>
                <div>
                  <span class="">300.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>
              </div>

              <div class="col-3">
                <span class="p-0 m-0 font-bold text-xs block">Số lượng:</span>
                <span>x 2</span>
              </div>

              <!-- Tổng -->
              <div class="col-3 text-center">
                <span class="font-bold block text-xs">Tổng:</span>

                <div>
                  <span class="line-through text-xs block text-500"
                    >1.000.000 đ</span
                  >
                </div>

                <div>
                  <span class="font-bold">600.000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- PRODUCT 2 IN STORE 1 -->
        <div class="Cart-item-detail-custom bg-white mt-1 p-2 px-3">
          <!-- Thứ tự -->
          <div class="my-auto">
            <span>2</span>
          </div>

          <!-- Ảnh sản phẩm - quán -->
          <div class="p-2">
            <img src="/images/sp2.png" class="w-full border-round-md" />
          </div>

          <!-- Detail sản phẩm -->
          <div class="p-2">
            <!-- Chủ đề sản phẩm -->
            <div class="">
              <span class="line-height-1"
                >[ GIẢM NGAY 50k ] Sen đá kim tuyến Đà Lạt size mini
              </span>
            </div>

            <!-- Detail - Kiểu - giá - số lượng - Phí vẩn chuyển - Mã khuyến mãi - Tổng -->

            <div class="grid p-1 mt-2 surface-200">
              <!-- Kiểu - Giá - Số lượng -->
              <div class="detail-order-custom col-3">
                <!-- Kiểu -->
                <div class="">
                  <span class="font-bold block text-xs">Kiểu:</span>
                  <span>2</span>
                </div>
              </div>

              <!-- Mã khuyến mãi -->
              <div class="col-3">
                <span class="font-bold block text-xs">Giá: </span>
                <div>
                  <span class="line-through text-xs block text-500"
                    >600.000 đ</span
                  >
                </div>
                <div>
                  <span class="">300.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>
              </div>

              <div class="col-3">
                <span class="p-0 m-0 font-bold text-xs block">Số lượng:</span>
                <span>x 2</span>
              </div>

              <!-- Tổng -->
              <div class="col-3 text-center">
                <span class="font-bold block text-xs">Tổng:</span>

                <div>
                  <span class="line-through text-xs block text-500"
                    >1.000.000 đ</span
                  >
                </div>

                <div>
                  <span class="font-bold">600.000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END - Order item  -->

      <!-- Line -->
      <div class="bg-green-500 w-full my-2" style="height: 1px"></div>

      <div class="grid bg-white mt-1 p-3 px-3 m-2 w-full">
        <!-- Left -->
        <div class="col-4">
          <span class="font-bold"> Thông tin thanh toán:</span>

          <div class="grid-total-custom text-sm">
            <span>Tổng tiền gốc :</span>
            <span class="text-right"> 1.520.000 đ</span>
            <span>Tổng vẩn chuyển :</span>
            <span class="text-right"> 320.000 đ</span>
            <span>Tổng tiền được giảm :</span>
            <span class="text-right"> 1.520.000 đ</span>
            <span class="font-bold">Tổng tiền :</span>
            <span class="text-right font-bold"> 25.122.000 đ</span>
          </div>
        </div>

        <!-- Right -->
        <div class="col-8">
          <span class="font-bold ml-4"
            >Thông tin vận chuyển cho khách hàng: &nbsp;</span
          >

          <div
            class="border-1 border-400 w-11 mt-2 ml-4 p-2 flex flex-column text-sm"
          >
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
      </div>
    </div>

    <!-- Order-list -->
    <div
      class="grid mt-2 bg-green-100 mx-1 mt-3 border-1 border-300 border-round-md"
    >
      <!-- START- Order item -->

      <!-- STORE - DATE - STATUS -->
      <div class="col-12">
        <div class="flex bg-green-50 mt-1 px-2">
          <div class="col-10">
            <!-- Image store -->
            <div class="flex justify-content-between align-items-center">
              <div class="flex align-items-center">
                <img
                  src="/images/sp3.png"
                  class="border-1 border-300"
                  style="
                    width: 1.871rem;
                    height: 1.871rem;
                    border-radius: 3.571rem;
                  "
                />
                <span class="ml-2">LALA shop</span>
              </div>

              <!-- DATE -->
              <div class="">
                <span>Đặt ngày : 05/01/2023 8:50</span>
              </div>

              <!-- status -->

              <div
                class="w-7rem text-center"
                :class="['customer-badge', 'status-new']"
              >
                <p class="font-normal">Chờ duyệt</p>
              </div>
            </div>
          </div>

          <div class="col-2 flex justify-content-end align-items-center">
            <span class="text-green-500 underline cursor-pointer"
              >Xem chi tiết</span
            >
          </div>
        </div>

        <!-- PRODUCT 1 IN STORE 1 -->
        <div class="Cart-item-detail-custom bg-white mt-1 p-2 px-3">
          <!-- Thứ tự -->
          <div class="my-auto">
            <span>1</span>
          </div>

          <!-- Ảnh sản phẩm - quán -->
          <div class="p-2">
            <img src="/images/sp1.png" class="w-full border-round-md" />
          </div>

          <!-- Detail sản phẩm -->
          <div class="p-2">
            <!-- Chủ đề sản phẩm -->
            <div class="">
              <span class="line-height-1"
                >[ GIẢM NGAY 50k ] Sen đá kim tuyến Đà Lạt size mini cây cảnh
                trang trí nhà cửa Lolita garden cửa Lolita garden</span
              >
            </div>

            <!-- Detail - Kiểu - giá - số lượng - Phí vẩn chuyển - Mã khuyến mãi - Tổng -->

            <div class="grid p-1 mt-2 surface-200">
              <!-- Kiểu - Giá - Số lượng -->
              <div class="detail-order-custom col-3">
                <!-- Kiểu -->
                <div class="">
                  <span class="font-bold block text-xs">Kiểu:</span>
                  <span>1</span>
                </div>
              </div>

              <!-- Mã khuyến mãi -->
              <div class="col-3">
                <span class="font-bold block text-xs">Giá: </span>
                <div>
                  <span class="line-through text-xs block text-500"
                    >600.000 đ</span
                  >
                </div>
                <div>
                  <span class="">300.000</span>
                  <span class="text-xs">&nbsp;đ</span>
                </div>
              </div>

              <div class="col-3">
                <span class="p-0 m-0 font-bold text-xs block">Số lượng:</span>
                <span>x 2</span>
              </div>

              <!-- Tổng -->
              <div class="col-3 text-center">
                <span class="font-bold block text-xs">Tổng:</span>

                <div>
                  <span class="line-through text-xs block text-500"
                    >1.000.000 đ</span
                  >
                </div>

                <div>
                  <span class="font-bold">600.000 đ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- END - Order item  -->

      <!-- Line -->
      <div class="bg-green-500 w-full my-2" style="height: 1px"></div>

      <div class="grid bg-white mt-1 p-3 px-3 m-2 w-full">
        <!-- Left -->
        <div class="col-4">
          <span class="font-bold"> Thông tin thanh toán:</span>

          <div class="grid-total-custom text-sm">
            <span>Tổng tiền gốc :</span>
            <span class="text-right"> 1.520.000 đ</span>
            <span>Tổng vẩn chuyển :</span>
            <span class="text-right"> 320.000 đ</span>
            <span>Tổng tiền được giảm :</span>
            <span class="text-right"> 1.520.000 đ</span>
            <span class="font-bold">Tổng tiền :</span>
            <span class="text-right font-bold"> 25.122.000 đ</span>
          </div>
        </div>

        <!-- Right -->
        <div class="col-8">
          <span class="font-bold ml-4"
            >Thông tin vận chuyển cho khách hàng: &nbsp;</span
          >

          <div
            class="border-1 border-400 w-11 mt-2 ml-4 p-2 flex flex-column text-sm"
          >
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
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:deep(.p-tabmenu-nav) {
  justify-content: space-around;
}
:deep(.p-tabmenu .p-tabmenu-nav .p-tabmenuitem) {
  width: -webkit-fill-available;
}
:deep(.p-tabmenu-nav .p-menuitem-text) {
  margin: auto;
}
.Cart-item-detail-custom {
  display: grid;
  grid-template-columns: 2% 15% 83%;
}

.grid-total-custom {
  display: grid;
  grid-template-columns: 60% 40%;
}

.customer-badge {
  &.status-qualified {
    background: #e9faef;
    color: rgb(67, 228, 67);
    border-radius: 3px;
    border: 1px solid rgb(67, 228, 67);
  }

  &.status-unqualified {
    background: #fdecec;
    color: #f04444;
    border-radius: 3px;
    border: 1px solid #f04444;
  }

  &.status-new {
    background: #eff0fe;
    color: #6465f1;
    border-radius: 3px;
    border: 1px solid #6465f1;
  }
}
</style>
