import HomePage from "../pages/HomePage/HomePage";

import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";

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
    path: "/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
  {
    path: "/Delivery",
    page: DeliveryPage,
    isShowHeader: true,
  },
  {
    path: "/*",
    page: HomePage,
    isShowHeader: true,
  },
];
