import Image from "next/image";
import React from "react";
import logo from "../public/logo.svg";
import Link from "next/link";

function Nav() {
  return (
    <div className="text-white bg-[#1A1A1A] flex justify-between items-end p-5 h-24 tablet:h-24">
      <Image
        className=" w-40 tablet:w-48"
        src={logo}
        alt="top-nav"
        width={150}
        height={150}
      />
      <div className="w-3/4">
        <ul className="flex justify-end gap-x-3 tablet:gap-x-5 text-sm tablet:text-base font-light">
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact-us"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
