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

const WeekyPopularProducts = () => {
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
      <div className="bg-lightGray p-9 rounded-lg">
        <div className="flex items-center gap-x-6">
          <div className="w-[25%]">
            <div className="flex justify-center text-center ">
              <h3 className="font-bold text-3xl text-black">Recommended</h3>
            </div>
            <p className="text-lg text-black mb-5 font-semibold pt-4 pb-2 text-center">
              Top 10 popular products of the week
            </p>
            {/*  */}
            <div className="flex gap-x-2 justify-center">
              <button className="w-[30px] h-[30px] rounded-full  bg-black flex justify-center items-center">
                <MdKeyboardArrowLeft className="text-3xl text-white  " />
              </button>
              <button className="w-[30px] h-[30px] rounded-full bg-black   flex justify-center items-center">
                <MdKeyboardArrowRight className="text-3xl text-white  " />
              </button>
            </div>
            {/*  */}
            <h6 className="pt-3 text-md text-center">
              <span className="text-gray px-1">Please visit</span>
              <span className="text-primary cursor-pointer hover:underline font-semibold">
                this page
              </span>
              <span className="text-gray px-1 ">
                to view more popular products
              </span>
            </h6>
          </div>
          <div className="w-[75%]">
            <div className="flex justify-between gap-x-7 overflow-x-auto scrollbar-hide p-4">
              {dummyData.map((item, index) => {
                return (
                  <div className="min-w-[33%] shadow-lg shadow-gray bg-white  rounded-md flex flex-col cursor-pointer">
                    {" "}
                    {/* Added 'flex flex-col' */}
                    <div className="relative">
                      <img
                        className="h-[180px] w-[100%] rounded-t-md"
                        src={item.image}
                        alt=""
                      />
                      <div className="pt-3 px-3 border-t-[1px] border-lightGray flex justify-end items-center gap-x-3 absolute top-0 right-0">
                        <button className="min-w-[40px] h-[40px] bg-primary  rounded-full flex justify-center items-center text-white">
                          <MdOutlineFavorite className="text-xl" />
                        </button>
                        <button className="min-w-[40px] h-[40px] bg-primary rounded-full flex justify-center items-center  text-white">
                          <HiShoppingCart className="text-xl" />
                        </button>
                      </div>
                    </div>
                    {/* Content Area */}
                    <div className="p-3 flex-grow">
                      {" "}
                      {/* Added 'flex-grow' */}
                      <h2 className="text-lg font-bold truncate">
                        {item.title}
                      </h2>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-x-2 items-center">
                          <span className="text-primary text-md font-semibold">
                            ${item.discountedPrice}
                          </span>
                          <span className="text-gray text-sm font-semibold line-through">
                            ${item.actualPrice}
                          </span>
                        </div>
                        <div className="flex items-center text-sm text-gray">
                          {[1, 2, 3, 4, 5].map((i, index) => {
                            return (
                              <FaStar
                                key={index}
                                className={`text-sm ${
                                  i <= item.ratings
                                    ? "text-primary"
                                    : "text-gray"
                                }`}
                              />
                            );
                          })}
                          (10)
                        </div>
                      </div>
                      <h6 className="pt-3 flex text-sm font-semibold justify-center">
                        <span className="text-primary">140</span>
                        <span className="text-gray px-1 ">
                          units sold out of 195
                        </span>
                      </h6>
                      <h6 className="flex text-sm justify-center">
                        <span className="text-gray">(in just 1 week)</span>
                      </h6>
                      <div className="w-full py-3">
                        <div className="flex justify-center py-1 text-sm text-primary">
                          45 left
                        </div>
                        <div className="w-full rounded-full h-2.5 bg-lightGray">
                          <div className="bg-primary h-2.5 rounded-full w-[45%]"></div>
                        </div>
                      </div>
                    </div>
                    {/* The Buttons Section */}
                    {/* <div className="p-3 border-t-[1px] border-lightGray flex justify-between items-center">
                      <button className="h-[40px] w-[55%] px-3 border-2 bg-primary text-md text-white rounded-md font-semibold flex justify-center items-center gap-x-1">
                        <span>
                          <HiShoppingCart className="text-white" />
                        </span>
                        <span className="text-sm">Buy Now</span>
                      </button>
                      <button className="w-[18%] h-[38px] border-2 border-primary rounded-md flex justify-center items-center hover:bg-lightGray text-primary">
                        <MdOutlineFavorite className="text-xl" />
                      </button>
                      <button className="w-[18%] h-[38px] border-2 border-primary rounded-md flex justify-center items-center  hover:bg-lightGray text-primary">
                        <HiShoppingCart className="text-xl" />
                      </button>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekyPopularProducts;
