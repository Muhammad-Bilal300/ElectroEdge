import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import ElectroEdgeIcon from "../../Assets/ElectroEdge.PNG";

import { IoSettingsOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { HiOutlineUserCircle } from "react-icons/hi2";

const AdminBody = () => {
  const { isCollapsed, width } = useSelector((state) => state.adminGlobalState);
  return (
    <div className="w-screen">
      <div
        className={`h-[10vh] px-12 bg-white shadow-sm shadow-primary border-primary relative flex justify-between items-center`}
      >
        <div className="flex-1">
          {isCollapsed && (
            <img
              src={ElectroEdgeIcon}
              alt="ElectroEdge"
              className="h-[2rem] cursor-pointer max-w-[200px]"
            />
          )}
        </div>

        <div className="flex">
          <div className="bg-lightGray p-2 rounded-md cursor-pointer mr-4">
            <IoNotificationsOutline className="text-xl font-bold text-primary" />
          </div>
          <div className="bg-lightGray p-2 rounded-md cursor-pointer mr-10">
            <IoSettingsOutline className="text-xl font-bold text-primary" />
          </div>
        </div>

        <div className="flex items-end cursor-pointer">
          <div className="bg-lightGray rounded-full cursor-pointer ">
            <HiOutlineUserCircle className="text-[42px] font-bold text-gray" />
          </div>
          <MdArrowDropDown className="text-xl" />
        </div>
      </div>

      <div className="px-5 py-4 h-[90vh] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminBody;
