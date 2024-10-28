import React from "react";

import { MdOutlinePayment } from "react-icons/md";
// import { MdOutlineArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CartSummary = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col gap-y-6 lg:w-[28%]">
      <div className="h-[50px] px-4 rounded-md bg-orange-100 border-2 border-primary flex justify-between">
        <div className="flex gap-x-4 items-center">
          <MdOutlinePayment className="text-[20px] text-primary" />
          <h5 className="text-[14px] text-primary font-semibold">
            I have Promo code
          </h5>
        </div>
      </div>
      <div className="py-6 px-4 rounded-md bg-white border-[1px] border-lightGray shadow-lg shadow-gray">
        <h5 className="text-[16px] text-black font-bold">Shopping Summary</h5>
        <div className="flex justify-between mt-6">
          <h5 className="text-[14px] text-black font-bold">Total</h5>
          <h5 className="text-[16px] text-primary font-bold">$1296.00</h5>
        </div>
        <button
          onClick={() => {
            navigate("/checkout");
          }}
          className="w-full bg-primary text-white rounded-md font-semibold text-sm h-[40px] flex justify-center items-center mt-6"
        >
          CHECKOUT
        </button>
        <h5
          onClick={() => {
            navigate("/");
          }}
          className="w-full text-primary font-semibold text-sm text-center mt-4 cursor-pointer"
        >
          Back to Shopping
        </h5>
      </div>
    </div>
  );
};

export default CartSummary;
