import Image from "next/image";
import React from "react";

type CarouselType = {
  imagePaths: string[];
  isFullWidth: boolean;
};

function Carousel({ imagePaths, isFullWidth }: CarouselType) {
  return (
    <div className="w-full h-auto">
      <div
        className={`carousel carousel-center w-full ${
          isFullWidth ? "space-x-0" : "space-x-4 p-4"
        }`}
      >
        {imagePaths.map((path) => (
          <div
            id="item1"
            className={`carousel-item ${isFullWidth ? "w-full" : null}`}
          >
            <Image
              className="w-full"
              src={path}
              alt="image"
              width={240}
              height={254}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
