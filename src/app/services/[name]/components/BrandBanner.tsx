import Image from "next/image";
import daikin from "../../../../../public/daikin.svg";
import hitachi from "../../../../../public/hitachi.svg";
import panasonic from "../../../../../public/panasonic.svg";
import lg from "../../../../../public/lg.svg";

function BrandBanner() {
  return (
    <div className="flex flex-col gap-10 py-12 justify-center items-center bg-secondary">
      <h3 className="text-2xl font-bold text-primary uppercase 2xl:text-4xl">
        Nous installons
      </h3>
      <div className="flex flex-col justify-center items-center gap-14 lg:flex-row lg:gap-14">
        <Image src={daikin} alt="Daikin" className="lg:w-48 2xl:w-64" />
        <Image src={hitachi} alt="Hitachi" className="lg:w-48 2xl:w-64" />
        <Image src={lg} alt="LG" className="lg:w-32 2xl:w-48" />
        <Image src={panasonic} alt="Panasonic" className="lg:w-48 2xl:w-64" />
      </div>
    </div>
  );
}

export default BrandBanner;
