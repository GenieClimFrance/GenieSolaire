import { services } from "@/app/data/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import Buttons from "./components/Buttons";
import ProgressBar from "./components/ProgressBar";
import Accordion from "./components/Accordion";
import BrandBanner from "./components/BrandBanner";
import MidBanner from "./components/MidBanner";
import FormDevis from "@/app/components/home/FormDevis";

type Props = {
  params: Promise<{
    name: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  const { name } = await params;
  const service = services[name];

  if (!service) {
    notFound();
  }

  return (
    <>
      <div className="relative">
        <header
          className={`relative flex flex-col items-center ${service.bgImage} h-[22.5rem] lg:h-[20.5rem] xl:h-[21rem] bg-cover bg-center bg-no-repeat px-8 py-24 lg:px-20 2xl:px-40`}
        >
          <div className="absolute inset-0 bg-black/30" />
          <Image
            src={service.icon}
            alt={service.title}
            width={80}
            height={80}
            className={`brightness-0 invert ${
              service.name === "ballon-thermodynamique"
                ? "w-16 h-16"
                : "w-20 h-20"
            }`}
          />
          <div className="relative z-5 lg:w-2/3 lg:px-16">
            <h1 className="text-3xl text-center mt-8 font-emOne uppercase text-tertiary">
              {service.title}
            </h1>
          </div>
        </header>
        <Buttons />
      </div>
      <div className="flex flex-col lg:flex-row lg:px-40 2xl:px-96 lg:gap-8 lg:pt-24 lg:mb-16">
        <div className="flex flex-col flex-1 lg:gap-8">
          <article className="px-8 lg:px-0 pt-32 lg:pt-0">
            <h2 className="text-xl 2xl:text-2xl font-emOne uppercase after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4">
              {service.titleArticle}
            </h2>
            <p className="text-lg 2xl:text-xl lg:text-base mt-8">
              {service.text1}
            </p>
            <p className="text-lg 2xl:text-xl lg:text-base mt-4">
              {service.text2}
            </p>
            <p className="text-lg 2xl:text-xl lg:text-base mt-4">
              {service.text3}
            </p>
          </article>
          <aside className="flex flex-col justify-center gap-4 bg-[#f5f5f5] m-8 rounded-xl p-8 shadow-xl lg:mx-0 lg:m-0">
            <ProgressBar percentage={service.eco} title="Économie" />
            <ProgressBar percentage={service.efficiency} title="Efficacité" />
            <ProgressBar percentage={service.esthetic} title="Esthétique" />
          </aside>
        </div>
        <div className="flex justify-center m-8 lg:w-1/2 lg:h-[37rem] 2xl:h-[39rem] lg:m-0">
          <Image
            src={service.image2}
            alt={service.title}
            className=" rounded-3xl shadow-xl lg:w-full 2xl:rounded-[2rem] object-cover"
          />
        </div>
      </div>
      {(service.name === "pompe-a-chaleur" ||
        service.name === "isolation" ||
        service.name === "ballon-thermodynamique") &&
        service.accordion && (
          <Accordion sections={service.accordion.sections} />
        )}
      <BrandBanner />
      <MidBanner />
      <section className="flex flex-col items-center justify-center gap-8 text-center lg:mb-8 ">
        <h3 className="text-2xl 2xl:text-3xl font-emOne uppercase text-center after:content-[''] after:block after:w-16 after:h-1 after:bg-primary after:mt-4 after:mx-auto mt-16">
          Prêt à faire de réelles économies ?
        </h3>
        <p className="text-lg 2xl:text-xl mx-8 lg:text-base mt-8 lg:mx-48 2xl:mx-[32rem] xl:mx-[20rem]">
          Contactez un de nos experts chez GENIECLIM FRANCE pour bénéficier
          d&apos;une étude gratuite et personnalisée de votre dossier afin de
          trouver la solution la plus adaptée à votre logement.
        </p>
        <p className="text-lg 2xl:text-xl mx-8 lg:text-base 2xl:mx-[32rem]">
          Nous vous guiderons également pour découvrir les aides financières
          auxquelles vous pourriez bénéficier.
        </p>
        <FormDevis isServicePage={true} />
      </section>
    </>
  );
}
