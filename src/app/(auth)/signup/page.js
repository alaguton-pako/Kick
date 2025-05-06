import React from "react";
import Image from "next/image";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white px-6">
      <div className="flex flex-col items-center justify-center gap-8 text-center ">
        <Image src={"/kickLogo.png"} height={80} width={80} alt="logo" />
        <h1 className="text-md">Sign up to continue</h1>
        <p className="text-sm">
          Get started with KICK by signing up with your details below
        </p>
        <div className="flex flex-col gap-4 w-full ">
          <CustomInput placeholder={"Enter your first name"} />
          <CustomInput placeholder={"Enter your last name"} />
          <CustomInput placeholder={"Enter your email address"} />
          <CustomInput placeholder={"Enter your phone number"} />
          <Link href={"/login"}>
            <CustomButton fullWidth/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
