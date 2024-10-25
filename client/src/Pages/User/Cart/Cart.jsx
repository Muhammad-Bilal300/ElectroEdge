import React, { useState } from "react";

const Cart = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="w-full lg:w-[80%] mx-auto py-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row gap-x-4">
        <div className="w-full lg:w-[75%]">
          <div className="py-3 px-6 rounded-md bg-white border-2 border-lightGray flex justify-between">
            <div className="flex gap-x-4 items-center">
              <input
                className={`rounded-sm cursor-pointer w-[16px] h-[15px] ${
                  isChecked ? "bg-orange-500" : "bg-white"
                } border-2 border-lightGray`}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <h5 className="text-[16px] font-bold">Select All</h5>
            </div>
            <h5 className="text-[16px] font-bold text-red-600 cursor-pointer hover:underline">
              Remove
            </h5>
          </div>
        </div>
        <div className="w-full lg:w-[25%]"></div>
      </div>
    </div>
  );
};

export default Cart;
