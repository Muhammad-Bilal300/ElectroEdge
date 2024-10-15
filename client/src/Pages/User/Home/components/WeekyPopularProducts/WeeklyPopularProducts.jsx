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

  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto pt-14">
      <div className="bg-lightGray p-4 lg:p-9 rounded-lg">
        <div className="py-4 lg:flex lg:items-center gap-x-5">
          <div className="lg:w-[25%] w-full text-center">
            <div className="flex justify-center text-center ">
              <h3 className="font-bold text-3xl text-black">Recommended</h3>
            </div>
            <p className="text-lg text-black mb-5 font-semibold pt-4 pb-2 text-center">
              Top 10 popular products of the week
            </p>
            {/*  */}
            <div className="flex gap-x-2 justify-center">
              <button
                onClick={handleScrollLeft}
                className="w-[30px] h-[30px] rounded-full  bg-black flex justify-center items-center"
              >
                <MdKeyboardArrowLeft className="text-3xl text-white  " />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-[30px] h-[30px] rounded-full bg-black   flex justify-center items-center"
              >
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

          {/* Scrollable Items */}
          <div className="lg:pt-0 pt-6 lg:w-[75%] w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-x-7 overflow-x-auto scroll-smooth scrollbar-hide p-3 py-4"
            >
              {dummyData.map((item, index) => (
                <div
                  key={index}
                  className="lg:min-w-[35%] sm:min-w-[45%]  min-w-[87%] shadow-lg shadow-gray bg-white rounded-md flex flex-col cursor-pointer"
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
                      <span className="text-gray px-1">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekyPopularProducts;
