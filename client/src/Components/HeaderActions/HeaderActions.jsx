import React from "react";

import { BiSolidFilePdf } from "react-icons/bi";
import { AiFillFileExcel } from "react-icons/ai";
import { IoMdPrint } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoMdRefresh } from "react-icons/io";

import { MdOutlineFileDownload } from "react-icons/md";

import { IoAddCircle } from "react-icons/io5";

const HeaderActions = ({
  pdfAction,
  excelAction,
  printAction,
  refreshAction,
  hideHeaderAction,
  addAction,
  addText,
  importText,
  importAction,
}) => {
  return (
    <div className="flex gap-x-3">
      <div
        onClick={pdfAction}
        className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer"
      >
        <BiSolidFilePdf className="text-red-500 text-[22px]" />
      </div>
      <div
        onClick={excelAction}
        className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer"
      >
        <AiFillFileExcel className="text-green-500 text-[22px]" />
      </div>
      <div
        onClick={printAction}
        className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer"
      >
        <IoMdPrint className="text-blue-900 text-[22px]" />
      </div>
      <div
        onClick={refreshAction}
        className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer"
      >
        <IoMdRefresh className="text-gray text-[22px]" />
      </div>
      <div
        onClick={hideHeaderAction}
        className="w-[36px] h-[36px] flex justify-center items-center rounded-md bg-lightGray cursor-pointer"
      >
        <IoIosArrowUp className="text-gray text-[22px]" />
      </div>
      {addText !== "" && (
        <div
          onClick={addAction}
          className="h-[36px] px-3 text-sm flex gap-x-2 justify-center items-center rounded-md bg-primary text-white font-semibold cursor-pointer"
        >
          <IoAddCircle className="text-white text-[20px]" /> {addText}
        </div>
      )}
      {importText !== "" && (
        <div
          onClick={importAction}
          className="h-[36px] px-3 text-sm flex gap-x-2 justify-center items-center rounded-md bg-black text-white font-semibold cursor-pointer"
        >
          <MdOutlineFileDownload className="text-white text-[20px]" />
          {importText}
        </div>
      )}
    </div>
  );
};

export default HeaderActions;
