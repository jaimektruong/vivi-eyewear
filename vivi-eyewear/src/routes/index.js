import HomePage from "../pages/HomePage/HomePage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
//import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage"
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";

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
    path: "/vivi-eyewear/productsDetails",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "*",
    page: HomePage,
  },
  {
    path: "/vivi-eyewear/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/Delivery",
    page: DeliveryPage,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/sign-in",
    page: Login,
    isShowHeader: true,
  },
  {
    path: "/vivi-eyewear/sign-up",
    page: Register,
    isShowHeader: true,
  }
];
