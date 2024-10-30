import Image from "next/image";
import logo from "../../../public/Group.svg";
import playstore from "../../../public/btn-playstore.svg";
import appstore from "../../../public/btn-appstore.svg";
import x from "../../../public/x.svg";
import linkedIn from "../../../public/LinkedIn.svg";
import facebook from "../../../public/facebook.svg";

const Footer = () => {
  return (
    <div className="mt-3 flex flex-col p-6 max-md:p-0">
      <div className="border-b mb-4 flex w-full justify-between max-md:flex-col">
        <div className="">
          <Image
            src={logo}
            alt="lantan logo"
            className="object-contain mb-7 cursor-pointer"
            width={60}
            height={39}
          />
          <p className="text-[#7A7A7A] mb-7 max-w-[320px] max-md:max-w-[343px]">
            Maximize your wealth — earn consistent passive income through
            dividend payments while watching your investments grow
          </p>
          <div className="flex gap-7 mb-7 max-md:grid max-md:grid-cols-2">
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
          <h1 className="text-[#075AAA] cursor-pointer font-semibold">
            Get the app
          </h1>
          <div className="max-md:flex max-md:gap-4 max-md:mb-7">
            <Image
              src={appstore}
              alt="appstore logo"
              className="object-contain cursor-pointer mb-3"
            />
            <Image
              src={playstore}
              alt="playstore logo"
              className="object-contain cursor-pointer mb-3"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between py-4 max-md:py-2 max-md:flex-col-reverse max-md:gap-4">
        <p className="text-[#5C5C5C]">
          &copy; 2024 Lantan. All rights reserved.
        </p>
        <div className="flex gap-5">
          <Image
            src={x}
            alt="x icon"
            className="cursor-pointer"
            width={24}
            height={24}
          />
          <Image
            src={linkedIn}
            alt="linkedIn icon"
            className="cursor-pointer"
            width={24}
            height={24}
          />
          <Image
            src={facebook}
            alt="facebook logo"
            className="cursor-pointer"
            width={24}
            height={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
