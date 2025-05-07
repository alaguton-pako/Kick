import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils"; // assuming you're using cn utility
import { PlusIcon } from "lucide-react";

const AddFavButton = () => {
  return (
    <Button
      className={cn(
        "relative p-3 cursor-pointer rounded-lg text-white bg-red-600 hover:bg-red-600",
        "shadow-[0px_4px_10px_2px_rgba(255,0,0,0.6),0px_4px_15px_5px_rgba(128,51,187,0.6),0px_0px_25px_6px_rgba(255,0,0,0.3)]",
        "transition-all duration-300"
      )}
    >
      <PlusIcon />
    </Button>
  );
};

export default AddFavButton;
