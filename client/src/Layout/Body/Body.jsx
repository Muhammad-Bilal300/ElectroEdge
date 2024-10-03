import React from "react";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="w-[100%] ">
      <Outlet />
    </div>
  );
};

export default Body;
