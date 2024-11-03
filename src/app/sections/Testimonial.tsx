import Image from "next/image";
import arrow from "../../../public/Arrow_Right_MD.svg";
import testimonial_1 from "../../../public/Frame 254.png";
import testimonial_2 from "../../../public/Frame 255.png";

const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full mb-10 max-md:mb-5">
        <div className="flex justify-center items-center gap-4 max-w-[438px] p-3 cursor-pointer">
          <p className="text-[#075AAA] font-semibold uppercase text-sm ">
            Testimonials
          </p>
          <Image
            src={arrow}
            alt="arrow right"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>
        <p className="text-[#3D3D3D] font-semibold text-3xl max-lg:text-2xl max-w-[438px] text-center p-3">
          Why Customers Trust Us
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="border p-5 max-md:p-2 rounded-xl items-center gap-7 max-md:gap-3 flex flex-col max-w-[900px] mb-20">
          <div className="relative">
            <Image
              src={testimonial_2}
              alt="testimonial"
              className="w-full h-full object-cover max-md:w-[380px] max-md:h-[119px] rounded-lg"
            />
            <div className="absolute inset-0 flex gap-16 max-md:gap-5 justify-between p-4 max-md:p-2 text-white">
              <div className="flex flex-col gap-2 max-md:gap-1 justify-center">
                <p className="text-2xl font-semibold max-md:text-lg">
                  Felix Emman
                </p>
                <p className="text-sm max-md:text-xs">CEO, Bibu LTD</p>
              </div>
              <div className="flex justify-center items-center max-w-[345px] max-md:max-w-[210px]">
                <p className="text-sm max-md:text-xs">
                  Lantan has been a game-changer for my finances. The rental
                  income provides me with peace of mind and financial stability.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={testimonial_1}
              alt="testimonial"
              className="w-full h-full object-cover max-md:w-[380px] max-md:h-[119px] rounded-lg"
            />
            <div className="absolute inset-0 flex gap-16 max-md:gap-5 justify-between p-4 max-md:p-2 text-white">
              <div className="flex flex-col gap-2 max-md:gap-1 justify-center">
                <p className="text-2xl font-semibold max-md:text-lg">
                  Felix Emman
                </p>
                <p className="text-sm max-md:text-xs">CEO, Bibu LTD</p>
              </div>
              <div className="flex justify-center items-center max-w-[345px] max-md:max-w-[210px]">
                <p className="text-sm max-md:text-xs">
                  “I’ve built a growing portfolio with Lantan. The best part?
                  It’s so easy, and I can track my earnings anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={testimonial_2}
              alt="testimonial"
              className="w-full h-full object-cover max-md:w-[380px] max-md:h-[119px] rounded-lg"
            />
            <div className="absolute inset-0 flex gap-16 max-md:gap-3 justify-between p-4 max-md:p-2 text-white">
              <div className="flex flex-col gap-2 max-md:gap-1 justify-center">
                <p className="text-2xl font-semibold max-md:text-lg">
                  Felix Emman
                </p>
                <p className="text-sm max-md:text-xs">CEO, Bibu LTD</p>
              </div>
              <div className="flex justify-center items-center max-w-[345px] max-md:max-w-[210px]">
                <p className="text-sm max-md:text-xs">
                  Lantan has been a game-changer for my finances. The rental
                  income provides me with peace of mind and financial stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
