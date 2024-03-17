import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

const images: string[] = [
  "slide1.svg",
  "/RED+1.jpg",
  "/RED+2.jpg",
  "/RED+3.jpg",
  "/RED+4.jpg",
  "/RED+5.jpg",
  "/RED+6.jpg",
  "/RED+7.jpg",
  "/RED+8.jpg",
];

function WhatIsRed() {
  return (
    <div className="w-full">
      <h3 className="mx-5 mt-10 mb-5 text-base font-semibold leading-4 text-red">
        The Cross Speaks Love
      </h3>
      <Carousel imagePaths={images} isFullWidth={true} width={390} height={212} />
    </div>
  );
}

export default WhatIsRed;
