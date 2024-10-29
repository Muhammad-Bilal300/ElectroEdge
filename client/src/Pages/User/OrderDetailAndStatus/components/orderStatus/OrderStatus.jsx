import React from "react";
import { Steps } from "antd";
import "./OrderStatus.css"; // Import the custom CSS file

const OrderStatus = () => {
  const description = "This is a description.";
  return (
    <div className="w-full flex flex-col lg:w-[55%] px-4 py-3 rounded-md ">
      <Steps
        direction="vertical"
        current={1}
        items={[
          {
            title: <span className="custom-step">Created</span>,
            description,
          },
          {
            title: <span className="custom-step">Pending</span>,
            description,
          },
          {
            title: <span className="custom-step">In Progress</span>,
            description,
          },
          {
            title: <span className="custom-step">On the Way</span>,
            description,
          },
          {
            title: <span className="custom-step">Dispatched</span>,
            description,
          },
          {
            title: <span className="custom-step">Delivered</span>,
            description,
          },
        ]}
      />
    </div>
  );
};

export default OrderStatus;
