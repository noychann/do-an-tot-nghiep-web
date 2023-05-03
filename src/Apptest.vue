        <!-- Info -->
        <div class="mt-5 grid grid-nogutter col-fixed">
            <!-- Column 1 -->
            <div class="col">
              <span class="text-white text-lg font-bold"
                >CÔNG TY SỮA ĐẬU NÀNH VIỆT NAM</span
              >
  
              <div class="align-items-center flex mt-3">
                <img
                  src="/icons/icon_fb.png"
                  style="width: 1.5rem"
                  @click="onNewFeature()"
                />
  
                <img
                  src="/icons/icon_youtube.png"
                  style="width: 1.5rem"
                  class="ml-3"
                  @click="onNewFeature()"
                />
  
                <img
                  src="/icons/icon_tiktok.png"
                  style="width: 1.5rem"
                  class="ml-3"
                  @click="onNewFeature()"
                />
              </div>
  
              <div class="grid mt-3">
                <div class="col-7">
                  <img
                    src="/images/bo-cong-thuong-1.png"
                    class="object-fit-contain w-full"
                  />
                </div>
  
                <div class="col-7">
                  <img
                    src="/images/bo-cong-thuong-2.png"
                    class="object-fit-contain w-full"
                  />
                </div>
              </div>
            </div>
  
            <!-- Column 2 -->
            <div class="col">
              <span class="text-white text-lg font-bold">THÔNG TIN LIÊN HỆ</span>
  
              <div class="mt-3">
                <div
                  v-for="item in contactInfo"
                  :key="item.id"
                  class="align-items-center flex"
                >
                  <img :src="item.icon" class="w-1rem" />
  
                  <span
                    class="text-sm text-white col cursor-pointer"
                    @click="onNewFeature()"
                  >
                    {{ item.content }}
                  </span>
                </div>
              </div>
            </div>
  
            <!-- Column 3 -->
            <div class="col">
              <span class="text-white text-lg font-bold">HỖ TRỢ KHÁCH HÀNG</span>
  
              <div class="grid mt-3">
                <span
                  v-for="item in customerSupport"
                  :key="item.id"
                  class="text-sm text-white col-12 cursor-pointer"
                  @click="onNewFeature()"
                >
                  {{ item.content }}
                </span>
              </div>
            </div>
  
            <!-- Column 4 -->
            <div class="col">
              <span class="text-white text-lg font-bold"
                >TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</span
              >
  
              <div class="grid mt-3">
                <div class="col">
                  <img
                    src="/images/download-google-play.png"
                    class="w-full object-fit-contain"
                    @click="onNewFeature()"
                  />
                </div>
  
                <div class="col pl-0">
                  <img
                    src="/images/download-app-store.png"
                    class="w-full object-fit-contain"
                    @click="onNewFeature()"
                  />
                </div>
              </div>
            </div>
  
            <!-- Column 5 -->
            <div class="col">
              <span class="text-white text-lg font-bold"
                >PHƯƠNG THỨC THANH TOÁN</span
              >
  
              <!-- Row 1 -->
              <div class="grid align-items-center mt-3">
                <div class="col">
                  <img
                    src="/images/logo-visa.png"
                    class="w-full"
                    @click="onNewFeature()"
                  />
                </div>
  
                <div class="col pl-0">
                  <img
                    src="/images/logo-master-card.png"
                    class="w-full"
                    @click="onNewFeature()"
                  />
                </div>
  
                <div class="col pl-0">
                  <img
                    src="/images/logo-atm.png"
                    class="w-full"
                    @click="onNewFeature()"
                  />
                </div>
              </div>
  
              <!-- Row 2 -->
              <div class="grid align-items-center">
                <div class="col">
                  <img
                    src="/images/logo-vnpay.png"
                    class="w-full"
                    @click="onNewFeature()"
                  />
                </div>
  
                <div class="col pl-0">
                  <img
                    src="/images/logo-zalo-pay.png"
                    class="w-full"
                    @click="onNewFeature()"
                  />
                </div>
  
                <div class="col pl-0">
                  <img
                    src="/images/logo-momo.png"
                    class="w-full"
                    @click="onNewFeature()"
                  />
                </div>
              </div>
            </div>
          </div>