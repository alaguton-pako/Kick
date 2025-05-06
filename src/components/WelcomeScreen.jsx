import CustomButton from "./ui/CustomButton";
import Image from "next/image";
import Link from "next/link";
export default function WelcomeScreen() {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center gap-8 text-center ">
        <Image src={"/kickLogo.png"} height={80} width={80} alt="logo" />
        <h1 className="text-md">Welcome to KICK +234 7050 857 338,</h1>
        <p className="text-sm">
          We’ve successfully detected your phone number. <br /> Let’s set up
          your account
        </p>
        <div>
          <Link href={"/onboarding"}>
            <CustomButton />
          </Link>
        </div>
      </div>
    </div>
  );
}
