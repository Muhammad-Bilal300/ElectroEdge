import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/User/Home/Home";
import CategoryProducts from "../Pages/User/CategoryProducts/CategoryProducts";
import Users from "../Pages/Admin/Users/Users";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route
          path={`/category/:name/products`}
          element={<CategoryProducts />}
        />
      </Route>

      <Route path="/admin" element={<Layout />}>
        <Route path="/admin/users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default Routers;
