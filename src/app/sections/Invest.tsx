import Image from "next/image";
import arrow from "../../../public/Arrow_Right_MD.svg";
import InvestCard from "../components/InvestCard";
import img from "../../../public/earn.png";
import buyslot from "../../../public/invest.png";
import property from "../../../public/explore.png";

const Invest = () => {
  return (
    <div className="flex flex-col mb-5 w-full">
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center items-center gap-4 max-w-[438px] p-3">
          <p className="text-[#075AAA] font-semibold uppercase text-sm">
            How it works
          </p>
          <Image src={arrow} alt="arrow right" width={24} height={24} />
        </div>
        <p className="text-[#3D3D3D] font-semibold text-3xl max-md:text-2xl max-md:max-w-[356px] max-md:mb-2 max-w-[468px] text-center p-3">
          Build Your Investment Portfolio with Ease, Start Now
        </p>
      </div>
      <InvestCard
        header="Explore"
        title="Browse through our Verified Products"
        subTitle="Sign up in less than 3 minutes and discover a curated selection of trusted products, each verified for great returns"
        media={property.src}
      />
      <InvestCard
        header="Invest"
        title="Invest in any of our product of your choice"
        subTitle="Flexible investment options designed to help you build wealth on your terms."
        button={true}
        buttonText="Invest Now"
        media={buyslot.src}
        reverse={true}
      />
      <InvestCard
        header="Earn with us"
        title="Enjoy regular passive income with no effort"
        subTitle="Simply keep receiving ongoing income - no maintenance,
        no worries, just steady returns to support your lifestyle"
        button={true}
        buttonText="Invest Now"
        media={img.src}
      />
    </div>
  );
};

export default Invest;
