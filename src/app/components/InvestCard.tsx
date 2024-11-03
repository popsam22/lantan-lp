import Image from "next/image";
import playstore from "../../../public/btn-playstore.svg";
import appstore from "../../../public/btn-appstore.svg";
import clsx from "clsx";
const InvestCard = ({
  header,
  title,
  subTitle,
  button,
  media,
  buttonText,
  reverse,
}: InvestCardProps) => {
  return (
    <div
      className={clsx(
        "flex justify-evenly max-lg:gap-5 max-md:flex-col py-10 max-md:py-5 max-md:px-0 px-3",
        reverse ? "flex-row-reverse" : ""
      )}
    >
      <div className="flex max-w-[420px] max-lg:max-w-[300px] flex-col">
        <h1
          className={clsx(
            "text-lg font-semibold mb-3 max-md:mb-3",
            reverse ? "text-[#01BD5D]" : "text-[#075AAA]"
          )}
        >
          {header}
        </h1>
        <p className="text-[#3D3D3D] text-3xl max-lg:text-2xl font-semibold max-w-[370px] max-lg:max-w-[290px] max-lg:tracking-normal tracking-wide mb-3">
          {title}
        </p>
        <p className="text-[#5C5C5C] text-sm mb-10 max-lg:mb-5 max-md:mb-8">
          {subTitle}
        </p>
        {button ? (
          <button className="bg-[#F1F6FE] w-[153px] py-4 px-5 text-[#206AB2] rounded-lg font-semibold text-sm max-md:mb-10">
            {buttonText}
          </button>
        ) : (
          <div className="flex gap-4 mb-10">
            <Image src={appstore} alt="appstore logo" />
            <Image src={playstore} alt="playstore logo" />
          </div>
        )}
      </div>
      <div>
        <Image
          src={media}
          alt="portfolio"
          width={688}
          height={400}
          className="object-contain mb-10"
          priority={true}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default InvestCard;
