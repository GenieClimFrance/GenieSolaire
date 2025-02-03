"use client";

import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { scrollToElement } from "@/app/Utils/SmoothScroll";

export default function Buttons() {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-16 justify-center items-center absolute top-[19.5rem] lg:top-[13.75rem] xl:top-[14.5rem] 2xl:top-[14.5rem] w-full">
      <Link
        href="#contact-form"
        onClick={(e) => scrollToElement(e, "#contact-form")}
      >
        <button className="btn btn-lg w-[24rem] lg:h-[5rem] shadow-md flex items-center justify-between bg-primary border-none text-white text-md xl:text-lg font-bold uppercase mt-4 rounded-xl hover:bg-secondary lg:mt-16">
          Obtenir un devis
          <IoIosArrowForward className="ml-2" />
        </button>
      </Link>
      <Link href="/eligibility">
        <button className="btn btn-lg bg-tertiary lg:h-[5rem] shadow-md border-none text-secondary self-center text-md xl:text-lg font-bold uppercase mt-2 rounded-xl hover:bg-secondary hover:text-white lg:mt-16">
          Estimer mes aides financières
          <IoIosArrowForward className="ml-2" />
        </button>
      </Link>
    </div>
  );
}
