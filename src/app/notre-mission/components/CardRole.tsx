import Image from "next/image";

function CardRole({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center bg-secondary p-8 rounded-3xl h-96 text-tertiary lg:w-[21rem] lg:h-auto lg:justify-normal 2xl:w-[28rem]">
      <Image src={img} alt="role-1" className="mb-4" />
      <h3 className="text-xl font-emOne uppercase mb-4 text-center">{title}</h3>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}

export default CardRole;
