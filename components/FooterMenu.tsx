import React from 'react'
import copyright from "../public/copyright.svg";
import Image from 'next/image';

function FooterMenu() {
  return (
    <div className="bg-light-red text-black py-10 space-y-5 tablet:space-y-10 p-5">
      <ul className="flex justify-around text-base leading-5 font-semibold">
        <li>Home</li>
        <li>Wordshop</li>
        <li>Contact us</li>
        <li>About</li>
      </ul>
      <div className="flex justify-center items-center">
        <Image
          className="w-5 h-5"
          src={copyright}
          alt="copyright"
          width={10}
          height={10}
        />
        <span className="ml-2 font-semibold">{new Date().getFullYear()}</span>
      </div>
    </div>
  )
}

export default FooterMenu