import React, { useState } from "react";
import Headphone from "../../../../../Assets/Headphone.jpg";
import Printer from "../../../../../Assets/Printer.jpg";
import Speaker from "../../../../../Assets/Speakers.jpg";
import Keyboard from "../../../../../Assets/Keyboard.jpg";
import Laptop from "../../../../../Assets/Laptop.jpg";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const ProductImages = () => {
  const [image, setImage] = useState(Laptop);
  return (
    <div className="flex flex-col lg:w-1/2 gap-y-2">
      <div className="w-full h-[400px] bg-gray-200 flex justify-between lg:flex-row flex-col lg:mb-0 mb-10">
        <div className="lg:w-[80%] w-[100%]">
          <img className="lg:h-full h-[300px]" src={image} alt="" />
        </div>
        <div className="lg:w-[20%] w-[100%] flex lg:flex-col lg:gap-y-2 gap-x-2 flex-row lg:py-0 py-2 justify-center items-center ">
          <FaChevronUp className="text-[24px] text-primary lg:visible hidden lg:block cursor-pointer" />
          <FaChevronLeft className="text-[24px] text-primary lg:hidden block cursor-pointer" />
          {[Laptop, Printer, Keyboard, Speaker].map((img, index) => {
            return (
              <img
                onClick={() => {
                  setImage(img);
                }}
                className={`h-[70px] w-[70px] cursor-pointer ${
                  image == img ? "border-4 border-primary" : "border-0"
                }`}
                src={img}
                alt=""
              />
            );
          })}
          <FaChevronDown className="text-[24px] text-primary lg:visible hidden lg:block cursor-pointer" />
          <FaChevronRight className="text-[24px] text-primary lg:hidden block cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
