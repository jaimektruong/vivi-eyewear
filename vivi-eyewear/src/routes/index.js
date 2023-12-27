import HomePage from "../pages/HomePage/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },

  {
    path: "/products/:name",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "/products",
    page: ProductsPage,
    isShowHeader: false,
  },
  {
    path: "/:type",
    page: ProductsPage,
    isShowHeader: false,
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
];
