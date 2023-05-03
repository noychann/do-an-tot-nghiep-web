export default [
  {
    path: "gio-hang",
    name: "Cart",
    meta: {
      requireAuth: true,
      breadcrumbTitle: "Giỏ hàng",
    },
    component: () => import("../Cart.vue"),
  },
];
