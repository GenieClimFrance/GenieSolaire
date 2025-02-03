import CardAgency from "./CardAgency";

const cards = [
  {
    name: "Siege Social - GenieClim France",
    address: "20 rue Jean Mermoz",
    zip: "33185",
    city: "Le Haillan",
    phone: "+33 09 72 12 14 01",
    link: "https://g.co/kgs/669N5m5",
  },
  {
    name: "GenieClim Haut de France",
    address: "5 rue des Chauffours, Immeuble Ordinal / Les bureaux",
    zip: "95000",
    city: "Cergy",
    phone: "+33 09 72 12 14 01",
    link: "https://g.co/kgs/669N5m5",
  },
  {
    name: "GenieClim OCCITANIE",
    address: "4 rue Pierre Magnol, Mas de la Guarrigue",
    zip: "66600",
    city: "Rivesaltes",
    phone: "+33 09 72 12 14 01",
    link: "https://g.co/kgs/669N5m5",
  },
  {
    name: "GenieClim Bretagne",
    address: "33 BIS Passage d'Avenel",
    zip: "35400",
    city: "Fougères",
    phone: "+33 09 72 12 14 01",
    link: "https://g.co/kgs/669N5m5",
  },
];

function Agency() {
  return (
    <section id="retrouvez-nous" className="scroll-mt-24">
      <h3 className="text-xl font-emOne uppercase text-secondary mb-4 mt-8 lg:text-2xl lg:mt-16 2xl:text-3xl">
        Retrouvez-nous
      </h3>
      <p className="font-emOne uppercase text-primary after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-2 after:mb-4 lg:text-lg 2xl:text-xl">
        dans l&apos;une de nos agences
      </p>
      <div className="flex flex-wrap gap-14 mt-16 lg:gap-10">
        {cards.map((card) => (
          <CardAgency key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Agency;
