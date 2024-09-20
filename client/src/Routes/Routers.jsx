import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/category/products" element={<CategoryProducts />} />
      </Route>
    </Routes>
  );
};

export default Routers;
