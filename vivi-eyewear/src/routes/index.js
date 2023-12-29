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

import AccountPage from "../pages/AccountPage/AccountPage";
import AdminBlog from "../pages/AdminBlogsManagement/AdminBlogs";
import AdminProductManagementPage from "../pages/AdminProductManagementPage/AdminProductManagementPage";
import { AdminDefaultLayout } from "../components/Layouts";
import { CustomerDefaultLayout } from "../components/Layouts";
import AdminManagementPage from "../pages/AdminAdminMangagementPage/AdminMangagement";
import CustomerManagementPage from "../pages/AdminCustomerManagementPage/AdminCustomerManagementPage";
import OrderManagementPage from "../pages/AdminOrderManagementPage/AdminOrderManagementPage";
import PromotionManagementPage from "../pages/AdminPromotionManagementPage/AdminPromotionManagement";
import AdminDashBoard from "../pages/AdminDashBoard/AdminDashBoard";

export const publicRoutes = [
  {
    path: "/",
    page: HomePage,
    layout: CustomerDefaultLayout,
  },

  {
    path: "/san-pham/:name",
    page: ProductDetailsPage,
    layout: CustomerDefaultLayout,
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
    path: "/check-out",
    page: Checkout,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/*",
    page: PageNotFound,
    layout: CustomerDefaultLayout,
  },
  {
    path: "/account",
    page: AccountPage,
    layout: CustomerDefaultLayout,
  },
];

export const privateRoutes = [
  {
    path: "/admin",
    page: AdminDashBoard,
    layout: AdminDefaultLayout,
  },
  {
    path: "/admin/quan-ly-blogs",
    page: AdminBlog,
    layout: AdminDefaultLayout,
  },

  {
    path: "/admin/quan-ly-san-pham",
    page: AdminProductManagementPage,
    layout: AdminDefaultLayout,
  },
  {
    path: "/admin/quan-ly-admin",
    page: AdminManagementPage,
    layout: AdminDefaultLayout,
  },
  {
    path: "/admin/quan-ly-promotion",
    page: PromotionManagementPage,
    layout: AdminDefaultLayout,
  },
];
