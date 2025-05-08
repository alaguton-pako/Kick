import React from "react";
import Image from "next/image";
import underRing from "../../public/elipseRingUnder.png";
const Rating = ({ rating }) => {
  return (
    <div className="relative w-[110px] h-[110px] md:w-[120px] md:h-[120px]">
      <Image
        src={underRing}
        alt="Background 3"
        className="absolute h-auto w-auto scale-130 top-[-14px] left-[-5px] md:top-[-10px] md:left-[-10px] lg:top-[-10px] lg:left-[-5px] xl:top-[-2px] xl:left-[8px]"
      />

      {/* Main ring with centered text */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={rating == "9,2" ? "/elpiseRing.png" : "/ringBlue.png"}
          alt="main ring"
          fill
          className="object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-white text-xl font-bold drop-shadow-md">
            {rating}
          </span>
        </div>
      </div>

      {/* Stars */}
      <div className="absolute top-0 right-0">
        <Image src="/stars.png" alt="stars" width={50} height={50} />
      </div>
    </div>
  );
};

export default Rating;
