import React from "react";
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

const FlashSlae = () => {
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
      image: Speaker,
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Speakers and Much More",
      discountedPrice: 420,
      actualPrice: 350,
      ratings: "5",
      addOns: ["Wireless Speaker", "Wireless Headset"],
    },
  ];

  return (
    <div className="w-[80%] mx-auto pt-14">
      <div className="bg-primary p-9 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-3xl text-white">Flash Sale</h3>
          </div>
          <div className="flex gap-x-2">
            <button className="w-[30px] h-[30px] rounded-full  bg-white flex justify-center items-center">
              <MdKeyboardArrowLeft className="text-3xl text-primary  " />
            </button>
            <button className="w-[30px] h-[30px] rounded-full bg-white   flex justify-center items-center">
              <MdKeyboardArrowRight className="text-3xl text-primary  " />
            </button>
          </div>
        </div>

        <div className="py-5 flex items-end">
          <div className="w-[30%]">
            <p className="text-sm text-lightGray mb-5">
              Explicabo pariatur exercitationem sapiente porro nesciunt,
              doloremque eos.
            </p>
            <div className="bg-black p-3 flex justify-center items-center rounded-lg text-3xl text-white w-[90%]">
              05 : 22 : 19 : 54
            </div>
          </div>
          <div className="w-[70%]">
            <div className="flex justify-between gap-x-4 overflow-x-auto scrollbar-hide">
              {dummyData.map((item, index) => {
                return (
                  <div className="min-w-[48%] bg-white rounded-md flex justify-start flex-row cursor-pointer p-2 relative">
                    <img
                      className="h-[90px] w-[100px] rounded-md"
                      src={item.image}
                      alt=""
                    />

                    <div className="px-3 flex-grow relative">
                      <h2 className="text-md font-bold truncate">
                        {item.title.slice(0, 20)}
                        {item.title.length > 20 && "..."}
                      </h2>

                      <div className="flex justify-between items-center ">
                        <div className="flex gap-x-2 items-center">
                          <span className="text-primary text-md font-semibold">
                            ${item.discountedPrice}
                          </span>
                          <span className="text-gray text-sm font-semibold line-through">
                            ${item.actualPrice}
                          </span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i, index) => {
                            return (
                              <FaStar
                                key={index}
                                className={`text-xs ${
                                  i <= item.ratings
                                    ? "text-primary"
                                    : "text-gray"
                                }`}
                              />
                            );
                          })}
                        </div>
                      </div>

                      {/* Fixed bottom section */}
                      <div className="absolute bottom-0 left-0 w-full px-3 pb-1">
                        <div className="flex justify-end text-sm text-primary">
                          45 left
                        </div>
                        <div className="w-full rounded-full h-2.5 bg-lightGray">
                          <div className="bg-primary h-2.5 rounded-full w-[45%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="text-white text-sm font-semibold flex justify-end cursor-pointer">
          <span className="hover:underline ">View More</span>
        </div>
      </div>
    </div>
  );
};

export default FlashSlae;
