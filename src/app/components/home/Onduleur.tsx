import imgOnduleur from "@/../public/onduleur.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

function Onduleur() {
  return (
    <section
      className={twMerge(
        "flex flex-col",
        "h-[50rem] lg:h-fit",
        "items-center lg:items-start",
        "lg:pl-60 lg:ml-20",
        "gap-4 lg:gap-0",
        "bg-secondary",
        "border-2 border-primary rounded-3xl",
        "p-8 mt-10 mb-40 lg:mb-0 lg:mt-20",
        "text-white font-emOne",
        "relative"
      )}
    >
      <h2
        className={twMerge(
          "text-2xl lg:text-2xl 2xl:text-4xl",
          "font-bold uppercase",
          "pb-1",
          "font-emOne text-primary",
          "text-center"
        )}
      >
        Pas de panneaux sans onduleur
      </h2>
      <h3
        className={twMerge(
          "text-lg lg:text-base 2xl:text-xl",
          "font-bold italic uppercase",
          "pb-4",
          "font-emOne",
          "text-center"
        )}
      >
        Solax x1 Hybrid-G4
      </h3>
      <p className="font-kollektif">
        Pour tirer le meilleur parti de vos panneaux solaires, l'onduleur joue
        un rôle clé. Nous avons choisi l'excellence avec le Solax X1 Hybrid-G4,
        un onduleur hybrid de dernière génération conçu pour{" "}
        <span className="font-bold text-primary">
          maximiser l'efficacité de votre installation photovoltaïque
        </span>
      </p>
      <ul
        className={twMerge(
          "flex flex-col",
          "gap-4 mt-6",
          "text-xl uppercase",
          "w-full"
        )}
      >
        {["Puissance", "Rendement", "Contrôle"].map((item) => (
          <li
            key={item}
            className={twMerge(
              "bg-[#333333]",
              "w-full lg:w-1/3",
              "text-center py-2",
              "border-l-2 border-primary"
            )}
          >
            {item}
          </li>
        ))}
      </ul>
      <Image
        src={imgOnduleur}
        alt="Onduleur"
        className={twMerge(
          "absolute",
          "-bottom-[10rem] lg:top-1/2",
          "lg:-translate-y-1/2",
          "lg:-left-32",
          "w-[80%] lg:w-[35%] xl:w-[30%]",
          "filter",
          "drop-shadow-[0_0_20px_rgba(235,202,78,0.5)]"
        )}
      />
    </section>
  );
}

export default Onduleur;
