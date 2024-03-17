import React from "react";
import Carousel from "./Carousel";

const images: string[] = [
  '/quote1.jpg',
  '/quote2.jpg',
  '/quote3.jpg',
  '/quote4.jpg',
]

function RedTalk() {
  return (
    <div className="my-4 mt-20 tablet:m-5">
      <p className="m-5 text-base font-semibold leading-4 text-red">
        RED Talk
      </p>
      <div className="grid grid-cols-1">
        <Carousel imagePaths={images} isFullWidth={true} width={240} height={254} />
      </div>
    </div>
  );
}

export default RedTalk;
