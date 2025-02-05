import Link from "next/link";

function Hero() {
  return (
    <header className="relative min-h-[50vh] lg:h-[90vh] 2xl:h-[85vh] bg-cover bg-center bg-no-repeat lg:bg-[url('/hero-desktop.webp')] bg-[url('/hero-mobile.png')]">
      <div className="container xl:mx-0 p-8 lg:px-20 xl:px-28 lg:py-12 xl:py-20 2xl:p-28 2xl:px-80">
        <div className="max-w-[50rem] flex flex-col items-center lg:items-start">
          <h1 className="text-white text-2xl lg:text-5xl xl:text-6xl lg:leading-tight xl:leading-tight uppercase font-bold mb-8">
            Votre installation de panneaux solaires{" "}
            <span className="text-primary bg-tertiary rounded-full px-2 lg:px-5 text-nowrap">
              sur mesure
            </span>
          </h1>
          <p className="text-white text-xl lg:text-3xl font-bold uppercase lg:pr-72 xl:mt-8">
            Transformez votre toit en source d'énergie ! économisez dès
            aujourd'hui avec nos solutions solaires.
          </p>
          <div className="flex flex-col pt-8 lg:flex-row lg:items-center lg:mt-10 xl:mt-16 font-emOne lg:gap-8 xl:gap-10">
            <Link
              href="/#contact-form"
              className="btn xl:btn-lg bg-secondary border-none text-white text-md xl:text-lg font-bold uppercase mt-4 lg:mt-0 px-4 rounded-full hover:bg-secondary/80"
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Hero;
