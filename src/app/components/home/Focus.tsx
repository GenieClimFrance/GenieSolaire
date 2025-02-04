"use client";

import { useState } from "react";
import Image from "next/image";
import panneausolaire from "@/../public/panneausolaire.png";
import FocusButton from "./FocusButton";

export default function Focus() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <div className="relative flex justify-center items-center mt-10 w-full">
      <Image
        src={panneausolaire}
        alt="Panneau solaire"
        className="w-[90%] mr-auto"
      />

      <FocusButton
        id="technologie"
        label="Technologie"
        positionClasses="absolute top-[25%] left-[30%]"
        expandedWidth="w-24"
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
      />

      <FocusButton
        id="design"
        label="Design"
        positionClasses="absolute top-[45%] right-[10%]"
        expandedWidth="w-16"
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
      />

      <FocusButton
        id="resistance"
        label="Résistance"
        positionClasses="absolute bottom-[20%] left-[15%]"
        expandedWidth="w-20"
        hoveredButton={hoveredButton}
        setHoveredButton={setHoveredButton}
      />
    </div>
  );
}
