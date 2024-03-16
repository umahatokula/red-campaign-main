import Image from "next/image";
import React from "react";
import leftArrow from "../../public/leftArrow.svg";
import ShareCard from "@/components/ShareCard";
import iconEdit from "../../public/icon-edit.svg";
import iconMic from "../../public/icon-mic.svg";
import iconCamera from "../../public/icon-camera.svg";
import Link from "next/link";

function page() {
  return (
    <div className="space-y-3 tablet:space-y-8">
      <Link href={'/'}>
        <Image
          className="w-3 tablet:w-5 h-3 tablet:h-5"
          src={leftArrow}
          alt="leftArrow"
          width={10}
          height={10}
        />
      </Link>
      <p className="text-lg tablet:text-2xl font-semibold leading-6">
        Welcome to the <span className="text-red">REDtrybe</span>!
      </p>
      <p className="text-xs tablet:text-base font-normal leading-6">
        Are you born again? Share your RED story with us, we’d love to hear it.
      </p>
      <div className="grid grid-cols-3 gap-1 tablet:gap-8">
        <ShareCard icon={iconEdit} text="Write to us" />
        <ShareCard icon={iconMic} text="Send a voice recording" />
        <ShareCard icon={iconCamera} text="Send a video" />
      </div>
      <div className="w-full h-48 tablet:h-96 bg-[#E5E5E5]"></div>
      <div className="flex justify-center items-center mt-10">
        <button className="btn__red">Submit</button>
      </div>
    </div>
  );
}

export default page;
