export default [
  {
    path: "san-pham",
    name: "Product",
    meta: {
      breadcrumbTitle: "Danh sách sản phẩm",
    },
    children: [
      {
        path: "",
        name: "ProductList",
        component: () => import("../ProductList.vue"),
      },
      {
        path: ":id",
        name: "ProductDetail",
        component: () => import("../ProductDetail.vue"),
      },
    ],
  },
];
