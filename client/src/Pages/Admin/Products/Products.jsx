import React, { useState } from "react";

import BodyHeader from "../../../Components/BodyHeader/BodyHeader";
import HeaderActions from "../../../Components/HeaderActions/HeaderActions";

import { IoSearch } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import { CgSortAz } from "react-icons/cg";
import { RiArrowDownSLine, RiCloseLargeLine } from "react-icons/ri";
import { FaSort } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Products = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Sort By Date");
  const sortOptions = ["Sort By Date", "Oldest", "Newest"];
  const [selectedRows, setSelectedRows] = useState(new Set());

  const handleSortSelection = (option) => {
    setSortOption(option);
    setIsDropdownOpen(false);
  };

  const toggleRowSelection = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const toggleSelectAll = () => {
    const newSelectedRows = new Set();
    if (selectedRows.size < 5) {
      // Assuming 5 rows here; adjust accordingly
      for (let i = 1; i <= 5; i++) {
        // Assuming you have 5 customers
        newSelectedRows.add(`C-00${i}`);
      }
    }
    setSelectedRows(newSelectedRows);
  };
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <BodyHeader heading="Products" subHeading="Manage your products" />
        <HeaderActions
          pdfAction={() => {}}
          excelAction={() => {}}
          printAction={() => {}}
          hideHeaderAction={() => {}}
          refreshAction={() => {}}
          addAction={() => {}}
          addText="Add New Product"
          importAction={() => {}}
          importText="Import Product"
        />
      </div>
      <div className="rounded-md mt-8 bg-lightGray border-2 border-lightGray">
        <div className="p-6 flex gap-x-3 justify-between items-center">
          <div
            className={`border-[1px] border-white bg-white flex justify-center items-center text-center py-2 px-4 rounded-md transition-all duration-300 ${
              isFocused ? "w-full" : "w-[30%]"
            }`}
          >
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full text-sm"
              placeholder="Search Here.."
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <IoSearch className="text-primary" />
          </div>
          <div className="flex gap-x-3">
            <div
              onClick={() => {
                setIsFiltered(!isFiltered);
              }}
              className={`w-[36px] h-[36px] flex justify-center items-center rounded-md ${
                isFiltered ? "bg-red-600" : "bg-primary"
              }  cursor-pointer`}
            >
              {isFiltered ? (
                <RiCloseLargeLine className="text-white text-[22px]" />
              ) : (
                <FaFilter className="text-white text-[22px]" />
              )}
            </div>
            <div className="relative">
              <div
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-[150px] h-[36px] flex justify-between px-2 items-center rounded-md bg-gray cursor-pointer text-[14px]"
              >
                <CgSortAz className="text-white text-[22px]" />
                <span className="font-semibold text-white">{sortOption}</span>
                <RiArrowDownSLine className="text-white text-[22px]" />
              </div>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-white border-2 border-gray rounded-md mt-1 z-10">
                  {sortOptions.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => handleSortSelection(option)}
                      className={`${
                        index < sortOptions.length - 1 ? "border-b-[1px]" : ""
                      } px-4 py-2 cursor-pointer ${
                        sortOption === option
                          ? "bg-gray text-white"
                          : "bg-transparent text-gray"
                      } hover:bg-gray hover:text-white`}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-lightGray">
                <th className="text-center py-3">
                  <input
                    type="checkbox"
                    onChange={toggleSelectAll}
                    checked={selectedRows.size === 5} // Assuming 5 rows; adjust accordingly
                  />
                </th>
                <th className="text-center">
                  Product ID
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Product Name{" "}
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Category{" "}
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Brand{" "}
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }, (_, index) => {
                const id = `P-00${index + 1}`;
                return (
                  <tr
                    key={id}
                    // className={`hover:bg-orange-200 transition-colors ${
                    className={`${index < 4 && "border-b-2 border-lightGray"}`}
                  >
                    <td className="text-center py-3">
                      <input
                        type="checkbox"
                        checked={selectedRows.has(id)}
                        onChange={() => toggleRowSelection(id)}
                      />
                    </td>
                    <td className="text-center">{id}</td>
                    <td className="text-center">Product {index + 1}</td>
                    <td className="text-center">Laptop</td>
                    <td className="text-center">Hp</td>
                    <td className="text-center flex gap-x-2 justify-center items-center h-[50px]">
                      <button className="w-[33px] h-[33px] flex justify-center items-center rounded-md bg-lightGray">
                        <IoEye className="text-blue-500 text-[20px]" />
                      </button>
                      <button className="w-[33px] h-[33px] flex justify-center items-center rounded-md bg-lightGray">
                        <MdModeEdit className="text-green-500 text-[20px]" />
                      </button>
                      <button className="w-[33px] h-[33px] flex justify-center items-center rounded-md bg-lightGray">
                        <MdDelete className="text-red-500 text-[20px]" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
