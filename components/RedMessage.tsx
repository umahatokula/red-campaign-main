import React from "react";

function RedMessage() {
  return (
    <div className="m-4 tablet:m-5 mt-20">
      <p className="text-red font-semibold text-base  leading-4 my-5">
        The RED Message
      </p>
      <div className="grid grid-cols-1">
        <div className="w-full h-[212px] bg-black"></div>
      </div>
    </div>
  );
}

export default RedMessage;
