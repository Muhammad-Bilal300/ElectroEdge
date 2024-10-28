import React, { useState } from "react";
import CartDetails from "./components/cartDetails/CartDetails";
import CartSummary from "./components/cartSummary/CartSummary";

const Cart = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-x-7">
        <CartDetails />
        <CartSummary />
      </div>
    </div>
  );
};

export default Cart;
