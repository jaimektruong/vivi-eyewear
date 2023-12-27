import HomePage from "../pages/HomePage/HomePage";

import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

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
    path: "/ve-chung-toi",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
    path: "/blogs",
    page: BlogsPage,
    isShowHeader: true,
  },
  {
    path: "/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
  {
    path: "/*",
    page: PageNotFound,
    isShowHeader: true,
  },
];
