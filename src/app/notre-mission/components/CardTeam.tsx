import Image, { StaticImageData } from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

interface CardTeamProps {
  img: StaticImageData;
  name: string;
  role: string;
  mail: string;
  phone?: string;
}

function CardTeam({ img, name, role, mail, phone }: CardTeamProps) {
  return (
    <div className="flex items-center justify-end bg-[#F5F5F5] p-6 rounded-3xl rounded-bl-none text-secondary relative w-96 h-32 shadow-xl lg:w-[30%] lg:p-0">
      <Image
        src={img}
        alt={name}
        width={140}
        height={140}
        className="absolute left-0 bottom-0"
      />
      <div className="flex flex-col w-1/2 lg:pl-36 lg:w-full 2xl:pl-48">
        <h3 className=" font-emOne uppercase 2xl:text-xl text-nowrap">
          {name}
        </h3>
        <p className="text-xs text-primary mb-2 uppercase 2xl:text-sm">
          {role}
        </p>
        <div className="flex gap-4 items-center">
          <a
            href={`mailto:${mail}`}
            className="text-xs 2xl:text-sm hover:text-primary"
          >
            <IoMail className="text-2xl" />
          </a>
          <a
            href={`tel:${phone ? phone : ""}`}
            className="text-xs 2xl:text-sm hover:text-primary"
          >
            <FaPhoneVolume className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTeam;
