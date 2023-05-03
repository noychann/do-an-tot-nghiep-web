export default [
  {
    path: "khuyen-mai",
    name: "Promotion",
    meta: {
      breadcrumbTitle: "Chương trình khuyến mãi",
    },
    children: [
      {
        path: "",
        name: "PromotionList",
        component: () => import("../PromotionList.vue"),
      },
    ],
  },
];
