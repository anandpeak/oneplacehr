import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const RetentionRate = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation();

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  const toggleStyle = {
    background: "linear-gradient(102deg, #F48D7E 8.63%, #D74C38 93.24%)",
    boxShadow: "2.554px 0px 15.327px 5.109px rgba(0, 0, 0, 0.10) inset",
  };
  return (
    <div className="my-20 w-10/12 m-auto">
      <div className="px-5 relative flex items-center justify-center">
        <img src="./vectors/ImgBorder.png" alt="border" />
        <img
          className="absolute p-10 "
          src="./mainPage/Retention.png"
          alt="rectangle"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isChecked ? "1" : "0",
          }}
        />
        <img
          className="absolute p-10"
          src="./mainPage/RetentionDark.png"
          alt="rectangle"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: !isChecked ? "1" : "0",
          }}
        />
      </div>
      <div className="mt-5 px-2">
        <div>
          <p className="text-[36px] text-style font-bold">
            {t("Mainpage.Retrate.title1")} <br />{" "}
            <span className="second-style">{t("Mainpage.Retrate.title2")}</span>
          </p>
          <div className="flex items-start mt-5">
            <p
              className="opacity-50"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              {t("Mainpage.Retrate.description")}
            </p>
            <p
              className=" absolute opacity-50 "
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              {t("Mainpage.Retrate.hoverDesc")}
            </p>
          </div>
        </div>
        <div className="flex mt-8 items-center">
          <label className="flex items-center cursor-pointer">
            <div className="relative mt-2">
              <input
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={handleToggle}
              />
              <div
                className={`w-10 h-5  rounded-full shadow-inner  `}
                style={isChecked ? toggleStyle : { backgroundColor: "#879DAB" }}
              ></div>
              <div
                className={`
                  bg-[#fff] m-1 absolute w-3 h-3 rounded-full shadow inset-y-0 left-0 focus:outline-none transition-transform duration-300 transform ${
                    isChecked ? "translate-x-5" : "translate-x-0"
                  }`}
              ></div>
            </div>
            <div className="ml-3 text-[36px] font-bold">oneplace.hr</div>
          </label>
        </div>
      </div>
      <div className="mt-5 ">
        <div className="flex relative justify-center mb-6">
          <img src="./vectors/downArrow.png" alt="arrow" />
          <img
            className="absolute inset-y-1/2 top-16"
            src="./vectors/downFlat.svg"
            alt="vector"
          />
        </div>
        <div className="mb-20">
          <div>
            <img src="./vectors/flat.png" alt="vector" />

            <div className="py-10 ">
              <div className="flex relative">
                <img src="./shapes/blueSquare.png" alt="img" />
                <img
                  className="absolute top-4 left-4"
                  src="./shapes/wand.png"
                  alt="img"
                />
              </div>
              <div className="mb-5">
                <p className="font-bold text-[36px] my-5 text-style">
                  {t("Mainpage.Analysis.title1")}
                  <br />
                  <span className="second-style">
                    {" "}
                    {t("Mainpage.Analysis.title2")}
                  </span>
                </p>
                <p className="text-[16px] opacity-50">
                  {t("Mainpage.Analysis.description")}
                </p>
              </div>
            </div>
            <img src="./vectors/flat.png" alt="vector" />
          </div>
          <div className="flex justify-center">
            <img src="./vectors/downFlat.svg" alt="vector" />
          </div>
          <div>
            <img src="./vectors/flat.png" alt="vector" />
            <div className="py-10 ">
              <div className="flex relative">
                <img src="./shapes/cyanSquare.png" alt="img" />
                <img
                  className="left-4 top-4 absolute z-40 w-[40px]"
                  src="./shapes/collab.png"
                  alt="img"
                />
              </div>
              <div className="mb-5">
                <p className="font-bold text-[36px] my-5 text-style">
                  {t("Mainpage.Engagement.title1")}
                  <br />
                  <span className="second-style">
                    {" "}
                    {t("Mainpage.Engagement.title2")}
                  </span>
                </p>
                <p className="text-[16px] opacity-50">
                  {t("Mainpage.Engagement.description")}
                </p>
              </div>
            </div>
            <img src="./vectors/flat.png" alt="vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetentionRate;
