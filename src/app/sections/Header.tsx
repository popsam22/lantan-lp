import Image from "next/image";
import logo from "../../../public/lantanplustext@4x 1.svg";
import hamburger from "../../../public/hamburger.svg";
const Header = () => {
  return (
    <div className="flex justify-between overflow-x-hidden px-6 py-2">
      <div>
        <Image
          src={logo}
          alt="lantan"
          width={134}
          height={44}
          className="object-contain"
        />
      </div>
      <Image
        src={hamburger}
        alt="hamburger icon"
        width={46}
        height={47}
        className="object-contain cursor-pointer"
      />
      <div className="flex gap-16 items-center max-sm:hidden">
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
    </div>
  );
};

export default Header;
