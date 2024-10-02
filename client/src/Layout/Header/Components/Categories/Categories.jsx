import React, { useState } from "react";
import Container from "../../../../Components/Container/Container";
import { categories } from "../../../../Constants/Constants";

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <Container className="w-[100%]">
      <Container className="w-[80%] mx-auto py-4 flex justify-center text-center overflow-auto gap-5">
        {categories.map((category, index) => (
          <div
            key={index}
            className={` py-2 px-4 rounded-md cursor-pointer border-2 ${
              selectedCategory === category.name
                ? " border-primary text-white bg-primary shadow-sm shadow-black"
                : "border-lightGray text-black bg-lightGray"
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <p className="font-semibold text-xs">{category.name}</p>
            <p>{category.icon}</p>
          </div>
        ))}
      </Container>
    </Container>
  );
};

export default Categories;
