import React, { useState } from "react";

const RecProcessPh = () => {
  const [isChecked, setIsChecked] = useState(false);

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
        <img src="./vectors/imgBorder.png" alt="border" />

        <img
          className="absolute p-10 "
          src="/mainPage/Recruitment.png"
          alt="rectangle"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isChecked ? "1" : "0",
          }}
        />
        <img
          className="absolute p-10"
          src="/mainPage/RecruitmentDark.png"
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
            Recruitment <br /> <span className="second-style">Process</span>
          </p>
          <div className="flex items-start mt-5">
            <p
              className="opacity-50"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              Research11`` indicates that fewer than 2 out
              <br /> of 10 candidates demonstrate <br /> performance consistent
              with their CV <br /> claims.
            </p>
            <p
              className=" absolute opacity-50 "
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              Prioritizing soft skills and cognitive <br /> performance in
              hiring elevates the <br /> likelihood of securing high-potential
              employees by fivefold.
            </p>
          </div>
        </div>
        <div className="flex mt-2 items-center">
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
                <img src="./shapes/greenSquare.png" alt="img" />
                <svg
                  className="absolute top-4 left-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <circle
                    cx="19.1667"
                    cy="19.1667"
                    r="15.8333"
                    fill="white"
                    fillOpacity="0.2"
                    stroke="url(#paint0_linear_276_16920)"
                    strokeWidth="3"
                  />
                  <path
                    d="M30.8333 30.8334L36.6667 36.6667"
                    stroke="url(#paint1_linear_276_16920)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15 19.1667H19.1667M19.1667 19.1667H23.3333M19.1667 19.1667V23.3333M19.1667 19.1667V15"
                    stroke="url(#paint2_linear_276_16920)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_276_16920"
                      x1="19.1667"
                      y1="3.33337"
                      x2="19.1667"
                      y2="35"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.46" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_276_16920"
                      x1="33.75"
                      y1="30.8334"
                      x2="33.75"
                      y2="36.6667"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.46" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_276_16920"
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
              <div className="mb-5">
                <p className="font-bold text-[36px] my-5 text-style">
                  Recruitment
                  <br />
                  <span className="second-style"> Game</span>
                </p>
                <p className="text-[16px] opacity-50">
                  Utilizing 25-minute simulations to <br /> evaluate candidates'
                  decision-making <br /> and cognitive processes professionally.
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

export default RecProcessPh;
