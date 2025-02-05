import Image from "next/image";
import imgGcf from "@/../public/img-gcf.png";

function Article() {
  return (
    <article className="flex flex-col lg:items-center lg:justify-center lg:px-40 xl:gap-14 lg:flex-row p-8 xl:px-40 lg:p-24 2xl:px-72">
      <div className="lg:w-1/2 2xl:text-xl">
        <h2 className="text-2xl lg:text-3xl 2xl:text-4xl font-bold uppercase pb-1 font-emOne">
          Génie Solaire france
        </h2>
        <h3 className="text-sm font-bold italic uppercase pb-4 2xl:text-xl after:content-[''] after:mt-2 after:block after:w-10 after:h-[0.35rem] after:bg-primary font-emOne">
          optez pour le solaire et rejoignez la révolution énergétique !
        </h3>
        <p className="pb-4 font-kollektif lg:pt-6">
          Quel que soit vos revenus ou bien les caractéristiques de votre
          maison, nous vous accompagnons pour trouver la solution la plus
          efficace répondant à vos besoins.
        </p>
        <p className="pb-4 font-kollektif">
          GENIE SOLAIRE FRANCE, c’est une équipe solide d’experts techniques qui
          oeuvrent pour rendre la rénovation énergétique plus sûre, plus
          accessible et à moindre coût.
        </p>
        <p className="pb-4 font-kollektif">
          Et bien-sûr, nous intervenons sur l'ensemble du territoire.
        </p>
      </div>
      <div className="lg:w-fit lg:pl-16">
        <Image src={imgGcf} alt="Génieclim france" />
      </div>
    </article>
  );
}

export default Article;
