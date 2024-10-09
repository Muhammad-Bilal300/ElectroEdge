import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";

const Header = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-[60px]">
        <Categories />
      </div>
    </div>
  );
};

export default Header;
