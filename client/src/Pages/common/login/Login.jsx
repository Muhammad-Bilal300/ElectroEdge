import React from "react";
import { FaCheckDouble } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import ElectroEdgeIcon from "../../../Assets/ElectroEdge-transparent.png";

const Login = () => {
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
          Enter your email below to login your account
        </p>
        <div className="pt-8 flex flex-col gap-y-5">
          <div className="h-[40px] bg-lightGray rounded-md w-[100%] px-2 flex items-center">
            <input
              className="outline-none border-no ne w-full bg-transparent"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="h-[40px] bg-lightGray rounded-md w-[100%] px-2 flex items-center">
            <input
              className="outline-none border-none w-full bg-transparent"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex justify-between text-primary text-[12px] font-semibold">
          <span></span>
          <span
            onClick={() => {
              navigate("/forgot-password");
            }}
            className="cursor-pointer"
          >
            Forgot Password ?
          </span>
        </div>
        <div className="flex justify-center py-5 text-[14px]">
          <span className="text-gray-500">Don't have an account?&nbsp; </span>
          <span
            className="text-primary font-semibold cursor-pointer"
            onClick={() => {
              navigate("/sign-up");
            }}
          >
            Sign Up
          </span>
        </div>
        <div className="flex flex-col gap-y-3 pb-5">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="bg-primary text-white text-center text-[16px] font-semibold h-[40px] w-full rounded-md"
          >
            Login
          </button>
          <button className="border-2 border-black text-black text-center text-[16px] font-semibold h-[40px] w-full rounded-md flex justify-center items-center">
            <span className="mr-3">
              <FcGoogle className="text-[18px]" />
            </span>
            <span>Continue With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
