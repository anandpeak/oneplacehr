import React, { useState } from "react";

const RetentionRate = () => {
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
            Retention <br /> <span className="second-style">Rate</span>
          </p>
          <div className="flex items-start mt-5">
            <p
              className="opacity-50"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              Organizations face a retention rate <br /> challenge, struggling
              with talent attrition <br /> and the need for effective strategies
              to br enhance employee loyalty.{" "}
            </p>
            <p
              className=" absolute opacity-50 "
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              Challenges in EX include issues <br /> related to communication
              gaps, limited <br /> growth opportunities, and a need for <br />{" "}
              enhanced work-life balance.
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
                <img src="./shapes/orangeSquare.png" alt="img" />
                <svg
                  className="absolute left-4 top-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.3333 21.8519C33.3333 33.7037 23.2593 36.6667 18.2222 36.6667C13.8148 36.6667 5 33.7037 5 21.8519C5 17.2159 7.43578 14.1023 9.76659 12.3242C11.064 11.3345 12.7173 12.32 12.8836 13.9433L13.0267 15.3397C13.2009 17.0402 14.7489 18.4344 16.1822 17.5029C18.9896 15.6784 20 11.292 20 8.8889V8.34952C20 5.96666 22.4063 4.43308 24.3371 5.82946C28.6089 8.91878 33.3333 14.3071 33.3333 21.8519Z"
                    stroke="url(#paint0_linear_286_17144)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M13.3333 30.7407C13.3333 35.4815 17.4815 36.6666 19.5556 36.6666C21.3704 36.6666 25 35.4815 25 30.7407C25 28.9057 24.0179 27.667 23.0674 26.9521C22.4041 26.4533 21.4713 26.9012 21.2432 27.6992C20.9459 28.7395 19.8713 29.3932 19.324 28.4599C18.8235 27.6063 18.8235 26.326 18.8235 25.5555C18.8235 24.4947 17.7564 23.8078 16.8982 24.4314C15.1775 25.6817 13.3333 27.8024 13.3333 30.7407Z"
                    stroke="url(#paint1_linear_286_17144)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_286_17144"
                      x1="5"
                      y1="21.2164"
                      x2="41.4286"
                      y2="21.2164"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_286_17144"
                      x1="13.3333"
                      y1="30.5235"
                      x2="28.3333"
                      y2="30.5235"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mb-5">
                <p className="font-bold text-[36px] my-5 text-style">
                  Burnout <br />
                  <span className="second-style"> Game</span>
                </p>
                <p className="text-[16px] opacity-50">
                  The "Burnout Game" tackles workplace <br />
                  burnout through interactive challenges, <br /> promoting
                  stress management and <br />
                  fostering a healthier work environment.
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
                <svg
                  className="left-4 top-4 absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M14.1667 18.3334V23.3334M11.6667 20.8334L16.6667 20.8334"
                    stroke="url(#paint0_linear_286_17149)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36.5329 28.961L34.7248 21.4338C33.7028 17.1789 33.1917 15.0515 31.7421 13.6561C31.3752 13.303 30.9698 12.99 30.5329 12.7227C28.8069 11.6666 26.5619 11.6666 22.0719 11.6666H17.9281C13.4381 11.6666 11.1931 11.6666 9.46708 12.7227C9.03025 12.99 8.62478 13.303 8.25791 13.6561C6.80829 15.0515 6.29727 17.1789 5.27522 21.4338L3.46716 28.961C2.83158 31.6071 4.52109 34.2533 7.24024 34.8708C9.53328 35.3915 11.892 34.3022 12.9277 32.2443L13.1411 31.8204C14.092 29.9309 16.0654 28.7331 18.2273 28.7331H21.7727C23.9347 28.7331 25.908 29.9309 26.8589 31.8204L27.0723 32.2443C28.108 34.3022 30.4667 35.3915 32.7598 34.8708C35.4789 34.2533 37.1684 31.6071 36.5329 28.961Z"
                    stroke="url(#paint1_linear_286_17149)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M20 11.6667V10C20 9.07953 20.7462 8.33333 21.6667 8.33333H23.3333C24.2538 8.33333 25 7.58714 25 6.66667V5"
                    stroke="url(#paint2_linear_286_17149)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26.6667 18.3333C26.6667 19.2538 25.9205 20 25 20C24.0795 20 23.3333 19.2538 23.3333 18.3333C23.3333 17.4128 24.0795 16.6666 25 16.6666C25.9205 16.6666 26.6667 17.4128 26.6667 18.3333Z"
                    fill="url(#paint3_linear_286_17149)"
                  />
                  <path
                    d="M30 23.3333C30 24.2538 29.2538 25 28.3333 25C27.4129 25 26.6667 24.2538 26.6667 23.3333C26.6667 22.4128 27.4129 21.6666 28.3333 21.6666C29.2538 21.6666 30 22.4128 30 23.3333Z"
                    fill="url(#paint4_linear_286_17149)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_286_17149"
                      x1="11.6667"
                      y1="20.8707"
                      x2="18.0952"
                      y2="20.8707"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_286_17149"
                      x1="3.33334"
                      y1="23.5074"
                      x2="46.1905"
                      y2="23.5074"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_286_17149"
                      x1="20"
                      y1="8.38309"
                      x2="26.4286"
                      y2="8.38309"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_286_17149"
                      x1="23.3333"
                      y1="20.8955"
                      x2="31.9048"
                      y2="20.8955"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_286_17149"
                      x1="23.3333"
                      y1="20.8955"
                      x2="31.9048"
                      y2="20.8955"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mb-5">
                <p className="font-bold text-[36px] my-5 text-style">
                  Gamified Employer
                  <br />
                  <span className="second-style"> Engagement</span>
                </p>
                <p className="text-[16px] opacity-50">
                  It turns HR interactions into an engaging <br />
                  game, promoting employee participation <br />
                  and enhancing workplace culture.
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
