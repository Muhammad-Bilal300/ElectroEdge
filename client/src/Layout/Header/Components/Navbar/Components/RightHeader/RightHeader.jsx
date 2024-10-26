import React, { useState } from "react";
import { IoCart, IoNotifications } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const RightHeader = () => {
  // State to hold the number of items in the cart
  const [cartCount, setCartCount] = useState(9);
  const navigate = useNavigate();

  return (
    <div className="flex justify-end items-center w-full md:w-auto">
      <button
        className="relative mr-6"
        onClick={() => {
          navigate("/cart");
        }}
      >
        <IoCart className="text-[28px] text-primary" />
        {cartCount > 0 && (
          <span className="absolute top-[-10px] right-[-10px] bg-white border-2 border-primary text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
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
