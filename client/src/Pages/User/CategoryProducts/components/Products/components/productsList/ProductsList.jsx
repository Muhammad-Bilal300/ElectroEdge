import React, { useRef } from "react";
import Laptop from "../../../../../../../Assets/Laptop.jpg";
import Headphone from "../../../../../../../Assets/Headphone.jpg";
import Printer from "../../../../../../../Assets/Printer.jpg";
import Speaker from "../../../../../../../Assets/Speakers.jpg";
import Keyboard from "../../../../../../../Assets/Keyboard.jpg";

import { GiCheckMark } from "react-icons/gi";

import { FaStar } from "react-icons/fa6";

import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineFavorite } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ProductsList = () => {
  const containerRef = useRef(null); // Ref for the container
  const dummyData = [
    {
      image: Laptop,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: "Jumbo Laptop Series",
      discountedPrice: 700,
      actualPrice: 620,
      ratings: "5",
      addOns: ["Wireless Mouse", "Wireless Keyboard", "64 GB SSD", "32 GB USB"],
    },
    {
      image: Headphone,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "All in One Headphone",
      discountedPrice: 220,
      actualPrice: 280,
      ratings: "5",
      addOns: ["Echo Headset", "Wireless Keyboard", "64 GB SSD", "32 GB USB"],
    },
    {
      image: Keyboard,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Just Grab It",
      discountedPrice: 265,
      actualPrice: 340,
      ratings: "4",
      addOns: ["Wireless Mouse", "Wireless Keyboard", "64 GB SSD"],
    },
    {
      image: Speaker,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Speakers and Much More",
      discountedPrice: 420,
      actualPrice: 350,
      ratings: "5",
      addOns: ["Wireless Speaker", "Wireless Headset"],
    },

    {
      image: Printer,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Printers Collection",
      discountedPrice: 530,
      actualPrice: 470,
      ratings: "3",
      addOns: ["Wireless Printer", "laser Printer", "Color Printer"],
    },
    {
      image: Headphone,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "All in One Headphone",
      discountedPrice: 220,
      actualPrice: 280,
      ratings: "5",
      addOns: ["Echo Headset", "Wireless Keyboard", "64 GB SSD", "32 GB USB"],
    },
    {
      image: Keyboard,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Just Grab It",
      discountedPrice: 265,
      actualPrice: 340,
      ratings: "4",
      addOns: ["Wireless Mouse", "Wireless Keyboard", "64 GB SSD"],
    },
  ];
  return (
    <div ref={containerRef} className="flex flex-wrap gap-x-7 gap-y-7">
      {dummyData.map((item, index) => (
        <div
          key={index}
          className="w-[30%] border-[1px] shadow-lg shadow-gray border-lightGray rounded-md flex flex-col cursor-pointer"
        >
          <img
            className="h-[180px] w-[100%] rounded-t-md"
            src={item.image}
            alt={item.title}
          />
          <div className="p-3 flex-grow">
            <h2 className="text-lg font-bold truncate">{item.title}</h2>
            <h6 className="text-sm text-gray py-1">
              {item.description.slice(0, 80)}{" "}
              {item.description.length > 80 && "..."}
            </h6>
            <div className="flex justify-between items-center pt-1">
              <div className="flex gap-x-2 items-center">
                <span className="text-primary text-xl font-semibold">
                  ${item.discountedPrice}
                </span>
                <span className="text-gray text-md font-semibold line-through">
                  ${item.actualPrice}
                </span>
              </div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i <= item.ratings ? "text-primary" : "text-gray"
                    }`}
                  />
                ))}
              </div>
            </div>
            {/* <div className="px-4 pt-2">
            {item.addOns.slice(0, 3).map((addOn, index) => (
              <p
                key={index}
                className="py-1 text-xs flex items-center gap-x-3"
              >
                <GiCheckMark className="text-primary" />
                <span className="text-gray">{addOn}</span>
              </p>
            ))}
          </div> */}
          </div>
          <div className="p-3 border-t-[1px] border-lightGray flex justify-between items-center">
            <button className="h-[40px] w-[55%] px-3 border-2 bg-primary text-md text-white rounded-md font-semibold flex justify-center items-center gap-x-1">
              <HiShoppingCart className="text-white" />
              <span className="text-sm">Buy Now</span>
            </button>
            <button className="w-[18%] h-[38px] border-2 border-primary rounded-md flex justify-center items-center hover:bg-lightGray text-primary">
              <MdOutlineFavorite className="text-xl" />
            </button>
            <button className="w-[18%] h-[38px] border-2 border-primary rounded-md flex justify-center items-center  hover:bg-lightGray text-primary">
              <HiShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
