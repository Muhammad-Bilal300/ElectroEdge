import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`bg-lightGray flex items-center text-center py-2 px-4 rounded-md transition-all duration-300 ${
        isFocused ? "w-[50%]" : "w-[30%]"
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
  );
};

export default SearchBar;
