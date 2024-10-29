import Image from "next/image";
import phone from "../../../public/Frame 13.svg";

const Hero = () => {
  return (
    <div className="mt-10 items-center justify-center flex-col flex min-h-screen w-full">
      <div className="border border-[#2382DD] rounded-full border-dashed p-2 mb-2 w-[313px] items-center flex justify-center">
        <p className="text-[#075AAA] font-semibold text-sm ">
          10.3% average investor returns in 2023
        </p>
      </div>
      <div className="max-w-[985px] w-full px-10 items-center justify-center flex">
        <h1 className="text-[#2E2E2E] font-bold uppercase text-7xl text-center">
          Turn Your Savings Into{" "}
          <span className="text-[#075AAA]">Steady Income</span>
        </h1>
      </div>
      <div className="max-w-[494px] px-3 my-3">
        <p className="text-[#5C5C5C] text-center">
          Enjoy peace of mind with regular dividend payments while preserving
          your hard-earned savings for the future
        </p>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <Image src={phone} alt="phone" className="object-contain" />
        <div
          className="absolute bottom-0 w-full h-[238px] bg-gradient-to-b opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, white, rgba(77, 168, 255, 0.48) 71%)",
            filter: "blur(4px)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
