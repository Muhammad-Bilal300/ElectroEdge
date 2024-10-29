import React, { useState } from "react";
import Laptop from "../../../../../Assets/Laptop.jpg";

import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdDelete, MdOutlineFavorite } from "react-icons/md";

const CartDetails = () => {
  const [isChecked, setIsChecked] = useState(false);
  const cartItems = [
    {
      image: Laptop,
      title: "LED monitor with High quality in the world",
      sku: "SKU 1234532146",
      price: 620,
      items: 3,
      isSelected: false,
      isFavorites: false,
    },
    {
      image: Laptop,
      title: "Majic Pen for IPad",
      sku: "SKU 1234532146",
      price: 470,
      items: 5,
      isSelected: false,
      isFavorites: false,
    },
    {
      image: Laptop,
      title: "Hi LED Mega Screen Boost",
      sku: "SKU 1234532146",
      price: 840,
      items: 2,
      isSelected: false,
      isFavorites: false,
    },
  ];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="w-full flex flex-col gap-y-6 lg:w-[73%]">
      <div className="py-3 px-4 rounded-md bg-white border-2 border-lightGray flex justify-between">
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
          REMOVE
        </h5>
      </div>
      <div className="flex flex-col gap-y-5">
        {cartItems.map((item, index) => {
          return (
            <div className="p-4 flex flex-row items-center gap-x-4 shadow-md border-[1px] border-lightGray shadow-gray  rounded-md">
              <input
                className={`rounded-sm cursor-pointer w-[16px] h-[15px] ${
                  isChecked ? "bg-orange-500" : "bg-white"
                } border-2 border-lightGray`}
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <div className="flex gap-x-3 w-full">
                <div>
                  <img
                    className="min-w-[110px] w-[110px] min-h-[110px] h-[110px] rounded-md"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center ">
                    <h2 className="text-[18px] font-bold truncate">
                      {item.title}
                    </h2>
                    <h2 className="text-[14px] text-gray">{item.sku}</h2>
                  </div>
                  <h4 className="text-primary text-[18px] font-bold">
                    ${item.price}
                  </h4>
                  <div className="flex justify-between items-center mt-3">
                    <div className="flex justify-between items-center rounded-md border-2 border-lightGray px-3 w-full lg:w-[140px] h-[40px] ">
                      <div className="text-gray font-bold cursor-pointer">
                        <GrFormSubtract className="text-[20px]" />
                      </div>
                      <div className="text-primary font-bold text-[18px]">
                        {item.items}
                      </div>
                      <div className="text-gray font-bold cursor-pointer">
                        <IoMdAdd className="text-[20px]" />
                      </div>
                    </div>
                    <div className="flex gap-x-3">
                      <button className="h-[40px] w-[40px] border-2 border-lightGray rounded-md flex justify-center items-center  hover:bg-lightGray text-red-500">
                        <MdDelete className="text-xl" />
                      </button>
                      <button className="h-[40px] w-[40px] border-2 border-primary rounded-md flex justify-center items-center hover:bg-lightGray text-primary">
                        <MdOutlineFavorite className="text-xl" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartDetails;
