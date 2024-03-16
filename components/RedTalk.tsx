import React from "react";
import Carousel from "./Carousel";

const images: string[] = [
  'redtalk1.svg',
  'redtalk1.svg',
  'redtalk1.svg',
  'redtalk1.svg',
  'redtalk1.svg',
]

function RedTalk() {
  return (
    <div className="my-4 tablet:m-5 mt-20">
      <p className="text-red font-semibold text-base  leading-4 m-5">
        RED Talk
      </p>
      <div className="grid grid-cols-1">
        <Carousel imagePaths={images} isFullWidth={false} />
      </div>
    </div>
  );
}

export default RedTalk;
