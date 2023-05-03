<script setup>
import { reactive, ref } from "vue";
import { appLocalStorage, validationSchema } from "@/utils";
import InputValidation from "@/components/InputValidation.vue";
import * as Yup from "yup";
import { Form } from "vee-validate";

const schema = Yup.object({
  fullName: validationSchema.fullName,
});

const initialValue = ref({});
// Giá trị user ban đầu
const initVal = reactive({
  fullName: appLocalStorage.value.userData.fullName,
  avatar: appLocalStorage.value.userData.avatar,
  gender: appLocalStorage.value.userData.gender,
  dob: appLocalStorage.value.userData.dob,
  phone: appLocalStorage.value.userData.phone,
  address: appLocalStorage.value.userData.address,
});

initialValue.value = initVal.value;

const sex = ref("");
const OpenEditName = ref(true);

const onClickOpenEditName = () => {
  OpenEditName.value = false;
};

const sexOption = ref([{ name: "Nam" }, { name: "Nữ" }]);

const onUpdateShopInformation = async (value) => {
  console.log("Okela", value);
};

console.log(appLocalStorage.value);
</script>

<template>
  <Form
    @submit="onUpdateShopInformation"
    :validation-schema="schema"
    :initial-values="initialValue"
  >
    <div class="py-5">
      <div class="">
        <div
          class="flex w-min align-items-center text-center gap-5"
          style="margin-left: 8.5rem"
        >
          <!-- Picture -->
          <img
            src="/images/sp5.png"
            class="border-circle border-2 border-300"
            style="width: 8.5rem"
            alt=""
          />

          <div class="grid row-gap-2">
            <Button
              label="Xem ảnh"
              severity="success"
              outlined
              class="h-2rem w-8rem font-medium"
            ></Button>
            <Button
              label="Thay ảnh"
              severity="success"
              outlined
              class="h-2rem w-8rem font-medium"
            ></Button>
          </div>
        </div>
      </div>

      <div class="grid w-9 mx-auto column-gap-5 mt-3 p-3">
        <!-- Name - GT - Birthday -->
        <div class="col">
          <!-- Name -->
          <div>
            <label for="sex">Họ tên</label>
            <!-- <span
              autofocus
              class="w-full p-input-icon-right mt-1"
              @click="onClickOpenEditName"
            >
              <i class="pi pi-pencil cursor-pointer" />
              <InputText
                :disabled="OpenEditName"
                v-model="fullName"
                class="text-center font-medium cursor-pointer w-full"
              />
            </span> -->

            <!-- name distributor input  -->
            <InputValidation
              name="fullName"
              :inputProps="{
                maxlength: 200,
                placeholder: '',
                autofocus: false,
              }"
              input-type="text"
              inputClass="input w-full"
            />
            <small class="text-color-secondary"
              >Lưu ý: Sau khi đổi tên thì ko được đổi nữa 60 ngày.</small
            >
          </div>

          <!-- Giới tính -->
          <div class="flex flex-column gap-1 mt-3">
            <label for="sex">Giới tính</label>
            <Dropdown
              v-model="sex"
              :options="sexOption"
              optionLabel="name"
              class="text-center"
            />
          </div>

          <!-- Ngày sinh -->
          <div class="flex flex-column gap-1 mt-3">
            <label for="username">Ngày sinh</label>
            <Calendar
              showIcon
              inputId="birth_date"
              class="w-full text-center"
            />
          </div>
        </div>

        <!-- Số điện thoại - email - đỉa chỉ -->
        <div class="col">
          <!-- Số điện thoại -->
          <div class="flex flex-column gap-1">
            <label for="username">Số điện thoại</label>
            <InputText id="username" aria-describedby="username-help" />
          </div>

          <!-- Email -->
          <div class="flex flex-column gap-1 mt-3">
            <label for="username">Email</label>
            <InputText id="username" aria-describedby="username-help" />
          </div>

          <!-- Đỉa chỉ -->
          <div class="flex flex-column gap-1 mt-3">
            <label for="username">Đỉa chỉ</label>
            <Textarea
              autoResize
              rows="3"
              cols="30"
              style="min-height: 5.6rem"
            />
          </div>
        </div>
      </div>
    </div>

    <Button type="submit">abc</Button>
  </Form>
</template>
