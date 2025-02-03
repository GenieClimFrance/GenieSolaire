import CardRole from "./CardRole";
import france from "../../../../public/icon/france.svg";
import hands from "../../../../public/icon/hands.svg";
import calculator from "../../../../public/icon/calculator.svg";

const cards = [
  {
    img: france,
    title: "Intervention dans toute la France",
    description:
      "Notre entreprise assure la gestion de dossier pour l'installation d'équipement thermique, de climatisation et d'isolation, intervenant dans toute la France. Nous somme actuellement présent dans 4 départements en France.",
  },
  {
    img: hands,
    title: "Nos équipes d'experts s'occupe de tout !",
    description:
      "Étude de votre dossier, gestion des formalités administratives, exécution des travaux, ...",
  },
  {
    img: calculator,
    title: "Un outil pour calculer vos aides financières",
    description:
      "Découvrez notre outil conçu pour vous aidez à calculer vos aides financières. Simple et intuitif, il vous permet d'estimer rapidement les subventions, crédits d'impôt et autres aides disponibles en fonction de la situation de votre logement.",
  },
];

function OurRole() {
  return (
    <>
      <h3 className="text-xl lg:text-2xl font-emOne uppercase text-secondary mb-4 mt-8 lg:mt-16 lg:mb-2 2xl:text-3xl">
        Notre rôle ?
      </h3>
      <p className="font-emOne lg:text-xl 2xl:text-2xl uppercase after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2 after:mb-4 lg:mb-10">
        Gérer et réaliser vos travaux de rénovation énergétique
      </p>
      <div className="flex flex-wrap gap-4 lg:flex-row lg:justify-between">
        {cards.map((card, index) => (
          <CardRole key={index} {...card} />
        ))}
      </div>
    </>
  );
}

export default OurRole;
