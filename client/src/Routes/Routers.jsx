import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/User/Home/Home";
import CategoryProducts from "../Pages/User/CategoryProducts/CategoryProducts";
import Users from "../Pages/Admin/Users/Users";
import Products from "../Pages/Admin/Products/Products";
import Orders from "../Pages/Admin/Orders/Orders";
import Purchases from "../Pages/Admin/Purchases/Purchases";
import Sales from "../Pages/Admin/Sales/Sales";
import Reports from "../Pages/Admin/Reports/Reports";
import Categories from "../Pages/Admin/Categories/Categories";
import Brands from "../Pages/Admin/Brands/Brands";
import Vendors from "../Pages/Admin/Vendors/Vendors";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import SingleProductDetail from "../Pages/User/SingleProductDetail/SingleProductDetail";
import Cart from "../Pages/User/Cart/Cart";
import Checkout from "../Pages/User/Checkout/Checkout";
import OrderDetailAndStatus from "../Pages/User/OrderDetailAndStatus/OrderDetailAndStatus";
import Login from "../Pages/common/login/Login";
import SignUp from "../Pages/common/signup/SignUp";
import ForgotPassword from "../Pages/common/fogotPassword/ForgotPassword";
import ResetPassword from "../Pages/common/resetPassword/ResetPassword";
import VerifyOTP from "../Pages/common/verifyOTP/VerifyOTP";
import MyOrders from "../Pages/User/MyOrders/MyOrders";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/verify-otp" element={<VerifyOTP />} />

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:name/detail"
          element={<SingleProductDetail />}
        />
        <Route
          path={`/category/:name/products`}
          element={<CategoryProducts />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-detail" element={<OrderDetailAndStatus />} />
        <Route path="/my-orders" element={<MyOrders />} />
      </Route>

      <Route path="/admin" element={<Layout />}>
        {/* Redirect /admin to /admin/dashboard */}
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/customers" element={<Users />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/brands" element={<Brands />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/vendors" element={<Vendors />} />
        <Route path="/admin/purchases" element={<Purchases />} />
        <Route path="/admin/sales" element={<Sales />} />
        <Route path="/admin/reports" element={<Reports />} />
      </Route>
    </Routes>
  );
};

export default Routers;
