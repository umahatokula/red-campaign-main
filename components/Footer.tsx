import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";

function Footer() {
  return (
    <div className="flex justify-center items-center bg-black w-full">
      <Image className="w-44 h-24" src={logo} alt="logo" width={100} height={20} />
    </div>
  );
}

export default Footer;
