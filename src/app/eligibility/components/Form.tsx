"use client";

import { useState } from "react";
import Link from "next/link";

function Form() {
  const currentYear = new Date().getFullYear();
  const [isEligible, setIsEligible] = useState(false);
  const [year, setYear] = useState<string>("");
  const [isOwner, setIsOwner] = useState<string>("proprietaire");

  const isHouseFifteenYearsOld = (constructionYear: number): boolean => {
    return currentYear - constructionYear >= 15;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEligible(true);
  };

  const handleReset = () => {
    setIsEligible(false);
  };

  const smoothScroll = (targetId: string) => {
    const element = document.querySelector(targetId);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScroll("#contact-form");
  };

  if (isEligible) {
    if (isOwner === "proprietaire" && isHouseFifteenYearsOld(parseInt(year))) {
      return (
        <div className="flex flex-col items-center w-screen justify-center gap-8 bg-white p-4 pt-10 rounded-xl lg:w-1/2 lg:rounded-none lg:max-h-full">
          <h2 className="text-3xl lg:text-4xl font-kollektif font-bold text-secondary text-center after:content-[''] after:block after:h-1 after:bg-primary after:mt-10 after:rounded-full">
            Vous êtes éligible !
          </h2>
          <p className="text-center uppercase text-xl mt-4">
            Alors n&apos;attendez plus
          </p>
          <Link
            href="#contact-form"
            onClick={scrollToContact}
            className="btn btn-lg rounded-full bg-primary text-white hover:bg-primary/80 uppercase px-8"
          >
            Contactez-nous
          </Link>
          <p className="text-center uppercase text-lg">OU</p>
          <button
            onClick={handleReset}
            className="btn rounded-full bg-white text-primary border-primary hover:bg-primary hover:text-white uppercase px-6 mb-8"
          >
            Recommencer
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center w-screen justify-center gap-8 bg-white p-4 pt-10 rounded-xl lg:w-1/2 lg:rounded-none lg:max-h-full">
          <h2 className="text-3xl lg:text-4xl font-kollektif font-bold text-secondary text-center after:content-[''] after:block after:h-1 after:bg-primary after:mt-10 after:rounded-full">
            Désolé, vous n&apos;êtes pas éligible
          </h2>
          <p className="text-center text-xl mt-4">
            {!isHouseFifteenYearsOld(parseInt(year))
              ? "Votre logement doit avoir plus de 15 ans"
              : "Vous devez être propriétaire du logement"}
          </p>
          <button
            onClick={handleReset}
            className="btn rounded-full bg-white text-primary border-primary hover:bg-primary hover:text-white uppercase px-6 mb-8"
          >
            Recommencer
          </button>
        </div>
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-nowrap gap-4 bg-white p-4 rounded-xl lg:w-1/2 lg:rounded-none"
    >
      <h1 className="text-4xl font-kollektif font-bold lg:text-2xl lg:pl-4 lg:pt-4 text-secondary uppercase mb-8 lg:mb-10 after:content-[''] after:block after:w-10 after:h-1 after:bg-primary after:mt-4">
        Formulaire de demande
      </h1>
      <div className="flex flex-col gap-4 lg:flex-row lg:w-full lg:px-4">
        <label
          htmlFor="type"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Type de logement*
          <select
            name="type"
            id="type"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="maison">Maison</option>
            <option value="appartement">Appartement</option>
          </select>
        </label>
        <label
          htmlFor="annee"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Année de construction*
          <input
            type="text"
            name="annee"
            id="annee"
            placeholder="1990"
            required
            className="input input-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary focus:placeholder:text-primary"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
      </div>
      <div className="flex flex-col gap-4 lg:w-full lg:px-4 lg:flex-row">
        <label
          htmlFor="surface"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Surface*
          <input
            type="text"
            name="surface"
            id="surface"
            placeholder="Surface habitable"
            required
            className="input input-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary focus:placeholder:text-primary"
          />
        </label>
        <label
          htmlFor="owner"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Je suis*
          <select
            name="owner"
            id="owner"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
            value={isOwner}
            onChange={(e) => setIsOwner(e.target.value)}
          >
            <option value="proprietaire">Propriétaire</option>
            <option value="locataire">Locataire</option>
          </select>
        </label>
      </div>
      <div className="flex flex-col gap-4 lg:w-full lg:px-4 lg:flex-row">
        <label
          htmlFor="energy"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          Pour me chauffer, j&apos;utilise...*
          <select
            name="energy"
            id="energy"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="gaz">Gaz</option>
            <option value="electricite">Electricité</option>
            <option value="bois">Bois</option>
          </select>
        </label>
        <label
          htmlFor="products"
          className="label-text flex flex-col gap-2 lg:w-1/2"
        >
          <div className="flex items-center">
            Produits souhaités*
            <span className="text-xs ml-1">(en plus de la PAC)</span>
          </div>
          <select
            name="products"
            id="products"
            required
            className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
          >
            <option value="isolation">Isolation combles</option>
            <option value="vmc">VMC</option>
            <option value="menuiseries">Menuiseries</option>
          </select>
        </label>
      </div>
      <label
        htmlFor="isolation"
        className="label-text flex flex-col gap-2 lg:px-4"
      >
        Avez-vous déjà bénéfcié de l&apos;isolation à 1€ ?
        <select
          name="isolation"
          id="isolation"
          required
          className="select select-bordered mb-4 focus:outline-primary focus:border-primary focus:text-primary"
        >
          <option value="oui">Oui</option>
          <option value="non">Non</option>
        </select>
      </label>
      <button className="btn rounded-full bg-primary text-white hover:bg-primary/80 mx-4">
        TESTER MON ELIGIBILITE
      </button>
    </form>
  );
}

export default Form;
