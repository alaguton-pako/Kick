import Image from "next/image";

export default function AutoDetection() {
  return (
    <div className="h-screen w-screen flex items-center justify-center text-white text-center px-4">
      <div className="flex flex-col items-center justify-center gap-8">
        <Image src={"/loader.png"} height={80} width={80} alt="loader" />
        <p className="text-sm">
          We’re detecting your phone number using your mobile data. <br /> This
          will take only a moment.
        </p>
      </div>
    </div>
  );
}
