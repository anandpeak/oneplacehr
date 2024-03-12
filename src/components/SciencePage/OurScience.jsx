import React from "react";
import { useTranslation } from "react-i18next";

const OurScience = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex mt-20 justify-center ">
        <div className="sm:text-center px-10">
          <p className="sm:text-[56px] text-[36px] font-bold third-style ">
            {t("Sciencepage.title")}
          </p>
          <p className="hidden sm:block text-center text-white opacity-50 text-[24px] w-[500px]">
            {t("Sciencepage.description")}
          </p>{" "}
          <p className="block sm:hidden text-white opacity-50 text-[16px]">
            {t("Sciencepage.description")}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-center justify-center gap-6 p-2 mt-10 sm:mt-0 sm:gap-20 sm:p-20 ">
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                src="./sciencePage/honoi.png"
                className="sm:w-full w-[141px] "
                alt="img"
              />
            </div>
            <p className="text-center text-white sm:text-[18px] text-[14px] mt-3">
              Tower of Honoi
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              The Tower of Hanoi is a <br /> mathematical game or puzzle <br />{" "}
              consisting of three rods...
            </p>
            <p className="block sm:hidden text-center text-white text-[10px] mt-3 opacity-50">
              The Tower of Hanoi is a <br /> mathematical game or <br /> puzzle{" "}
              consisting of three <br /> rods...
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                src="./sciencePage/flanker.png"
                className="sm:w-full w-[141px]"
                alt="img"
              />
            </div>
            <p className="text-center text-white sm:text-[18px] text-[14px] mt-3">
              Flanker Test{" "}
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              The flanker task is a test of <br /> inhibitory control in
              cognitive <br />
              psychology. It measures...
            </p>
            <p className="block sm:hidden text-center text-white text-[10px] mt-3 opacity-50">
              The flanker task is a test of <br /> inhibitory control in <br />{" "}
              cognitive psychology. It <br /> measures...
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                className="sm:w-full w-[141px]"
                src="./sciencePage/workingMemory.png"
                alt="img"
              />
            </div>
            <p className="text-center text-white sm:text-[18px] text-[14px] mt-3">
              Working Memory Model
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              Baddeley claims there are four <br /> components of working <br />
              memory: the phonological...
            </p>
            <p className="block sm:hidden text-center text-white text-[10px] mt-3 opacity-50">
              Baddeley claims there are
              <br /> four components of <br />
              working memory: the <br /> phonological...
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                className="sm:w-full w-[141px]"
                src="./sciencePage/quantitative.png"
                alt="img"
              />
            </div>
            <p className="text-center text-white text-[14px] sm:text-[18px] mt-3">
              Quantitative Reasoning{" "}
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              The application of <br /> mathematical, logical and <br />{" "}
              statistical skills to interpre...
            </p>
            <p className="block sm:hidden text-center text-white text-[10px] mt-3 opacity-50">
              The application of <br /> mathematical, logical and <br />{" "}
              statistical skills to interpre...
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                src="./sciencePage/trust.png"
                className="sm:w-full w-[141px]"
                alt="img"
              />
            </div>
            <p className="text-center text-white text-[14px] sm:text-[18px] mt-3">
              Evolution of Trust{" "}
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              The Evolution of Cooperation <br /> is a 1984 book written by{" "}
              <br /> political scientist Robert...
            </p>
            <p className="block sm:hidden text-center text-white text-[10px] mt-3 opacity-50">
              The Evolution of <br /> Cooperation is a 1984 book <br /> written
              by political scientist <br /> Robert...
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                className="sm:w-full w-[141px]"
                src="./sciencePage/neuralSystem.png"
                alt="img"
              />
            </div>
            <p className="text-center text-white  text-[14px] sm:text-[18px] mt-3">
              The neural system of <br /> metacognition <br />
              accompanying <br />
              decision-making
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                className="sm:w-full w-[141px]"
                src="./sciencePage/leadership.png"
                alt="img"
              />
            </div>
            <p className="text-center text-white text-[14px] sm:text-[18px] mt-3">
              Temperaments <br /> leadership theory
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              four fundamental personality <br /> types, sanguine (pleasure...
            </p>
            <p className="block sm:hidden text-center text-white text-[10px] mt-3 opacity-50">
              four fundamental <br /> personality types, <br />
              sanguine (pleasure...
            </p>
          </div>
          <div className="flex-col justify-center">
            <div className="flex justify-center">
              <img
                className="sm:w-full w-[141px]"
                src="./sciencePage/riskTaking.png"
                alt="img"
              />
            </div>
            <p className="text-center text-white text-[14px] sm:text-[18px] mt-3">
              Balloon Analogue <br />
              Risk Taking
            </p>
            <p className="hidden sm:block text-center text-white text-[12px] mt-3 opacity-50">
              The Balloon Analog Risk Task, <br /> otherwise known as BART...
            </p>
            <p className="block sm:hidden text-center text-white text-[12px] mt-3 opacity-50">
              The Balloon Analog Risk <br /> Task, otherwise known as <br />
              BART...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurScience;
