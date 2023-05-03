export default [
  {
    path: "thong-tin-tai-khoan",
    name: "AccountUpdate",
    meta: {
      breadcrumbTitle: "Thông tin tài khoản",
    },
    children: [
      {
        path: "",
        name: "AccountInfo",
        component: () => import("../AccountInfo.vue"),
      },
    ],
  },
];
