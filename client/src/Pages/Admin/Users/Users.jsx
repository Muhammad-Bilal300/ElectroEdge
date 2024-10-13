import React from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

const Users = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Users" subHeading="Manage your users" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Add New User"
        />
        {/* <div className="flex gap-x-3">
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer">
            <BiSolidFilePdf className="text-red-500 text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer">
            <AiFillFileExcel className="text-green-500 text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer">
            <IoMdPrint className="text-blue-900 text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer">
            <IoMdRefresh className="text-gray text-[22px]" />
          </div>
          <div className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer">
            <IoIosArrowUp className="text-gray text-[22px]" />
          </div>
          <div className="h-[36px] px-3 text-sm flex gap-x-2 justify-center items-center rounded-md bg-primary text-white font-semibold cursor-pointer">
            <IoAddCircle className="text-white text-[20px]" /> Add New User
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Users;
