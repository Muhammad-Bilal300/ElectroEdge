import React from "react";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const cartItems = [
    {
      items: 2,
      name: "LED monitor with High quality in the world",
      price: 976.76,
    },
    {
      items: 1,
      name: "Majic Pen for IPad",
      price: 437.76,
    },
    {
      items: 3,
      name: "Hi LED Mega Screen Boost",
      price: 1230.76,
    },
  ];
  return (
    <div className="w-full flex flex-col lg:w-[35%] px-4 py-5 rounded-md border-[1px] border-gray">
      <h5 className="font-bold text-[14px]">MY ORDER</h5>
      <div className="py-6 border-b-2 border-lightGray flex flex-col gap-y-4">
        {cartItems.map((item, index) => {
          return (
            <div className="flex justify-between ">
              <h5 className="text-[15px] font-semibold ">{item.items}x</h5>
              <h6 className="text-[15px] text-gray w-[65%]">{item.name}</h6>
              <h5 className="text-[16px] font-semibold ">${item.price}</h5>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-2 py-4 border-b-2 border-lightGray">
        <div className="flex justify-between">
          <h5 className="text-[15px] font-semibold text-gray">Subtotal</h5>
          <h5 className="text-[16px] font-semibold ">$1976.98</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-[15px] font-semibold text-gray">
            Shipping Charges
          </h5>
          <h5 className="text-[16px] font-semibold ">$100.98</h5>
        </div>
        <div className="flex justify-between">
          <h5 className="text-[15px] font-semibold text-gray">Tax</h5>
          <h5 className="text-[16px] font-semibold ">$25.98</h5>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 py-4 border-b-2 border-lightGray">
        <div className="flex justify-between">
          <h5 className="text-[16px] font-semibold">Order Total</h5>
          <h5 className="text-[20px] font-semibold text-primary">$1976.98</h5>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 py-4 border-b-2 border-lightGray">
        <div className="flex flex-col gap-y-4">
          <h5 className="text-[18px] font-semibold">Payment</h5>
          <div className="flex items-center gap-x-4">
            <input
              className="rounded-sm cursor-pointer w-[16px] h-[15px]"
              type="checkbox"
            />
            <h4 className="text-[16px] font-semibold m-0 p-0">
              Cash On Delivery
            </h4>
          </div>
          <div className="flex items-center gap-x-4">
            <input
              className="rounded-sm cursor-pointer w-[16px] h-[15px]"
              type="checkbox"
            />
            <h4 className="text-[16px] font-semibold m-0 p-0">Online</h4>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          navigate("/order-detail");
        }}
        className="w-full bg-primary text-white rounded-md font-semibold text-sm h-[40px] flex justify-center items-center mt-6"
      >
        PLACE ORDER
      </button>
    </div>
  );
};

export default PlaceOrder;