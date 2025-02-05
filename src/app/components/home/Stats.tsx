function Stats() {
  return (
    <section className="flex flex-col lg:flex-row xl:w-full items-center justify-center bg-secondary border-2 border-primary rounded-3xl p-8 lg:p-10 mt-10 lg:mt-20 text-white font-emOne">
      <ul className="flex flex-col lg:flex-row items-center  lg:gap-20 xl:gap-28 justify-center gap-10 uppercase">
        <li>
          <p className="text-4xl lg:text-2xl text-center">460W</p>
          <p className="text-lg lg:text-sm text-center">PUISSANCE</p>
        </li>
        <li>
          <p className="text-4xl lg:text-2xl text-center">23,6%</p>
          <p className="text-lg lg:text-sm text-center text-nowrap">
            Efficacité de Conversion
          </p>
        </li>
        <li>
          <p className="text-4xl lg:text-2xl text-center">30 ans</p>
          <p className="text-lg lg:text-sm text-center text-nowrap">
            Garantie de Performance
          </p>
        </li>
        <li>
          <p className="text-4xl lg:text-2xl text-center w-full">250 kg</p>
          <p className="text-lg lg:text-sm text-center text-nowrap">
            CO₂ Évitée par An
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Stats;
