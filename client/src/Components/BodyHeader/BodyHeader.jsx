import React from "react";

const BodyHeader = ({ heading, subHeading }) => {
  return (
    <div className="">
      <h1 className="text-2xl text-black font-bold">{heading}</h1>
      <h4 className="text-md text-gray">{subHeading}</h4>
    </div>
  );
};

export default BodyHeader;
