import React from "react";

const InputField = ({ fieldName, placeholder, type, onChange }) => {
  return (
    <div className="flex flex-col gap-y-1">
      <h6 className="font-semibold">{fieldName}</h6>
      <div className="w-full rounded-md h-[36px] border-[1px] border-black flex justify-start items-center px-3">
        <input
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className="outline-none border-none bg-transparent w-full"
        />
      </div>
    </div>
  );
};

export default InputField;
