import React from "react";

import OrderDetail from "./components/orderDetail/OrderDetail";
import OrderStatus from "./components/orderStatus/OrderStatus";

const OrderDetailAndStatus = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 px-4 lg:px-0">
      <h3 className="text-[22px] font-bold mb-6">Order Details</h3>
      <div className="flex flex-col lg:flex-row gap-x-12">
        <OrderDetail />
        <OrderStatus />
      </div>
    </div>
  );
};

export default OrderDetailAndStatus;
