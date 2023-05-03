export default [
  {
    path: "don-hang",
    name: "Order",
    meta: {
      breadcrumbTitle: "Quản lý đơn hàng",
    },
    component: () => import("../OrderList.vue"),
  },
];
