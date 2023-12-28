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
import AdminManagementPage from "../pages/AdminAdminMangagementPage/AdminMangagement";
import CustomerManagementPage from "../pages/AdminCustomerManagementPage/AdminCustomerManagementPage";
import OrderManagementPage from "../pages/AdminOrderManagementPage/AdminOrderManagementPage";

export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },

  {
    path: "/san-pham/:name",
    page: ProductDetailsPage,
    isShowHeader: true,
  },
  {
    path: "/san-pham",
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
    path: "/hinh-thuc-thanh-toan",
    page: PaymentPage,
    isShowHeader: true,
  },
  {
    path: "/chinh-sach-giao-hang",
    page: DeliveryPage,
    isShowHeader: true,
  },
  {
    path: "/chinh-sach-bao-hanh",
    page: WarrantyPage,
    isShowHeader: true,
  },
  {
    path: "/sign-in",
    page: LoginPage,
    isShowHeader: true,
  },
  {
    path: "/sign-up",
    page: Register,
    isShowHeader: true,
  },
  {

    path: "/Checkout",
    page: Checkout,
    isShowHeader: true,
  },
  {
    path: "/*",
    page: PageNotFound,
    isShowHeader: true,
  },
  {
    path: "/admin/adminmanagement",
    page: AdminManagementPage,
    isShowHeader: true,
  },
  {
    path: "/admin/customermanagement",
    page: CustomerManagementPage,
    isShowHeader: true,
  },
  {
    path: "/admin/ordermanagement",
    page: OrderManagementPage,
    isShowHeader: true,
  }

];
