import React from "react";
import { Outlet } from "react-router-dom";

const AdminBody = () => {
  return (
    <div className="w-screen">
      <div className="h-[10vh] px-2 bg-white shadow-sm shadow-primary border-primary relative flex justify-center items-center "></div>

      <div className="p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminBody;
