import Form from "./components/Form";
import FormDevis from "../components/home/FormDevis";
function page() {
  return (
    <>
      <header className="lg:bg-[url('/img-formulaire.png')] bg-[url('/hero-mobile-pages.png')] bg-cover bg-center bg-no-repeat flex p-4 font-kollektif lg:p-0 lg:pr-20">
        <aside className="hidden text-4xl font-emOne uppercase lg:flex lg:flex-col lg:items-center lg:justify-center text-primary mb-8 w-1/2 lg:mb-10 p-4">
          <div className="text-white text-2xl font-emOne flex flex-col justify-center uppercase bg-primary bg-opacity-90 rounded-xl px-12 w-96 h-96">
            <p className="text-9xl font-emOne">1€</p>
            <p className="text-2xl font-emOne uppercase">
              Bénéficiez de toute votre installation pour seulement 1€*
            </p>
            <p className="text-xs font-emOne uppercase mt-6">
              Testez votre éligibilité dès maintenant
            </p>
          </div>
        </aside>
        <Form />
      </header>
      <article className="flex flex-col items-center px-8 py-12 lg:px-28 lg:py-24 lg:items-start 2xl:px-40">
        <h2 className=" text-2xl font-emOne uppercase text-secondary pb-8 after:content-[''] after:block after:w-10 after:h-1 after:bg-primary  after:mt-4">
          Un accompagnement 100% personnalisé à chaque projet
        </h2>
        <p className="text-lg font-kollektif text-secondary pb-8">
          Notre cabinet vous accompagne dans le financement de votre rénovation
          énergétique. Notre programme de rénovation énergétique est un
          dispositif qui s&apos;inscrit dans le cadre des certificats
          d&apos;énergie CEE. Ce dispositif a été mis en place depuis plus de
          deux ans en France
        </p>
        <p className="text-xl font-bold font-kollektif text-secondary mb-16">
          Rénover votre logement n&apos;a jamais été aussi facile avec GENIE
          CLIM FRANCE.
        </p>
        <FormDevis isServicePage={true} />
      </article>
    </>
  );
}

export default page;
