import React from "react";
import { Input } from "./input";

const CustomInput = ({ placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      className="border-[1px] border-[#FF1975] rounded-lg px-4 py-6 placeholder-gray-200"
    />
  );
};

export default CustomInput;
