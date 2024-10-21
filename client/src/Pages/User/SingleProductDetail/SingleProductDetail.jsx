import React from "react";
import { FaStar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

const SingleProductDetail = () => {
  return (
    <div className="w-[80%] flex gap-x-3 mx-auto py-6">
      <div className="w-[50%] flex gap-x-2">
        <div className="w-[75%]"></div>
        <div className="w-[25]"></div>
      </div>
      <div className="w-[50%]">
        <div className="text-gray text-[18px]">SKU 12314124124</div>
        <div className="py-1">
          <h2 className="text-[24px] font-bold">
            LED Monitor with High Quality in The World
          </h2>
        </div>
        <div className="py-3 flex justify-between">
          <div className="flex justify-between gap-x-2">
            <div className="flex items-center text-sm text-gray gap-x-2  pr-3 border-r-2 border-lightGray">
              <div className="text-primary font-semibold">4.0</div>
              <div className="flex items-center">
                {[1, 2, 3, 4].map((i) => (
                  <FaStar key={i} className={`text-sm ${"text-primary"}`} />
                ))}
                (105)
              </div>
            </div>
            <div className="flex items-center text-sm text-gray gap-x-2  pr-3 border-r-2 border-lightGray">
              <FaCheck className="text-[20px] " />
              <div className="text-black font-bold">4320</div>
              <div className="text-black font-semibold">Sold</div>
            </div>
            <div className="flex items-center text-sm text-gray gap-x-2  pr-3 border-r-2 border-lightGray">
              <IoEye className="text-[20px] text-gray" />
              <div className="text-black font-bold">0.8k</div>
              <div className="text-black font-bold">Viewed</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
