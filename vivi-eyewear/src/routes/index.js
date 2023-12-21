import HomePage from "../pages/HomePage/HomePage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
<<<<<<< HEAD
import PaymentPage from "../pages/PaymentPage/PaymentPage"
=======
import ProductsPage from "../pages/ProductsPage/ProductsPage";

>>>>>>> 88192a605845e5cbaf60b174077a5cad863053f1
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
  {
    path: "/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
];
