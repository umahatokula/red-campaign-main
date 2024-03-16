import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

const images: string[] = [
  "slide1.svg",
  "slide1.svg",
  "slide1.svg",
  "slide1.svg",
];

function WhatIsRed() {
  return (
    <div className="">
      <h3 className="text-red font-semibold text-base  leading-4 mx-5 mb-5 mt-10">
        What is RED?
      </h3>
      <Carousel imagePaths={images} isFullWidth={true} />
    </div>
  );
}

export default WhatIsRed;
