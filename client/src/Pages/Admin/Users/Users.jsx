import React from "react";
import Header from "../../../Layout/Header/Header";
import BodyHeader from "../../../Components/BodyHeader/BodyHeader";

import { BiSolidFilePdf } from "react-icons/bi";
import { AiFillFileExcel } from "react-icons/ai";
import { IoMdPrint } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";

const Users = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Users" subHeading="Manage your users" />
        <div className="flex gap-x-3">
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-2 border-lightGray hover:bg-lightGray cursor-pointer">
            <BiSolidFilePdf className="text-red-500 text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-2 border-lightGray hover:bg-lightGray cursor-pointer">
            <AiFillFileExcel className="text-green-500 text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-2 border-lightGray hover:bg-lightGray cursor-pointer">
            <IoMdPrint className="text-blue-900 text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-2 border-lightGray hover:bg-lightGray cursor-pointer">
            <IoMdRefresh className="text-gray text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md border-2 border-lightGray hover:bg-lightGray cursor-pointer">
            <IoIosArrowUp className="text-gray text-[22px]" />
          </div>
          <div className="h-[36px] px-3 flex justify-center items-center rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold cursor-pointer">
            Add New User
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
