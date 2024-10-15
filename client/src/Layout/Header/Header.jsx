import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Categories from "./Components/Categories/Categories";

// const Header = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="pt-[60px]">
//         <Categories />
//       </div>
//     </div>
//   );
// };

const Header = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <div className="pt-[60px] w-[90%] lg:w-[80%] mx-auto ">
        <Categories />
      </div>
    </div>
  );
};

export default Header;
