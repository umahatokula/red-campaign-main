"use client";

import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function RedStory() {
  let subtitle: {};
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className="h-auto m-4 mt-20 tablet:m-5">
        <p className="my-5 text-base font-semibold leading-4 text-red">
          My RED Story
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full h-auto bg-red">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=52gvhql6W9c&feature=youtu.be&ab_channel=ChristFamilyMinistry"
              playing={true}
              width={"100%"}
              height={"100%"}
              volume={0.5}
              muted={false}
              light={false}
            />
          </div>
          <div className="w-full h-auto bg-red">
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
        <div className="flex justify-center w-full my-10">
          <Link
            href={"/share"}
            className="border border-[#1A1A1A] text-[#1A1A1A] rounded-md px-8 py-3 font-semibold text-base leading-5 hover:border-2"
          >
            Share Your Red Story
          </Link>
        </div>
      </div>
    </>
  );
}

export default RedStory;
