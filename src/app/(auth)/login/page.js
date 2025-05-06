import React from "react";
import Image from "next/image";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white">
      <div className="w-full px-4 md:w-[25%] mx-auto flex flex-col items-center justify-center gap-8 text-center ">
        <Image src={"/kickLogo.png"} height={80} width={80} alt="logo" />
        <h1 className="text-md">Welcome back</h1>
        <p className="hidden md:block text-sm">Play trivia and arcade games</p>
        <p className="text-sm md:hidden">
          Get started with KICK by signing up with your details below
        </p>
        <div className="flex flex-col gap-4 w-full ">
          <CustomInput placeholder={"Enter your email address"} />

          <Link href={"/kick"}>
            <CustomButton fullWidth />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
