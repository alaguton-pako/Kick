import React from "react";
import Image from "next/image";

const Rating = () => {
  return (
    <div className="relative w-[100px] h-[100px]">
      {/* Underneath ring */}
      <div className="absolute bottom-0 left-0 w-full h-full transform rotate-12 origin-bottom-left">
        <Image
          src="/elipseRingUnder.png"
          alt="underneath ring"
          fill
          className="object-contain"
        />
      </div>

      {/* Main ring with centered text */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/elpiseRing.png"
          alt="main ring"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-bold drop-shadow-md">9.2</span>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute top-0 right-0">
        <Image src="/stars.png" alt="stars" width={24} height={24} />
      </div>
    </div>
  );
};

export default Rating;