"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "@/../public/logo.svg";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { GrValidate } from "react-icons/gr";

import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    const checkbox = document.getElementById("my-drawer-3") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col font-bold">
        {/* Navbar */}
        <div className="navbar w-full flex gap-4 p-4">
          <Link href="/" className="mx-2 flex-1 px-2">
            <Image src={logo} alt="logo" width={150} className="lg:w-[200px]" />
          </Link>
          <div className="flex-none lg:hidden">
            <a
              href="tel:+33972121401"
              className="btn btn-circle bg-primary hover:bg-hover text-white"
            >
              <FaPhoneVolume className="text-xl" />
            </a>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-circle bg-secondary hover:bg-hover text-white"
            >
              <Menu className="text-xl" />
            </label>
          </div>
          <div className="hidden flex-none lg:block">
            <ul className="menu flex items-center gap-8 menu-horizontal">
              {/* Navbar menu content here */}
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost focus:text-primary font-emOne hover:text-primary"
                >
                  NOS SERVICES
                  <IoIosArrowDown className="text-xl text-primary" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
                  <li>
                    <Link
                      href="/services/isolation"
                      className="hover:text-primary hover:bg-transparent active:bg-primary focus-visible:outline-primary"
                    >
                      ISOLATION
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/pompe-a-chaleur"
                      className="hover:text-primary hover:bg-transparent active:bg-primary focus-visible:outline-primary"
                    >
                      POMPES A CHALEUR
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/ballon-thermodynamique"
                      className="hover:text-primary hover:bg-transparent active:bg-primary focus-visible:outline-primary"
                    >
                      BALLON THERMODYNAMIQUE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/menuiserie"
                      className="hover:text-primary hover:bg-transparent active:bg-primary focus-visible:outline-primary"
                    >
                      MENUISERIE
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/vmc"
                      className="hover:text-primary hover:bg-transparent active:bg-primary focus-visible:outline-primary"
                    >
                      VMC
                    </Link>
                  </li>
                </ul>
              </div>
              <li
                className="font-emOne hover:text-primary focus-visible:outline-primary"
                tabIndex={0}
              >
                <Link href="/notre-mission" tabIndex={0} onClick={closeDrawer}>
                  NOTRE MISSION
                </Link>
              </li>
              <li
                className="font-emOne hover:text-primary focus-visible:outline-primary"
                tabIndex={0}
              >
                <Link href="/notre-mission#retrouvez-nous">
                  <FaMapLocationDot className="text-2xl text-primary focus-visible:outline-primary" />
                  OÙ NOUS TROUVER
                </Link>
              </li>
              <li>
                <Link
                  href="/eligibility"
                  className="btn rounded-full bg-primary hover:bg-hover text-white flex items-center gap-2"
                >
                  <GrValidate className="text-xl" />
                  TEST D&apos;ÉLIGIBILITÉ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-10">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul
          className="menu bg-base-200 min-h-full w-80 p-4 gap-4 font-bold"
          onFocus={(e) => e.stopPropagation()}
          tabIndex={-1}
        >
          {/* Sidebar content here */}
          <li>
            <Link href="/" onClick={closeDrawer}>
              <Image src={logo} alt="logo" width={200} />
            </Link>
          </li>
          <li className="mt-4">
            <details
              onToggle={(e) => setIsOpen((e.target as HTMLDetailsElement).open)}
            >
              <summary
                className={`w-fit ${isOpen ? "text-primary" : "text-black"}`}
                tabIndex={0}
              >
                NOS SERVICES
              </summary>
              <ul>
                <li>
                  <Link
                    href="/services/isolation"
                    tabIndex={0}
                    onClick={closeDrawer}
                  >
                    ISOLATION
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/pompe-a-chaleur"
                    tabIndex={0}
                    onClick={closeDrawer}
                  >
                    POMPES A CHALEUR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ballon-thermodynamique"
                    tabIndex={0}
                    onClick={closeDrawer}
                  >
                    BALLON THERMODYNAMIQUE
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/menuiserie"
                    tabIndex={0}
                    onClick={closeDrawer}
                  >
                    MENUISERIE
                  </Link>
                </li>
                <li>
                  <Link href="/services/vmc" tabIndex={0} onClick={closeDrawer}>
                    VMC
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/notre-mission" tabIndex={0} onClick={closeDrawer}>
              NOTRE MISSION
            </Link>
          </li>
          <li>
            <Link href="/eligibility" tabIndex={0} onClick={closeDrawer}>
              OÙ NOUS TROUVER
              <FaMapLocationDot className="text-2xl text-primary" />
            </Link>
          </li>
          <li>
            <Link
              href="/eligibility"
              tabIndex={0}
              onClick={closeDrawer}
              className="btn rounded-full bg-primary hover:bg-hover text-white flex items-center w-fit"
            >
              TEST D&apos;ÉLIGIBILITÉ
              <GrValidate className="text-xl" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
