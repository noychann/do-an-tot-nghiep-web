export default [
  {
    path: "FAQs",
    name: "FAQs",
    children: [
      {
        path: "",
        name: "FAQsList",
        component: () => import("../FAQs.vue"),
      },
    ],
  },
];
