import Image from "next/image";
import React from "react";

type ShareCardProp = {
  icon: string;
  text: string;
};

function ShareCard({ icon, text }: ShareCardProp) {
  return (
    <div className="flex flex-col justify-center items-center w-full px-1 py-2 text-xs tablet:p-6 hover:border hover:border-red rounded-lg space-y-3 tablet:space-y-5 cursor-pointer hover:bg-[#D9D9D9] text-[#666666] hover:text-black">
      <Image src={icon} alt="icon" width={20} height={20} />
      <p className="text-center">{text}</p>
    </div>
  );
}

export default ShareCard;
