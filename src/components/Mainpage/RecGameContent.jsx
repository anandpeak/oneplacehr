import React, { useState } from "react";
import MainButton from "../MainButton";
import { useTranslation } from "react-i18next";

const RecGameContent = () => {
  const [showButton, setShowButton] = useState(false);
  const { t } = useTranslation();

  const handleMouseOver = () => {
    setShowButton(true);
  };

  const handleMouseOut = () => {
    setShowButton(false);
  };

  return (
    <div className="w-9/12 m-auto">
      <div
        className=" relative flex items-center justify-center"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img
          className="absolute top-0 z-10"
          src="./vectors/longFlat.png"
          alt="vector"
        />
        <img
          className=" flex   border-[#000] md:mt-3 lg:mt-4"
          src="./mainPage/RecruitmentGame.png"
          alt="rectangle"
        />
        <div
          className={`absolute lg:top-16 md:right-5 md:top-5 lg:right-20 z-20 transition-opacity duration-300 ${
            showButton ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: showButton ? "auto" : "none" }}
        >
          <MainButton
            className="border-2 lg:hidden md:flex"
            text={t("Mainpage.Recgame.button1")}
            fSize="14px"
            sText={t("Mainpage.Recgame.button2")}
            sColor="#D74C38"
          />
          <MainButton
            className="border-2 lg:flex md:hidden"
            text={t("Mainpage.Recgame.button1")}
            fSize="22.22px"
            sText={t("Mainpage.Recgame.button2")}
            sColor="#D74C38"
          />
        </div>
        <div className=" absolute left-10 lg:top-20 md:top-8 ">
          <div className="lg:hidden md:block">
            <img
              src="./shapes/greenSquare.png"
              className="w-10 h-10"
              alt="rectangle"
            />
            <svg
              className="absolute top-2 z-40 left-2"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="19.1663"
                cy="19.1663"
                r="15.8333"
                fill="white"
                fillOpacity="0.2"
                stroke="url(#paint0_linear_674_315)"
                strokeWidth="3"
              />
              <path
                d="M30.833 30.833L36.6663 36.6663"
                stroke="url(#paint1_linear_674_315)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M15 19.1667H19.1667M19.1667 19.1667H23.3333M19.1667 19.1667V23.3333M19.1667 19.1667V15"
                stroke="url(#paint2_linear_674_315)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_674_315"
                  x1="19.1663"
                  y1="3.33301"
                  x2="19.1663"
                  y2="34.9997"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_674_315"
                  x1="33.7497"
                  y1="30.833"
                  x2="33.7497"
                  y2="36.6663"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_674_315"
                  x1="19.1667"
                  y1="15"
                  x2="19.1667"
                  y2="23.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.46" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="lg:block md:hidden">
            <img src="./shapes/greenSquare.png" alt="rectangle" />
            <svg
              className="absolute top-4 left-4"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <circle
                cx="19.1663"
                cy="19.1666"
                r="15.8333"
                fill="white"
                fillOpacity="0.2"
                stroke="url(#paint0_linear_178_4670)"
                strokeWidth="3"
              />
              <path
                d="M30.833 30.8333L36.6663 36.6666"
                stroke="url(#paint1_linear_178_4670)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M15 19.1667H19.1667M19.1667 19.1667H23.3333M19.1667 19.1667V23.3333M19.1667 19.1667V15"
                stroke="url(#paint2_linear_178_4670)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_178_4670"
                  x1="19.1663"
                  y1="3.33325"
                  x2="19.1663"
                  y2="34.9999"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_178_4670"
                  x1="33.7497"
                  y1="30.8333"
                  x2="33.7497"
                  y2="36.6666"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.46" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_178_4670"
                  x1="19.1667"
                  y1="15"
                  x2="19.1667"
                  y2="23.3333"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="white" stopOpacity="0.46" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <p className="md:text-[20px] lg:text-[48px] lg:mb-2 md:mb-2 font-bold secon-style w-[600px]">
            {t("Mainpage.Recgame.title1")}
            <span className="text-style"> {t("Mainpage.Recgame.title2")}</span>
          </p>
          <p className="opacity-50 lg:text-[24px] md:text-[14px] w-[500px]">
            {t("Mainpage.Recgame.description")}
          </p>
        </div>
        <img
          className="absolute lg:top-[410px] md:top-[230px] z-10"
          src="./vectors/longFlat.png"
          alt="vector"
        />
      </div>
    </div>
  );
};

export default RecGameContent;
