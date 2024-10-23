import React, { useRef } from "react";
import Laptop from "../../../../../Assets/Laptop.jpg";
import Headphone from "../../../../../Assets/Headphone.jpg";
import Printer from "../../../../../Assets/Printer.jpg";
import Speaker from "../../../../../Assets/Speakers.jpg";
import Keyboard from "../../../../../Assets/Keyboard.jpg";

import { GiCheckMark } from "react-icons/gi";

import { FaStar } from "react-icons/fa6";

import { HiShoppingCart } from "react-icons/hi";
import { MdOutlineFavorite } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const RelatedProducts = () => {
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

  const containerRef = useRef(null); // Ref for the container

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300, // Adjust the scroll amount as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full mx-auto pt-20">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-2xl">Related Products</h3>
          <h6 className="py-1 flex text-xs font-semibold">
            <span className="text-gray">Showing 7 of 32 results</span>
            <span className="text-primary px-2 cursor-pointer hover:underline">
              View more
            </span>
          </h6>
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={scrollLeft}
            className="w-[30px] h-[30px] rounded-full border-[1px] border-black flex justify-center items-center"
          >
            <MdKeyboardArrowLeft className="text-3xl text-gray" />
          </button>
          <button
            onClick={scrollRight}
            className="w-[30px] h-[30px] rounded-full border-[1px] border-black flex justify-center items-center"
          >
            <MdKeyboardArrowRight className="text-3xl text-gray" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="py-6 flex gap-x-7 overflow-x-auto scrollbar-hide px-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {dummyData.map((item, index) => (
          <div
            key={index}
            className="2xl::min-w-[20%] xl:min-w-[24%] sm:min-w-[35%]  min-w-[80%] shadow-lg shadow-gray bg-white rounded-md flex flex-col cursor-pointer "
          >
            <div className="relative">
              <img
                className="h-[180px] w-full rounded-t-md"
                src={item.image}
                alt={item.title}
              />
              <div className="pt-3 px-3 border-t border-lightGray flex justify-end items-center gap-x-3 absolute top-0 right-0">
                <button className="min-w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center text-white">
                  <MdOutlineFavorite className="text-xl" />
                </button>
                <button className="min-w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center text-white">
                  <HiShoppingCart className="text-xl" />
                </button>
              </div>
            </div>

            <div className="p-3 flex-grow">
              <h2 className="text-lg font-bold truncate">{item.title}</h2>
              <h6 className="text-sm text-gray py-1">
                {item.description.slice(0, 80)}{" "}
                {item.description.length > 80 && "..."}
              </h6>
              <div className="flex justify-between items-center">
                <div className="flex gap-x-2 items-center">
                  <span className="text-primary text-lg font-semibold">
                    ${item.discountedPrice}
                  </span>
                  <span className="text-gray text-sm font-semibold line-through">
                    ${item.actualPrice}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <FaStar
                      key={i}
                      className={`text-sm ${
                        i <= item.ratings ? "text-primary" : "text-gray"
                      }`}
                    />
                  ))}
                  (10)
                </div>
              </div>
              <h6 className="pt-3 flex text-sm font-semibold justify-center">
                <span className="text-primary">140</span>
                <span className="text-gray px-1">units sold out</span>
              </h6>

              <div className="w-full py-2">
                <div className="flex justify-center py-1 text-sm text-primary">
                  45 left
                </div>
                <div className="w-full rounded-full h-2.5 bg-lightGray">
                  <div className="bg-primary h-2.5 rounded-full w-[45%]"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
