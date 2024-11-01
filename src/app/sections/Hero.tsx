import Image from "next/image";
import phone from "../../../public/Frame 13x.png";

const Hero = () => {
  return (
    <div className="my-10 max-sm:my-2 max-md:min-h-screen items-center justify-center flex-col flex w-full">
      <div className="border border-[#2382DD] rounded-full border-dashed p-2 mb-2 max-md:mb-4 w-[313px] items-center flex justify-center">
        <p className="text-[#075AAA] font-semibold text-sm">
          10.3% average investor returns in 2023
        </p>
      </div>
      <div className="max-w-[985px] w-full px-10 items-center justify-center flex">
        <h1 className="text-[#2E2E2E] font-bold uppercase text-7xl max-sm:text-4xl max-lg:text-6xl max-md:mb-3 text-center">
          Turn Your Savings Into{" "}
          <span className="text-[#075AAA]">Steady Income</span>
        </h1>
      </div>
      <div className="max-w-[494px] max-md:max-w-[334px] max-md:mb-10 max-md:px-0 px-3 my-3">
        <p className="text-[#5C5C5C] text-center ">
          Enjoy peace of mind with regular dividend payments while preserving
          your hard-earned savings for the future
        </p>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <Image
          src={phone}
          alt="phone"
          className="object-contain max-md:w-[410px]"
          priority={true}
          width={498}
          height={434}
          loading="eager"
        />
        <div
          className="absolute border-b bottom-0 w-full h-[238px] bg-gradient-to-b opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(white, rgba(77, 168, 255, 0.48) 71%)",
            filter: "blur(4px)",
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
