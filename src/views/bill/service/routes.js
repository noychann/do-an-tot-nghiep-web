export default [
  {
    path: "Hoa-don",
    name: "Bill",
    meta: {
      breadcrumbTitle: "Hóa đơn",
      requireAuth: true,
    },
    children: [
      {
        path: "",
        name: "BillList",
        component: () => import("../Bill.vue"),
      },
    ],
  },
];
