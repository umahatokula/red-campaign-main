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
        className={`carousel carousel-center max-w-md tablet:w-full ${
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
              width={20}
              height={20}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
      </div>
    </div>
  );
}

export default Carousel;
