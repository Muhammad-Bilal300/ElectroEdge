import React from "react";
import { GrFavorite } from "react-icons/gr";
import {
  IoCart,
  IoCartOutline,
  IoNotifications,
  IoNotificationsOutline,
} from "react-icons/io5";
import { MdFavorite } from "react-icons/md";

const RightHeader = () => {
  return (
    <>
      <style>
        {`
          .rotate-y-180 {
            transition: transform 0.5s; /* Smooth transition for rotation */
          }
          .rotate-y-180:hover {
            transform: rotateY(180deg) scale(1.136); /* Rotate horizontally and scale up */
          }
        `}
      </style>
      <div className="flex justify-between w-[22%] items-center">
      <MdFavorite
          className="text-primary font-bold rotate-y-180 cursor-pointer"
          size={20}
        />
        <IoCart
          className="text-primary font-bold rotate-y-180 cursor-pointer"
          size={22}
        />
        <IoNotifications
          className="text-primary font-bold rotate-y-180 cursor-pointer"
          size={22}
        />

        <button className="bg-white border-[1.5px] px-5 py-1 text-primary border-primary rounded-md font-bold relative overflow-hidden transition-all duration-500 group">
          <span className="absolute inset-0 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></span>
          <span className="relative z-10 group-hover:text-white transition-all duration-500 ease-in-out">
            Login
          </span>
        </button>
      </div>
    </>
  );
};

export default RightHeader;
