"use client";

import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

interface AccordionSection {
  title: string;
  content: (string | { text: string; isSubtitle: boolean })[];
}

interface AccordionProps {
  sections: AccordionSection[];
}

function Accordion({ sections }: AccordionProps) {
  const [openSection, setOpenSection] = useState<number>(0);

  const handleClick = (index: number) => {
    setOpenSection(openSection === index ? -1 : index);
  };

  return (
    <section className="flex flex-col mx-8 mb-8 lg:mx-40 gap-4 lg:mb-12 2xl:mx-96">
      {sections.map((section, index) => (
        <div
          key={section.title}
          className="collapse relative group lg:bg-[#f5f5f5] border-[1px] border-[#f5f5f5] [&:has(>input:checked)]:border-primary lg:rounded-xl p-4 lg:p-8 shadow-xl"
        >
          <div className="absolute left-2 top-2 bottom-2 w-3 rounded-full bg-gray-400 [&:has(+input:checked)]:bg-primary"></div>
          <input
            type="radio"
            name="my-accordion-1"
            checked={openSection === index}
            onChange={() => handleClick(index)}
          />
          <div
            className="absolute right-4 top-[1.5rem] lg:top-[2.2rem] lg:right-8 cursor-pointer z-10"
            onClick={() => handleClick(index)}
          >
            <IoIosArrowDropdown
              className={`text-primary w-10 h-10 lg:w-14 lg:h-14 transition-transform duration-300 ${
                openSection === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className="collapse-title text-xl font-medium cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <h3 className="ml-4 font-bold text-primary">{section.title}</h3>
          </div>
          <div className="collapse-content mx-4">
            {section.content.map((item, index) => (
              <p
                key={index}
                className={`mb-4 ${
                  typeof item === "string"
                    ? ""
                    : item.isSubtitle
                    ? "font-bold text-md my-4"
                    : ""
                }`}
              >
                {typeof item === "string" ? item : item.text}
              </p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Accordion;
