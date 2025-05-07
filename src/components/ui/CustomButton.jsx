import React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils"; // assuming you're using cn utility

const CustomButton = ({ fullWidth = false, text = "CONTINUE" }) => {
  return (
    <Button 
      className={cn(
        "relative py-3 px-9 cursor-pointer rounded-lg text-white bg-gradient-to-r from-red-600 to-[#8033bb] bg-[length:100%_100%] bg-no-repeat",
        "shadow-[0px_4px_10px_2px_rgba(255,0,0,0.6),0px_4px_15px_5px_rgba(128,51,187,0.6),0px_0px_25px_6px_rgba(255,0,0,0.3)]",
        "transition-all duration-300",
        fullWidth && "w-full"
      )}
    >
      <span className="font-bungee font-bold">{text}</span>
    </Button>
  );
};

export default CustomButton;
