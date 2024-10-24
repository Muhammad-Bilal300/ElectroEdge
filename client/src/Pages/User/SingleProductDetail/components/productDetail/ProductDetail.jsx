import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";

const ProductDetail = () => {
  const screenSizes = ["14-Inch", "24-Inch", "32-Inch", "60-Inch"];
  const [screenSize, setScreenSize] = useState("");
  return (
    <div className="lg:w-1/2">
      <div className="text-gray text-[16px] lg:text-[18px]">
        SKU 12314124124
      </div>
      <div className="py-1">
        <h2 className="text-[20px] lg:text-[24px] font-bold">
          LED Monitor with High Quality in The World
        </h2>
      </div>
      <div className="py-3 flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between gap-x-2">
          <div className="flex items-center text-sm text-gray gap-x-2 pr-3 border-r-2 border-lightGray">
            <div className="text-primary font-semibold">4.0</div>
            <div className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <FaStar key={i} className={`text-sm ${"text-primary"}`} />
              ))}
              (105)
            </div>
          </div>
          <div className="flex items-center text-sm text-gray gap-x-2 pr-3 border-r-2 border-lightGray">
            <FaCheck className="text-[20px]" />
            <div className="text-black font-bold">4320</div>
            <div className="text-black font-semibold">Sold</div>
          </div>
          <div className="flex items-center text-sm text-gray gap-x-2 pr-3 border-r-2 border-lightGray">
            <IoEye className="text-[20px] text-gray" />
            <div className="text-black font-bold">0.8k</div>
            <div className="text-black font-bold">Viewed</div>
          </div>
        </div>
        <div className="flex items-center gap-x-2 text-sm text-primary cursor-pointer mt-2 lg:mt-0">
          <MdFavorite className="text-[20px] text-gray" />
          <div className="font-bold">Add to wishlist</div>
        </div>
      </div>
      <div className="py-6 flex gap-x-3 items-center border-b-2 border-lightGray">
        <h1 className="text-[28px] lg:text-[32px] text-primary font-bold">
          $976.33
        </h1>
        <h5 className="text-[14px] lg:text-[16px] text-gray font-semibold line-through">
          $1020.99
        </h5>
        <div className="px-3 py-0 bg-green-600 rounded-md text-white">20%</div>
      </div>
      <div className="py-3 text-[12px] lg:text-[14px] text-black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque,
          quisquam quo a impedit, assumenda nisi doloremque voluptates dolore
          vel enim nostrum explicabo cumque.
        </p>
        <ul className="py-3">
          <li>- Direct Full Array</li>
          <li>- Direct Full Array</li>
          <li>- Direct Full Array</li>
          <li>- Direct Full Array</li>
        </ul>
      </div>
      <div className="py-2 flex justify-between items-center">
        <h4 className="text-[14px] lg:text-[16px] font-bold text-black">
          Screen Size
        </h4>
        <div className="flex gap-x-3 max-w-[75%] overflow-x-auto scrollbar-hide">
          {screenSizes.map((size) => (
            <div
              key={size}
              onClick={() => {
                setScreenSize(size);
              }}
              className={`py-2 text-center min-w-[80px] lg:min-w-[100px] font-semibold ${
                screenSize === size
                  ? "border-[1px] text-primary bg-orange-100"
                  : "border-[1px] border-lightGray text-gray"
              } rounded-md cursor-pointer`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
      <div className="py-6 flex flex-col lg:flex-row justify-between">
        <div className="flex justify-between items-center rounded-md border-2 border-lightGray px-3 w-full lg:w-[160px] h-[45px]">
          <div className="text-gray font-bold cursor-pointer">
            <GrFormSubtract className="text-[20px]" />
          </div>
          <div className="text-primary font-bold text-[18px]">1</div>
          <div className="text-gray font-bold cursor-pointer">
            <IoMdAdd className="text-[20px]" />
          </div>
        </div>
        <div className="flex gap-x-3 mt-4 lg:mt-0">
          <button className=" w-[50%]  lg:w-[auto] flex justify-center items-center rounded-md border-2 border-primary px-10 h-[45px] text-primary hover:text-white hover:bg-primary">
            <div className="font-bold text-[14px]">BUY</div>
          </button>
          <button className=" w-[50%]  lg:w-[auto]  flex justify-center items-center rounded-md border-2 border-primary bg-primary text-white px-10 h-[45px]">
            <div className="font-bold text-[14px]">ADD TO CART</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
