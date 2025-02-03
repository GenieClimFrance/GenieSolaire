import midBanner from "../../../../../public/midBannerServices.png";
import Image from "next/image";

function MidBanner() {
  return (
    <div className="flex flex-col justify-center items-center bg-primary pt-12 px-8 lg:flex-row lg:gap-12 lg:px-36 2xl:px-56 lg:pt-12 lg:justify-between lg:relative ">
      <div className="flex flex-col items-center lg:w-1/2">
        <h3 className="text-2xl font-bold text-tertiary uppercase leading-relaxed lg:text-4xl 2xl:text-5xl 2xl:leading-relaxed lg:leading-relaxed">
          Engagez-vous dans la{" "}
          <span className="text-primary bg-white rounded-full px-2 py-1 text-nowrap lg:px-4 lg:py-2">
            rénovation d&apos;ampleur
          </span>{" "}
          avec Génieclim
        </h3>
        <div className="flex flex-col items-center lg:flex-row lg:gap-12 lg:my-12 ">
          <div className="flex flex-col items-center ">
            <p className="text-7xl font-bold font-emOne text-white mt-16 lg:mt-0 lg:text-nowrap lg:text-5xl 2xl:text-7xl">
              + 1000
            </p>
            <p className="font-bold text-2xl font-kollektif text-white lg:text-lg lg:text-nowrap 2xl:text-2xl">
              logements rénovés
            </p>
          </div>
          <div className="divider divider-neutral lg:divider-horizontal w-1/2 mx-auto lg:mx-0 after:bg-white before:bg-white"></div>
          <div className="flex flex-col items-center">
            <p className="text-7xl font-bold font-emOne text-white lg:text-nowrap lg:text-5xl 2xl:text-7xl">
              35 M€
            </p>
            <p className="text-2xl font-bold font-kollektif text-white mb-16 lg:mb-0 lg:text-nowrap lg:text-lg 2xl:text-2xl">
              d&apos;aides financières
            </p>
          </div>
        </div>
      </div>
      <Image
        src={midBanner}
        alt="Mid Banner"
        className="lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2"
      />
    </div>
  );
}

export default MidBanner;
