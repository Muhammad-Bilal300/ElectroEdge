import React, { useRef } from "react";
import Laptop from "../../../../../Assets/Laptop.jpg";
import Headphone from "../../../../../Assets/Headphone.jpg";
import Printer from "../../../../../Assets/Printer.jpg";
import Speaker from "../../../../../Assets/Speakers.jpg";
import Keyboard from "../../../../../Assets/Keyboard.jpg";

import { FaStar } from "react-icons/fa6";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const FlashSale = () => {
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

  // Function to scroll left
  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  // Function to scroll right
  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300, // Adjust scroll distance
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto pt-14">
      <div className="bg-primary lg:p-9 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-3xl text-white">Flash Sale</h3>
          </div>
          <div className="flex gap-x-2">
            <button
              className="w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center"
              onClick={handleScrollLeft}
            >
              <MdKeyboardArrowLeft className="text-3xl text-primary" />
            </button>
            <button
              className="w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center"
              onClick={handleScrollRight}
            >
              <MdKeyboardArrowRight className="text-3xl text-primary" />
            </button>
          </div>
        </div>

        <div className="py-4 lg:flex lg:items-end gap-x-5">
          <div className="lg:w-[30%] w-full">
            <p className="text-sm text-lightGray mb-5">
              Explicabo pariatur exercitationem sapiente porro nesciunt,
              doloremque eos.
            </p>
            <div className="bg-black p-3 flex justify-center items-center rounded-lg text-3xl text-white w-full">
              05 : 22 : 19 : 54
            </div>
          </div>

          {/* Scrollable Items */}
          <div className="lg:pt-0 pt-6 lg:w-[70%] w-full overflow-hidden">
            <div
              ref={scrollRef}
              className="flex justify-between gap-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {dummyData.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="sm:min-w-[48%] min-w-[90%] bg-white rounded-md flex justify-start flex-row cursor-pointer p-2 relative hover:bg-lightGray"
                  >
                    <img
                      className="h-[90px] w-[30%] rounded-md"
                      src={item.image}
                      alt=""
                    />
                    <div className="px-3 flex-grow relative ">
                      <h2 className="text-md font-bold truncate">
                        {item.title.slice(0, 18)}
                        {item.title.length > 18 && "..."}
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
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((i, index) => (
                            <FaStar
                              key={index}
                              className={`text-xs ${
                                i <= item.ratings ? "text-primary" : "text-gray"
                              }`}
                            />
                          ))}
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
          <span className="hover:underline">View More</span>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
