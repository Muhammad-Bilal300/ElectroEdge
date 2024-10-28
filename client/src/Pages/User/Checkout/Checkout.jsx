import React from "react";
import ShippingDetails from "./components/shippingDetails/ShippingDetails";

const Checkout = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-x-7">
        <ShippingDetails />
      </div>
    </div>
  );
};

export default Checkout;
