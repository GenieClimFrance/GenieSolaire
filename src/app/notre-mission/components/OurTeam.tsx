import test from "../../../../public/test.png";
import CardTeam from "./CardTeam";

const cards = [
  {
    id: 1,
    img: test,
    name: "Camille Pernot",
    role: "Présidente",
    mail: "contact@genielimfrance.fr",
    phone: "07 69 76 26 36",
  },
  {
    id: 2,
    img: test,
    name: "Raphaël Pereira",
    role: "Directeur Technique",
    mail: "contact@genielimfrance.fr",
    phone: "07 69 76 26 36",
  },
  {
    id: 3,
    img: test,
    name: "Carla Gaurat",
    role: "Technico-Commercial",
    mail: "c.gaurat@genielimfrance.fr",
    phone: "07 69 76 26 36",
  },
  {
    id: 5,
    img: test,
    name: "Amélie Auger",
    role: "Analyste administrative",
    mail: "a.auger@genielimfrance.fr",
    phone: "07 69 76 26 36",
  },
  {
    id: 7,
    img: test,
    name: "Sylvie Maurat",
    role: "Téléprospectrice",
    mail: "call2@genielimfrance.fr",
    phone: "07 69 76 26 36",
  },
];

function OurTeam() {
  return (
    <>
      <div className="flex flex-col">
        <h3 className="text-xl lg:text-2xl font-emOne uppercase text-secondary mb-4 mt-8 lg:mb-2 lg:mt-16 2xl:text-3xl">
          Notre équipe
        </h3>
        <p className="font-emOne uppercase lg:text-xl text-primary after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2 after:mb-4 2xl:text-2xl">
          Expertise. Passion. Sourire.
        </p>
        <div className="flex flex-wrap gap-14 mt-16 lg:gap-10">
          {cards.map((card) => (
            <CardTeam key={card.id} {...card} />
          ))}
          <a
            href="https://fr.indeed.com/cmp/Genie-Clim-France/jobs"
            target="_blank"
            className="bg-primary text-tertiary w-full text-center py-10 rounded-lg shadow-xl uppercase font-emOne hover:bg-primary/80 transition-all duration-300 lg:w-[30%] flex justify-center items-center"
          >
            Nous rejoindre
          </a>
        </div>
      </div>
    </>
  );
}

export default OurTeam;
