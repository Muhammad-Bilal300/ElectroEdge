import React from "react";
import { useNavigate } from "react-router-dom";
import ElectroEdgeIcon from "../../../Assets/ElectroEdge-transparent.png";

const VerifyOTP = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col my-auto gap-y-6">
      <div className="flex gap-x-4 justify-center items-center">
        <img
          src={ElectroEdgeIcon}
          alt="ElctroEdge"
          className="h-[2rem] cursor-pointer"
        />
      </div>
      <div className="w-[30%] px-5 py-3 rounded-md shadow-md blur-0 shadow-primary">
        <h4 className="text-[22px] font-semibold flex justify-center">Login</h4>
        <p className="text-[14px] text-gray-500 flex justify-center">
          Enter your email below to send the OTP
        </p>
        <div className="pt-8 flex flex-col gap-y-5">
          <div className="h-[40px] bg-lightGray rounded-md w-[100%] px-2 flex items-center">
            <input
              className="outline-none border-no ne w-full bg-transparent"
              type="text"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="flex flex-col gap-y-3 pb-5">
          <button className="bg-primary text-white text-center text-[16px] font-semibold h-[40px] w-full rounded-md">
            Send OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
