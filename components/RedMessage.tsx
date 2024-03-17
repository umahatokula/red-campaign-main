"use client";

import React from "react";
import ReactPlayer from "react-player";

function RedMessage() {
  return (
    <div className="m-4 mt-20 tablet:m-5">
      <p className="my-5 text-base font-semibold leading-4 text-red">
        The RED Message
      </p>
      <div className="grid grid-cols-1">
        <div className="w-full h-[212px] bg-black">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=KVEd0_Anc70&ab_channel=ChristFamilyMinistry"
              playing={true}
              width={"100%"}
              height={"100%"}
              volume={0.5}
              muted={false}
              light={false}
            />
          </div>
      </div>
    </div>
  );
}

export default RedMessage;
