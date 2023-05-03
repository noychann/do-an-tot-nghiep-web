import RoutesAccountUpdate from "@/views/account/account-update/services/routes";
import RoutesPasswordUpdate from "@/views/account/update-password/services/routes";
import RoutesOrder from "@/views/account/order/service/routes";

export default [
  {
    path: "tai-khoan",
    name: "Account",
    component: () => import("../Account.vue"),
    meta: {
      breadcrumbTitle: "Tài khoản",
      requireAuth: true,
    },
    children: [...RoutesAccountUpdate, ...RoutesPasswordUpdate, ...RoutesOrder],
  },
];
