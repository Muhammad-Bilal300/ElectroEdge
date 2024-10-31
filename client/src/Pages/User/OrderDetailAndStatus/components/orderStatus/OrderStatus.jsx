import React, { useState } from "react";
import { Steps } from "antd";
import "./OrderStatus.css"; // Import the custom CSS file

const OrderStatus = () => {
  const date = new Date().toLocaleString(); // Format the date to a readable string
  const [currentStep, setCurrentStep] = useState(1); // Change this to set the current step dynamically

  const steps = [
    {
      title: (
        <div className="w-full bg-gray-200 flex justify-between rounded">
          <span className="custom-step">Created</span>
          <span className="text-primary">{date}</span>
        </div>
      ),
      description: "Your order has been created successfully.",
    },
    {
      title: (
        <div className="w-full bg-gray-200 flex justify-between rounded">
          <span className="custom-step">Pending</span>
          <span className="text-primary">{date}</span>
        </div>
      ),
      description: "Your order is awaiting confirmation.",
    },
    {
      title: (
        <div className="w-full bg-gray-200 flex justify-between rounded">
          <span className="custom-step">In Progress</span>
          <span className="text-primary">{date}</span>
        </div>
      ),
      description: "Your order is being prepared.",
    },
    {
      title: (
        <div className="w-full bg-gray-200 flex justify-between rounded">
          <span className="custom-step">On the Way</span>
          <span className="text-primary">{date}</span>
        </div>
      ),
      description: "Your order is on its way to you.",
    },
    {
      title: (
        <div className="w-full bg-gray-200 flex justify-between rounded">
          <span className="custom-step">Dispatched</span>
          <span className="text-primary">{date}</span>
        </div>
      ),
      description: "Your order has been dispatched from the warehouse.",
    },
    {
      title: (
        <div className="w-full bg-gray-200 flex justify-between rounded">
          <span className="custom-step">Delivered</span>
          <span className="text-primary">{date}</span>
        </div>
      ),
      description: "Your order has been delivered successfully.",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:w-[55%] px-4 py-3 rounded-md">
      <Steps
        className="w-full"
        direction="vertical"
        current={currentStep}
        items={steps.map((step, index) => ({
          ...step,
          status:
            index < currentStep
              ? "finish"
              : index === currentStep
              ? "process"
              : "wait",
        }))}
      />
    </div>
  );
};

export default OrderStatus;
