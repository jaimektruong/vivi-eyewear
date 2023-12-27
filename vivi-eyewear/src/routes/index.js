import HomePage from "../pages/HomePage/HomePage";
<<<<<<< HEAD
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
=======
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
//import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
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
<<<<<<< HEAD
=======
    path: "*",
    page: HomePage,
  },
  {
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
    path: "/vivi-eyewear/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
<<<<<<< HEAD
=======
    path: "/vivi-eyewear/about-us",
    page: AboutUsPage,
    isShowHeader: true,
  },
  {
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
    path: "/vivi-eyewear/payment",
    page: PaymentPage,
    isShowHeader: true,
  },
<<<<<<< HEAD
=======
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
>>>>>>> aa2e1cbcabbc33c9303945eda500058cf0e1769f
];
