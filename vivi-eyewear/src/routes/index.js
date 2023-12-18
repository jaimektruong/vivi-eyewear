import HomePage from "../pages/HomePage/HomePage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
export const routes = [
  {
    path: "/vivi-eyewear",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: HomePage,
  },
  {
    path: "/vivi-eyewear/type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/products",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
];
