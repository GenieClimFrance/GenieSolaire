import Image from "next/image";
import history from "../../../public/history-img.png";
import Link from "next/link";
import Article from "./components/Article";

function page() {
  return (
    <>
      <header className="flex flex-col lg:flex-row bg-[url('/hero-mobile-pages.png')] lg:bg-[url('/hero-desktop-history.png')] bg-cover bg-center bg-no-repeat px-8 py-12 lg:px-20 lg:items-center 2xl:px-52">
        <div className="lg:w-2/3 lg:px-16">
          <h1 className="text-4xl font-emOne uppercase text-tertiary mb-8 lg:mb-10">
            Notre{" "}
            <span className="text-primary bg-tertiary rounded-full px-2 lg:px-4">
              mission
            </span>
          </h1>
          <p className="text-xl font-kollektif text-tertiary">
            <span className="font-kollektif font-bold">Génie clim france</span>,
            une équipe de professionnels agréés
          </p>
          <p className="text-xl font-kollektif text-tertiary 2xl:pr-36">
            Nous sommes fiers de la qualité de notre travail, de nos tarifs
            compétitifs et des résultats que nous offrons en tous points
            irréprochables.
          </p>
          <Link
            href="/eligibility"
            className="btn lg:btn-lg xl:btn-lg bg-secondary border-none text-white w-fit self-center text-md xl:text-lg font-bold uppercase mt-4 px-4 rounded-full hover:bg-secondary/80 lg:mt-16"
          >
            Nous contacter
          </Link>
        </div>
        <div className=" flex justify-center items-center lg:w-1/3">
          <Image src={history} alt="logo" className="mt-16" />
        </div>
      </header>
      <Article />
    </>
  );
}

export default page;
