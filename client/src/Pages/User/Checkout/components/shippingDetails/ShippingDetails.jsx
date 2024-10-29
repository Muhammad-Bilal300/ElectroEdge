import React from "react";
import InputField from "../../../../../Components/inputField/InputField";

const ShippingDetails = () => {
  return (
    <div className="w-full flex flex-col gap-y-6 lg:w-[65%]">
      <h3 className="text-[22px] font-bold">Shipping Details</h3>
      {/* input fields */}
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8 mt-4 ">
        <InputField
          type="text"
          fieldName="First Name"
          placeholder="Enter First Name"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="Last Name"
          placeholder="Enter Last Name"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="Email Address"
          placeholder="Enter Email Address"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="Mobile Phone Number"
          placeholder="Enter Mobile Number"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="Address"
          placeholder="Enter Address"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="Country"
          placeholder="Enter country"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="Zip Code"
          placeholder="Enter Zip Code"
          onChange={() => {}}
        />
        <InputField
          type="text"
          fieldName="City"
          placeholder="Enter City"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default ShippingDetails;
