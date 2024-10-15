import React from "react";
import { IoCart, IoNotifications } from "react-icons/io5";

const RightHeader = () => {
  return (
    <div className="flex justify-end items-center w-full md:w-auto">
      <button className="bg-white border-[1.5px] px-2 py-1 mx-2 text-primary border-primary rounded-md font-bold relative overflow-hidden transition-all duration-500 group">
        <span className="absolute inset-0 bg-primary transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></span>
        <span className="relative z-10 group-hover:text-white transition-all duration-500 ease-in-out">
          Sign Up
        </span>
      </button>
      <button className="bg-white border-[1.5px] px-2 py-1 text-primary border-primary rounded-md font-bold relative overflow-hidden transition-all duration-500 group">
        <span className="absolute inset-0 bg-primary transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out"></span>
        <span className="relative z-10 group-hover:text-white transition-all duration-500 ease-in-out">
          Login
        </span>
      </button>
    </div>
  );
};

export default RightHeader;
