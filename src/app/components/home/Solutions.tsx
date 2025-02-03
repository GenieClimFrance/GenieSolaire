import pac from "../../../../public/icon/pac.svg";
import isolation from "../../../../public/icon/isolation.svg";
import menuiseries from "../../../../public/icon/menuiseries.svg";
import vmc from "../../../../public/icon/vmc.svg";
import ballon from "../../../../public/icon/ballon.svg";
import ButtonSolution from "./ButtonSolution";

function Solutions() {
  const solutions = [
    {
      id: 1,
      icon: pac,
      title: "Pompe à chaleur",
      link: "/services/pompe-a-chaleur",
    },
    {
      id: 2,
      icon: ballon,
      title: "Ballon thermodynamique",
      link: "/services/ballon-thermodynamique",
    },
    { id: 3, icon: isolation, title: "Isolation", link: "/services/isolation" },
    { id: 4, icon: vmc, title: "VMC", link: "/services/vmc" },
    {
      id: 5,
      icon: menuiseries,
      title: "Menuiserie",
      link: "/services/menuiserie",
    },
  ];
  return (
    <section className="flex flex-col gap-4 p-8 xl:px-20 2xl:px-56 lg:my-10">
      <h3 className="text-xl font-emOne uppercase after:content-[''] after:mt-4 after:block after:w-14 after:h-[0.35rem]  after:bg-primary lg:text-2xl lg:px-[8.5rem] 2xl:text-3xl">
        NOS SOLUTIONS POUR VOTRE RÉNOVATION D&apos;AMPLEUR
      </h3>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 lg:px-[8.5rem] 2xl:pl-36 2xl:pr-0 lg:gap-6 mt-10">
        {solutions.map((solution) => (
          <ButtonSolution
            key={solution.id}
            icon={solution.icon}
            title={solution.title}
            link={solution.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Solutions;
