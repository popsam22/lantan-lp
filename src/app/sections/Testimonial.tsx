import Image from "next/image";
import arrow from "../../../public/Arrow_Right_MD.svg";
import testimonial_1 from "../../../public/Frame 253.svg";
import testimonial_2 from "../../../public/Frame 254.svg";

const Testimonial = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full mb-10">
        <div className="flex justify-center items-center gap-4 max-w-[438px] p-3">
          <p className="text-[#075AAA] font-semibold uppercase text-sm">
            Testimonials
          </p>
          <Image src={arrow} alt="arrow right" width={24} height={24} />
        </div>
        <p className="text-[#3D3D3D] font-semibold text-3xl max-w-[438px] text-center p-3">
          Why Customers Trust Us
        </p>
      </div>
      <div className="flex items-center justify-center">
        <div className="border p-5 rounded-xl items-center gap-7 flex flex-col max-w-[900px]">
          <Image
            src={testimonial_1}
            alt="testimonial"
            className="cursor-pointer"
          />
          <Image
            src={testimonial_2}
            alt="testimonial"
            className="cursor-pointer"
          />
          <Image
            src={testimonial_1}
            alt="testimonial"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
