import Image from "next/image";
import logo from "../../../public/Group.svg";
import playstore from "../../../public/btn-playstore.svg";
import appstore from "../../../public/btn-appstore.svg";
import x from "../../../public/x.svg";
import linkedIn from "../../../public/LinkedIn.svg";
import facebook from "../../../public/facebook.svg";

const Footer = () => {
  return (
    <div className="mt-8 flex flex-col p-6">
      <div className="border-b mb-4 flex w-full justify-between">
        <div className="">
          <Image
            src={logo}
            alt="lantan logo"
            className="object-contain mb-3 cursor-pointer"
            width={60}
            height={39}
          />
          <p className="text-[#7A7A7A] mb-7 max-w-[320px] ">
            Maximize your wealth — earn consistent passive income through
            dividend payments while watching your investments grow
          </p>
          <div className="flex gap-5 mb-7">
            <p className="text-[#3D3D3D] font-medium cursor-pointer">
              About us
            </p>
            <p className="text-[#3D3D3D] font-medium cursor-pointer">
              Features
            </p>
            <p className="text-[#3D3D3D] font-medium cursor-pointer">
              Contact us
            </p>
            <p className="text-[#3D3D3D] font-medium cursor-pointer">Help</p>
            <p className="text-[#3D3D3D] font-medium cursor-pointer">Privacy</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <h1 className="text-[#075AAA] cursor-pointer">Get the app</h1>
          <Image
            src={appstore}
            alt="appstore logo"
            className="object-contain cursor-pointer"
          />
          <Image
            src={playstore}
            alt="playsotre logo"
            className="object-contain cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between py-4">
        <p className="text-[#5C5C5C]">
          &copy; 2024 Lantan. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Image src={x} alt="x icon" className="cursor-pointer" />
          <Image
            src={linkedIn}
            alt="linkedIn icon"
            className="cursor-pointer"
          />
          <Image
            src={facebook}
            alt="facebook logo"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
