import isOpen from "@/app/Utils/OpenOrClose";
import Image from "next/image";

function CardAgency({
  name,
  address,
  zip,
  city,
  phone,
  link,
}: {
  name: string;
  address: string;
  zip: string;
  city: string;
  phone: string;
  link: string;
}) {
  return (
    <div className="w-96 h-fit bg-[#F5F5F5] p-6 rounded-3xl rounded-bl-none text-secondary relative shadow-xl flex flex-col lg:w-[48%] lg:h-auto">
      <p className="text-sm mb-4 font-kollektif 2xl:text-lg">{isOpen()}</p>
      <h4 className="text-lg font-bold text-primary uppercase font-kollektif mb-4 2xl:text-2xl">
        {name}
      </h4>
      <p className="font-kollektif 2xl:text-xl">{address}</p>
      <p className="font-kollektif 2xl:text-xl">
        {zip} {city}
      </p>
      <a
        href={`tel:${phone}`}
        className="bg-secondary text-white rounded-full px-4 py-1 w-fit mt-4 font-kollektif cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 2xl:text-lg"
      >
        {phone}
      </a>
      <a href={link} target="_blank">
        <Image
          src="/icon/arrowCircle.svg"
          alt="arrow"
          width={32}
          height={32}
          className="absolute right-6 bottom-8 lg:bottom-6 hover:scale-110 transition-all duration-300"
        />
      </a>
    </div>
  );
}

export default CardAgency;
