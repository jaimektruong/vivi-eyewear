import HomePage from "../pages/HomePage/HomePage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
export const routes = [
  {
    path: "/vivi-eyewear",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/type",
    page: TypeProductPage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/products",
    page: ProductsPage,
    isShowHeader: false,
  },
  {
    path: "/vivi-eyewear/products/:id",
    page: ProductsPage,
    isShowHeader: false,
  },
  {
    path: "*",
    page: HomePage,
  },
];
