import { NumberTicker } from "@/components/number-ticker";

function Stats() {
  return (
    <section className="flex flex-col md:flex-row xl:w-full items-center justify-center bg-secondary border-2 border-primary rounded-3xl p-8 md:p-10 mt-10 lg:mt-20 text-white font-emOne">
      <ul className="flex flex-col md:flex-row items-center  lg:gap-20 xl:gap-28 justify-center gap-10 uppercase">
        <li className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker
              value={460}
              className="text-5xl text-white md:text-3xl lg:text-5xl text-center"
            />
            <span className="text-5xl text-white lg:text-5xl">W</span>
          </div>
          <p className="text-lg lg:text-sm text-center">PUISSANCE</p>
        </li>
        <li className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker
              value={23.6}
              className="text-5xl lg:text-5xl text-center text-white"
            />
            <span className="text-5xl lg:text-5xl text-white">%</span>
          </div>
          <p className="text-lg lg:text-sm text-center text-nowrap">
            Efficacité de Conversion
          </p>
        </li>
        <li className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker
              value={30}
              className="text-5xl lg:text-5xl text-center text-white"
            />
            <span className="text-5xl lg:text-5xl text-white ml-2">ans</span>
          </div>
          <p className="text-lg lg:text-sm text-center text-nowrap">
            Garantie de Performance
          </p>
        </li>
        <li className="flex flex-col items-center">
          <div className="flex items-center">
            <NumberTicker
              value={250}
              className="text-5xl lg:text-5xl text-center text-white"
            />
            <span className="text-5xl lg:text-5xl text-white ml-2">kg</span>
          </div>
          <p className="text-lg lg:text-sm text-center text-nowrap">
            CO₂ Évitée par An
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Stats;
