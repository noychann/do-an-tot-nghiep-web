import RoutesPromotion from "@/views/category/promotion/services/routes";
import RoutesProduct from "@/views/category/product/services/routes";
import RoutesFAQs from "@/views/category/faqs/services/routes";

export default [
  {
    path: "danh-muc",
    name: "Category",
    meta: {
      breadcrumbTitle: "Danh mục",
    },
    children: [...RoutesProduct, ...RoutesPromotion, ...RoutesFAQs],
  },
];
