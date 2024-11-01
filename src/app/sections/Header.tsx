"use client";

import Image from "next/image";
import logo from "../../../public/lantanlogo.png";
import hamburger from "../../../public/hamburger.svg";
import close_button from "../../../public/close-button.svg";
import playstore from "../../../public/btn-playstore.svg";
import appstore from "../../../public/btn-appstore.svg";

import { useState } from "react";
const Header = () => {
  const [open, setOpen] = useState(false);

  const handleIconToggle = () => {
    setOpen((prevstate) => !prevstate);
  };
  return (
    <div className="flex justify-between overflow-x-hidden px-6 py-2">
      <div>
        <Image
          src={logo.src}
          alt="lantan"
          width={134}
          height={44}
          className="object-contain"
          priority
        />
      </div>
      <div className="md:hidden">
        {open ? (
          <Image
            src={close_button}
            alt="toggle icon"
            width={24}
            height={24}
            className="object-contain cursor-pointer mt-2.5"
            onClick={handleIconToggle}
          />
        ) : (
          <Image
            src={hamburger}
            alt="toggle icon"
            width={38}
            height={38}
            className="object-contain cursor-pointer"
            onClick={handleIconToggle}
          />
        )}
      </div>
      <div className="flex gap-16 items-center max-md:hidden">
        <div className="flex gap-10">
          <p className="text-[#3D3D3D] text-sm cursor-pointer">About</p>
          <p className="text-[#3D3D3D] text-sm cursor-pointer">Features</p>
          <p className="text-[#3D3D3D] text-sm cursor-pointer">Team</p>
          <p className="text-[#3D3D3D] text-sm cursor-pointer">Contact us</p>
        </div>
        <div>
          <button className="bg-[#075AAA] text-[#FFFFFF] rounded-lg w-[153px] p-3 text-sm font-semibold">
            Download App
          </button>
        </div>
      </div>
      {/* Mobile view  */}
      {open && (
        <div className="flex flex-col h-[280px] w-full items-start p-3 absolute bg-white top-20 md:hidden transition-all duration-300">
          <div className="flex flex-col gap-7 mb-10">
            <p className="text-[#3D3D3D] text-sm cursor-pointer">About</p>
            <p className="text-[#3D3D3D] text-sm cursor-pointer">Features</p>
            <p className="text-[#3D3D3D] text-sm cursor-pointer">Team</p>
            <p className="text-[#3D3D3D] text-sm cursor-pointer">Contact us</p>
          </div>
          <div className="flex gap-5">
            <Image src={appstore} alt="appstore icon" />
            <Image src={playstore} alt="playstore icon" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
