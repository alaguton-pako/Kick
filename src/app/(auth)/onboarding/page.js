import React from "react";
import Image from "next/image";
import CustomInput from "@/components/ui/CustomInput";
import CustomButton from "@/components/ui/CustomButton";
import Link from "next/link";

export const metadata = {
  title: "Kick | Onboarding",
  description: "Kick arcade dashboard",
};

const page = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white px-6">
      <div className="flex flex-col items-center justify-center gap-8 text-center ">
        <Image src={"/kickLogo.png"} height={80} width={80} alt="logo" />
        <h1 className="text-md">Set Up Your KICK Account</h1>
        <p className="text-sm">
          We’ll use your email to keep your account secure and send updates
        </p>
        <div className="flex flex-col gap-4 w-full ">
          <CustomInput placeholder={"Enter your first name"} />
          <CustomInput placeholder={"Enter your last name"} />
          <CustomInput placeholder={"Enter your email address"} />
          <Link href={"/signup"}>
            <CustomButton fullWidth />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
