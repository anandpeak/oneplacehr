import React, { useState } from "react";
import MainButton from "./MainButton";
import { Link, useLocation } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const activeLink = location.pathname;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className={`z-50 sticky top-0 py-4 px-6 sm:px-8 md:px-8 lg:px-20 flex items-center justify-between bg-[#fff]`}
    >
      <div>
        <Link className="flex justify-center items-center" to="/">
          <img className="mt-2" src="/logo.svg" alt="logo" />
          <p className="md:text-xl sm:text-xl lg:text-3xl  sm:text-[36px] text-[28px] font-[700] text-black">
            oneplace.hr
          </p>
        </Link>
      </div>
      <div>
        <ul className="sm:flex hidden sm:gap-5 md:gap-8 lg:gap-10  ">
          <li>
            <Link
              className={`text-black sm:text-[14px] md:text-[16px] ${
                activeLink === "/product" ? "font-bold" : ""
              }`}
              to="/product"
            >
              {t("Header.product")}
            </Link>
          </li>
          <li>
            <Link
              className={`text-black sm:text-[14px] md:text-[16px] ${
                activeLink === "/science" ? "font-bold" : ""
              }`}
              to="/science"
            >
              {t("Header.science")}
            </Link>
          </li>
          {/* <li>
            <Link
              className={`text-black sm:text-[14px] md:text-[16px] ${
                activeLink === "/caseStudies" ? "font-bold" : ""
              }`}
              to="/caseStudies"
            >
              Case Studies
            </Link>
          </li> */}
          <li>
            <Link
              className={`text-black sm:text-[14px] md:text-[16px] ${
                activeLink === "/ourStory" ? "font-bold" : ""
              }`}
              to="/ourStory"
            >
              {t("Header.ourstory")}
            </Link>
          </li>
        </ul>
        <button
          className={`sm:hidden mt-3   text-black `}
          onClick={() => {
            toggleMenu();
          }}
        >
          <AiOutlineMenu className="w-5 h-5 transition-opacity duration-500 opacity-100" />
        </button>
        <div
          className={`text-white ${
            showMenu ? "block" : "hidden"
          } sm:hidden flex-col sm:gap-10 top-[0px] left-0 bottom-0 right-0 bg-opacity-80 backdrop-blur-[12px] absolute h-screen bg-black w-screen transition-opacity duration-500`}
        >
          <div className="flex justify-between px-10 py-10">
            <div>
              <Link className="flex justify-center items-center" to="/">
                <img className="mt-2" src="/logo.svg" alt="logo" />
                <p className="sm:text-3xl text-[28px] text-white">
                  oneplace.hr
                </p>
              </Link>
            </div>

            <button
              className={`sm:hidden text-white `}
              onClick={() => {
                toggleMenu();
              }}
            >
              <IoMdClose className="w-5 h-5 transition-opacity duration-500 opacity-100" />
            </button>
          </div>
          <ul className="flex mt-10 flex-col gap-10 items-center justify-center">
            <li>
              <Link
                className={`text-[24px] ${
                  activeLink === "/product" ? "font-bold" : ""
                }`}
                to="/product"
              >
                {t("Header.product")}
              </Link>
            </li>
            <li>
              <Link
                className={`text-[24px] ${
                  activeLink === "/science" ? "font-bold" : ""
                }`}
                to="/science"
              >
                {t("Header.science")}
              </Link>
            </li>
            {/* <li>
              <Link
                className={`text-[24px] ${
                  activeLink === "/caseStudies" ? "font-bold" : ""
                }`}
                to="/caseStudies"
              >
                Case Studies
              </Link>
            </li> */}
            <li>
              <Link
                className={`text-[24px] ${
                  activeLink === "/ourStory" ? "font-bold" : ""
                }`}
                to="/ourStory"
              >
                {t("Header.ourstory")}
              </Link>
            </li>
            <li>
              <MainButton
                text={t("Header.button")}
                to="https://game.metacog.mn"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className={`sm:block hidden`}>
        <MainButton text={t("Header.button")} to="https://game.metacog.mn" />
      </div>
    </div>
  );
};

export default Header;
