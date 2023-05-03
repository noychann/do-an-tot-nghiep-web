import { useStorage } from "@vueuse/core";
import router from "@/services/router";
import { computed } from "vue";

export const appLocalStorage = useStorage(
  "AppLocalStorage",
  {
    userData: {
      accessToken: "",
      id: null,
      fullName: "",
      avatar: "",
      gender: "",
      dob: "",
      phone: "",
      address: "",
      description: "",
      social_links: "",
    },
  },
  localStorage,
  { mergeDefaults: true },
);

export const loginStatus = computed(
  () => appLocalStorage.value?.userData?.accessToken,
);

export const userData = computed(() => appLocalStorage.value?.userData);

export const onDeleteUserData = () => {
  appLocalStorage.value.userData = {};

  router.replace({
    name: "Home",
  });
};
