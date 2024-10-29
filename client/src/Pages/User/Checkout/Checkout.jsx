import React from "react";
import ShippingDetails from "./components/shippingDetails/ShippingDetails";
import PlaceOrder from "./components/placeOrder/PlaceOrder";
import Services from "../components/services/Services";
import RelatedProducts from "../components/relatedProducts/RelatedProducts";

const Checkout = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-x-10">
        <ShippingDetails />
        <PlaceOrder />
      </div>
      <Services />
      <RelatedProducts />
    </div>
  );
};

export default Checkout;
