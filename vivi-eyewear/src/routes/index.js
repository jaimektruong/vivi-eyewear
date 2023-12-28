import HomePage from "../pages/HomePage/HomePage";
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage";
import PaymentPage from "../pages/PaymentPage/PaymentPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import DeliveryPage from "../pages/DeliveryPage/DeliveryPage";
import Register from "../pages/RegisterPage/Register";
import Checkout from "../pages/CheckoutPage/CheckoutPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import BlogsPage from "../pages/BlogsPage/BlogsPage";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import LoginPage from "../pages/LoginPage/Login";
import WarrantyPage from "../pages/WarrantyPage/WarrantyPage";
import AdminProductManagementPage from "../pages/AdminProductManagementPage/AdminProductManagementPage";
import { AdminDefaultLayout } from "../components/Layouts";
import { CustomerDefaultLayout } from "../components/Layouts";
export const publicRoutes = [
  {
    path: "/",
    page: HomePage,
    layout: CustomerDefaultLayout,
  },

  {
    path: "/san-pham/:name",
    page: ProductDetailsPage,
    layout: null,
  },
  {
    path: "/san-pham",
    page: ProductsPage,
    layout: null,
  },
  {
    path: "/:type",
    page: ProductsPage,
    layout: null,
  },
  {
    path: "/ve-chung-toi",
    page: AboutUsPage,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/blogs",
    page: BlogsPage,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/hinh-thuc-thanh-toan",
    page: PaymentPage,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/chinh-sach-giao-hang",
    page: DeliveryPage,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/chinh-sach-bao-hanh",
    page: WarrantyPage,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/sign-in",
    page: LoginPage,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/sign-up",
    page: Register,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/vivi-eyewear/Checkout",
    page: Checkout,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/*",
    page: PageNotFound,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/admin-quanly-sanpham",
    page: AdminProductManagementPage,
    layout: AdminDefaultLayout,
  },
];

export const privateRoutes = [{}];
