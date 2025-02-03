import Agency from "./Agency";
import OurRole from "./OurRole";
import OurTeam from "./OurTeam";

function Article() {
  return (
    <article className="px-8 py-12 lg:px-28 2xl:px-64">
      <h2 className="text-xl lg:text-2xl 2xl:text-3xl font-emOne uppercase text-secondary mb-4 after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2 after:mb-4">
        Qui somme nous ?
      </h2>
      <p className="font-kollektif mt-4 lg:text-lg 2xl:text-xl">
        Depuis notre création, nous n&apos;avons pas ménagé nos efforts pour
        gagner et entretenir notre statut d&apos;entreprise de construction et
        rénovation de référence à Bordeaux et sur l&apos;ensemble du territoire
        français.
      </p>
      <p className="font-kollektif mt-4 lg:text-lg 2xl:text-xl">
        Nous offrons à nos clients un large choix de services, quelque soit
        leurs besoins. Peu importe votre projet, notre équipe de professionnels
        est là pour concrétiser vos désirs.
      </p>
      <p className="font-kollektif mt-4 lg:text-lg 2xl:text-xl">
        <span className="font-bold text-primary">Contactez-nous</span>, et voyez
        en quoi nous pouvons vous aider.
      </p>
      <OurRole />
      <OurTeam />
      <Agency />
    </article>
  );
}

export default Article;
