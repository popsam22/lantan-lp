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
        "flex justify-between py-7 px-3",
        reverse ? "flex-row-reverse" : ""
      )}
    >
      <div className="flex max-w-[420px] flex-col">
        <h1
          className={clsx(
            "text-lg font-semibold mb-3",
            reverse ? "text-[#01BD5D]" : "text-[#075AAA]"
          )}
        >
          {header}
        </h1>
        <p className="text-[#3D3D3D] text-3xl font-semibold max-w-[370px] tracking-wide mb-3">
          {title}
        </p>
        <p className="text-[#5C5C5C] text-sm mb-10">{subTitle}</p>
        {button ? (
          <button className="bg-[#F1F6FE] w-[153px] py-4 px-5 text-[#206AB2] rounded-lg font-semibold text-sm">
            {buttonText}
          </button>
        ) : (
          <div className="flex gap-4">
            <Image src={appstore} alt="appstore logo" />
            <Image src={playstore} alt="playstore logo" />
          </div>
        )}
      </div>
      <div>
        <Image src={media} alt="portfolio" width={688} height={400} />
      </div>
    </div>
  );
};

export default InvestCard;
