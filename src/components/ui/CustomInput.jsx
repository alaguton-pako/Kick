import React from "react";
import { Input } from "./input";
import clsx from "clsx";

const CustomInput = ({ placeholder, className }) => {
  return (
    <Input
      placeholder={placeholder}
      className={clsx(
        "border-[1px] border-[#FF1975] rounded-lg px-4 py-6 placeholder-gray-200",
        className
      )}
    />
  );
};

export default CustomInput;
