import Image from "next/image";
import socials from "../../../public/Frame 247.svg";

const SocialProof = () => {
  return (
    <div className="flex items-center justify-center mb-10">
      <div className="border rounded-2xl p-4 max-md:p-2">
        <Image src={socials} alt="social proof" />
      </div>
    </div>
  );
};

export default SocialProof;
