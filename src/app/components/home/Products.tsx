import Image from "next/image";
import install from "@/../public/instal.png";
import Focus from "./Focus";
import Stats from "./Stats";
import Onduleur from "./Onduleur";

function Article() {
  return (
    <article
      id="nos-solutions"
      className="flex flex-col lg:items-center lg:justify-center xl:gap-14 p-8 xl:px-40 lg:p-24 lg:px-40 2xl:px-72"
    >
      <section className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-1/2 2xl:text-xl">
          <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold uppercase pb-8 font-emOne after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary">
            Nos solutions solaires
          </h2>
          <p className="pb-4 font-bold font-kollektif lg:pt-6">
            Découvrez un panneau solaire qui combine à la fois rendement optimal
            et économies durables.
          </p>
          <p className="pb-4 font-kollektif">
            Fruit des dernières avancées en matière de technologie
            photovoltaïque, notre solution est pensée pour offrir un équilibre
            parfait entre{" "}
            <span className="font-bold">
              performance énergétique et rapport qualité-prix.
            </span>{" "}
            Optez pour un investissement intelligent, où la qualité supérieure
            et l'efficacité s'unissent pour maximiser votre production
            d'énergie, sans compromis.
          </p>
          <p className="pb-4 font-kollektif">
            Faites le choix de l'excellence solaire avec Genie Solaire.
          </p>
          <Image src={install} alt="Installation solaire" />
        </div>
        <div className="lg:w-1/2">
          <Focus />
        </div>
      </section>
      <Stats />
      <Onduleur />
    </article>
  );
}

export default Article;
