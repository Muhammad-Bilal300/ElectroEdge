import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { TbBrandUnsplash } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { RiProductHuntLine } from "react-icons/ri";
import { BiCart, BiPurchaseTag } from "react-icons/bi";
import { LiaSellsy } from "react-icons/lia";
import { HiOutlineDocumentReport } from "react-icons/hi";

import { IoIosArrowBack } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

import ElectroEdgeIcon from "../../Assets/ElectroEdge.PNG";
import { setIsCollapsed } from "../../ReduxToolkit/Reducers/Admin/AdminGlobalStateSlice";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isCollapsed, width } = useSelector((state) => state.adminGlobalState);
  const options = [
    { icon: <LuLayoutDashboard />, name: "Dashboard", link: "dashboard" },
    { icon: <LuUsers />, name: "Customers", link: "customers" },
    { icon: <MdOutlineCategory />, name: "Categories", link: "categories" },
    { icon: <TbBrandUnsplash />, name: "Brands", link: "brands" },
    { icon: <RiProductHuntLine />, name: "Products", link: "products" },
    { icon: <LuUsers />, name: "Vendors", link: "vendors" },
    { icon: <BiPurchaseTag />, name: "Purchases", link: "purchases" },
    { icon: <BiCart />, name: "Orders", link: "orders" },
    { icon: <LiaSellsy />, name: "Sales", link: "sales" },
    { icon: <HiOutlineDocumentReport />, name: "Reports", link: "reports" },
  ];

  const [selectedOption, setSelectedOption] = useState("");

  const toggleSidebar = () => {
    dispatch(setIsCollapsed(!isCollapsed));
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-[65px]" : "w-[260px]"
      } h-[100vh] bg-primary transition-all duration-500 ease-in-out`}
    >
      <div className="h-[10vh] bg-white shadow-md shadow-primary border-primary relative flex justify-center items-center ">
        <div className="">
          {isCollapsed ? (
            <GiHamburgerMenu
              className="text-primary text-2xl cursor-pointer"
              onClick={toggleSidebar}
            />
          ) : (
            <img
              src={ElectroEdgeIcon}
              alt="ElectroEdge"
              className="h-[1.8rem] cursor-pointer"
            />
          )}
        </div>
        {!isCollapsed && (
          <div
            className="bg-primary w-7 h-7 flex justify-center items-center text-center rounded-full cursor-pointer relative right-[-25px] z-50"
            onClick={toggleSidebar}
          >
            <IoIosArrowBack
              className={`text-white text-lg transform transition-transform duration-300 ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </div>
        )}
      </div>
      <div className="">
        {options.map((option, index) => {
          return (
            <div
              key={index}
              className={`font-semibold flex px-5 py-2.5 items-center border-b-[1px] border-white cursor-pointer hover:bg-white hover:text-primary ${
                selectedOption === option.name
                  ? "bg-white text-primary"
                  : "bg-primary text-white"
              }`}
              onClick={() => {
                setSelectedOption(option.name);
                navigate(`/admin/${option.link}`);
              }}
            >
              <span className={`text-xl mr-3 `}>{option.icon}</span>
              <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
                {option.name}
              </span>

              {/* <span className={`text-lg mr-3 ${isCollapsed ? "hidden" : ""}`}>
                {option.icon}
              </span> */}
              {/* {!isCollapsed && (
                <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
                  {option.name}
                </span>
              )} */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
