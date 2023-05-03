import { createRouter, createWebHistory } from "vue-router";

import App from "../App.vue";
import RoutesHome from "@/views/home/services/routes";
import RoutesAccount from "@/views/account/services/routes";
import RoutesCategory from "@/views/category/services/routes";
import RoutesNews from "@/views/news/services/routes";
import RoutesCart from "@/views/cart/services/routes";
import RoutesBill from "@/views/bill/service/routes";

const routes = [
  {
    path: "",
    name: "App",
    component: App,
    meta: {},
    children: [
      ...RoutesHome,
      ...RoutesAccount,
      ...RoutesCategory,
      ...RoutesNews,
      ...RoutesCart,
      ...RoutesBill,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
