import Image from "next/image";
import logo from "../../../public/lantanplustext@4x 1.svg";
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
      <div className="flex gap-16 items-center">
        <div className="flex gap-10">
          <p className="text-[#3D3D3D] text-sm">About</p>
          <p className="text-[#3D3D3D] text-sm">Features</p>
          <p className="text-[#3D3D3D] text-sm">Team</p>
          <p className="text-[#3D3D3D] text-sm">Contact us</p>
        </div>
        <div>
          <button className="bg-[#075AAA] text-[#FFFFFF] rounded-lg w-[153px] p-3">
            Download App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
