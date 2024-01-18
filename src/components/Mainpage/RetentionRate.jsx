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
    <div className="w-10/12 m-auto">
      <div className="flex">
        <div className="relative w-1/2">
          <img
            className="absolute right-[-9px] top-5 "
            src="./vectors/downArrow.png"
            alt="line"
          />
          <img
            className="absolute right-[-2px] top-44 "
            src="./vectors/toLeft.png"
            alt="line"
          />
          <img
            className="absolute right-[-2px]  md:top-[400px] lg:top-[560px]"
            src="./vectors/leftToDown.png"
            alt="line"
          />

          <div className="absolute z-4 right-28 lg:top-56 md:top-[20rem]">
            <div className="relative">
              <img src="./vectors/imgBorder.png" alt="lie" />
              <div>
                <img
                  className="absolute lg:top-10 lg:left-10 lg:p-0 md:top-0 md:left-0 md:p-5 flex justify-center items-center "
                  src={`${process.env.PUBLIC_URL}/mainPage/Retention.png`}
                  alt="rectangle"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
                />
                <img
                  className="absolute lg:top-10 lg:left-10 lg:p-0 md:top-0 md:left-0 md:p-5"
                  src={`${process.env.PUBLIC_URL}/mainPage/RetentionDark.png`}
                  alt="rectangle"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: !isChecked ? "1" : "0",
                  }}
                />
                <div
                  className="absolute lg:bottom-10 lg:right-[-40px] md:bottom-[-20px] md:right-[-100px]"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
                >
                  <div className="bg-white flex  rounded-[77px] shadow-2xl ps-2 pe-5 py-1 gap-2 items-center justify-between">
                    <div className="flex items-center justify-center rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="57"
                        viewBox="0 0 57 57"
                        fill="none"
                      >
                        <circle
                          cx="28.5"
                          cy="28.5"
                          r="28.5"
                          fill="url(#paint0_linear_178_5902)"
                        />
                        <path
                          d="M34.6366 21.3333C34.6366 20.781 34.1889 20.3333 33.6366 20.3333C33.0843 20.3333 32.6366 20.781 32.6366 21.3333V22.6976C29.6502 20.6261 25.5482 20.9438 22.9039 23.6507C19.9209 26.7045 19.9209 31.6461 22.9039 34.6999C25.8998 37.7667 30.7669 37.7667 33.7627 34.6999C35.5005 32.9209 36.2223 30.5042 35.9407 28.2012C35.8736 27.653 35.3749 27.263 34.8267 27.33C34.2785 27.3971 33.8884 27.8958 33.9555 28.444C34.1676 30.1783 33.6223 31.9815 32.332 33.3023C30.1209 35.5659 26.5458 35.5659 24.3346 33.3023C22.1107 31.0256 22.1107 27.3249 24.3346 25.0482C26.0986 23.2424 28.7307 22.8772 30.8458 23.9527H30.1011C29.5488 23.9527 29.1011 24.4004 29.1011 24.9527C29.1011 25.505 29.5488 25.9527 30.1011 25.9527H33.6366C34.1889 25.9527 34.6366 25.505 34.6366 24.9527V21.3333Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M28.2568 15C25.179 15 22.7669 15 20.8849 15.253C18.9586 15.512 17.4386 16.0524 16.2455 17.2455C15.0524 18.4386 14.512 19.9586 14.253 21.8849C14 23.7669 14 26.179 14 29.2568V29.4098C14 32.4877 14 34.8997 14.253 36.7817C14.512 38.708 15.0524 40.2281 16.2455 41.4212C17.4386 42.6142 18.9586 43.1547 20.8849 43.4137C22.7669 43.6667 25.179 43.6667 28.2568 43.6667H28.4098C31.4877 43.6667 33.8997 43.6667 35.7817 43.4137C37.708 43.1547 39.2281 42.6142 40.4212 41.4212C41.6142 40.2281 42.1547 38.708 42.4137 36.7817C42.6667 34.8997 42.6667 32.4877 42.6667 29.4098V29.2568C42.6667 26.179 42.6667 23.7669 42.4137 21.8849C42.1547 19.9586 41.6142 18.4386 40.4212 17.2455C39.2281 16.0524 37.708 15.512 35.7817 15.253C33.8997 15 31.4877 15 28.4098 15H28.2568ZM17.6597 18.6597C18.4193 17.9002 19.4469 17.4643 21.1514 17.2352C22.8847 17.0021 25.1624 17 28.3333 17C31.5043 17 33.7819 17.0021 35.5152 17.2352C37.2198 17.4643 38.2474 17.9002 39.0069 18.6597C39.7665 19.4193 40.2023 20.4469 40.4315 22.1514C40.6645 23.8847 40.6667 26.1624 40.6667 29.3333C40.6667 32.5043 40.6645 34.7819 40.4315 36.5152C40.2023 38.2198 39.7665 39.2474 39.0069 40.0069C38.2474 40.7665 37.2198 41.2023 35.5152 41.4315C33.7819 41.6645 31.5043 41.6667 28.3333 41.6667C25.1624 41.6667 22.8847 41.6645 21.1514 41.4315C19.4469 41.2023 18.4193 40.7665 17.6597 40.0069C16.9002 39.2474 16.4643 38.2198 16.2352 36.5152C16.0021 34.7819 16 32.5043 16 29.3333C16 26.1624 16.0021 23.8847 16.2352 22.1514C16.4643 20.4469 16.9002 19.4193 17.6597 18.6597Z"
                          fill="white"
                        />
                        <path
                          d="M38.8335 17.3335L25.8335 16.3335L17.8335 17.3335L15.3335 20.3335L14.8335 35.8335L17.3335 40.8335L21.3335 42.8335H36.8335L39.8335 40.8335L41.3335 36.8335L41.8335 26.8335L40.8335 19.3335L38.8335 17.3335Z"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_178_5902"
                            x1="3.04"
                            y1="13.4118"
                            x2="59.19"
                            y2="25.8316"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F48D7E" />
                            <stop offset="1" stopColor="#D74C38" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">
                        Retention Rate
                      </p>
                      <p className="font-semibold text-[14px] text-style">
                        +12%
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
                  className="absolute lg:top-10 lg:left-[-40px] md:top-[-20px] md:left-[-60px] "
                >
                  <div className="bg-white flex  rounded-[77px] shadow-2xl ps-2 pe-5 py-1 gap-2 items-center justify-between">
                    <div className="flex items-center justify-center rounded-full ">
                      <svg
                        className="z-20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="57"
                        height="57"
                        viewBox="0 0 57 57"
                        fill="none"
                      >
                        <circle
                          cx="28.5"
                          cy="28.5"
                          r="28.5"
                          fill="url(#paint0_linear_178_5697)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_178_5697"
                            x1="3.04"
                            y1="13.4118"
                            x2="59.19"
                            y2="25.8316"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F48D7E" />
                            <stop offset="1" stopColor="#D74C38" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        className="absolute z-30"
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M26.6667 17.4815C26.6667 26.963 18.6074 29.3333 14.5778 29.3333C11.0519 29.3333 4 26.963 4 17.4815C4 13.7727 5.94862 11.2818 7.81327 9.85939C8.85122 9.06759 10.1739 9.85596 10.3069 11.1546L10.4213 12.2718C10.5607 13.6322 11.7991 14.7475 12.9458 14.0023C15.1917 12.5427 16 9.0336 16 7.11112V6.67961C16 4.77333 17.925 3.54647 19.4697 4.66356C22.8871 7.13502 26.6667 11.4457 26.6667 17.4815Z"
                          stroke="url(#paint0_linear_178_5897)"
                          strokeWidth="2.5"
                        />
                        <path
                          d="M10.6665 24.5926C10.6665 28.3852 13.985 29.3334 15.6443 29.3334C17.0961 29.3334 19.9998 28.3852 19.9998 24.5926C19.9998 23.1246 19.2141 22.1336 18.4537 21.5618C17.9231 21.1627 17.1769 21.521 16.9944 22.1594C16.7565 22.9917 15.8969 23.5146 15.4591 22.7679C15.0587 22.0851 15.0587 21.0609 15.0587 20.4445C15.0587 19.5958 14.205 19.0463 13.5184 19.5452C12.1418 20.5454 10.6665 22.2419 10.6665 24.5926Z"
                          stroke="url(#paint1_linear_178_5897)"
                          strokeWidth="2.5"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_178_5897"
                            x1="4"
                            y1="16.9731"
                            x2="33.1429"
                            y2="16.9731"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <linearGradient
                            id="paint1_linear_178_5897"
                            x1="10.6665"
                            y1="24.4189"
                            x2="22.6665"
                            y2="24.4189"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="1"
                              stopColor="white"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">Burnout Rate</p>
                      <p className="font-semibold text-[14px] text-style">
                        -20%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[280px] lg:mb-[280px] md:mt-[280px] md:mb-[125px] w-1/2  ps-10 ">
          <p className="lg:text-[48px] md:text-[38px] font-bold second-style">
            Retention <span className="text-style">Rate</span>
          </p>
          <div className="flex justify-start items-center relative">
            <p
              className="text-start opacity-50 mt-5 lg:text-[24px] md:text-[16px] flex justify-start"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              Research indicates that fewer than 2 out of <br />
              10 candidates demonstrate performance <br /> consistent with their
              CV claims.
            </p>
            <p
              className=" absolute  opacity-50 mt-5 lg:text-[24px] md:text-[16px]"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              Prioritizing soft skills and cognitive performance <br /> in
              hiring elevates the likelihood of securing <br /> high-potential
              employees by fivefold.
            </p>
          </div>
          <div className="flex mt-5 items-center">
            <label className="flex items-center cursor-pointer">
              <div className="relative mt-2">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div
                  className={`w-12 h-6  rounded-full shadow-inner  `}
                  style={
                    isChecked ? toggleStyle : { backgroundColor: "#879DAB" }
                  }
                ></div>
                <div
                  className={`
                  bg-[#fff] m-1 absolute w-4 h-4 rounded-full shadow inset-y-0 left-0 focus:outline-none transition-transform duration-300 transform ${
                    isChecked ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-[40px] font-bold">oneplace.hr</div>
            </label>
          </div>
        </div>
      </div>
      <div className="mt-[10px] flex justify-center">
        <img
          className="lg:w-[594px] md:w-[400px]"
          src="./vectors/2types.png"
          alt="vector"
        />
      </div>
      <div className="flex lg:mb-[600px] md:mb-[300px] relative justify-between">
        <div className="absolute lg:w-[522px] md:w-[300px] left-0 top-0">
          <img
            className="lg:w-full md:w-[400px]"
            src="./vectors/flat.png"
            alt="vector"
          />
          <div className="lg:p-10 md:p-5">
            <div>
              <div className="flex relative">
                <img
                  className="lg:w-[72px] md:w-[40px] h-auto"
                  src={`${process.env.PUBLIC_URL}/shapes/orangeSquare.png`}
                  alt="img"
                />
                <svg
                  className="lg:w-[40px] lg:h-[40px] md:w-[25px] md:h-[25px] absolute lg:top-4 lg:left-4 md:top-2 md:left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M33.3333 21.8519C33.3333 33.7037 23.2593 36.6667 18.2222 36.6667C13.8148 36.6667 5 33.7037 5 21.8519C5 17.2159 7.43578 14.1023 9.76659 12.3242C11.064 11.3345 12.7173 12.32 12.8836 13.9433L13.0267 15.3397C13.2009 17.0402 14.7489 18.4344 16.1822 17.5029C18.9896 15.6784 20 11.292 20 8.8889V8.34952C20 5.96666 22.4063 4.43308 24.3371 5.82946C28.6089 8.91878 33.3333 14.3071 33.3333 21.8519Z"
                    stroke="url(#paint0_linear_790_98)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M13.333 30.7408C13.333 35.4815 17.4812 36.6667 19.5552 36.6667C21.37 36.6667 24.9997 35.4815 24.9997 30.7408C24.9997 28.9058 24.0176 27.667 23.0671 26.9522C22.4038 26.4533 21.4709 26.9013 21.2429 27.6993C20.9455 28.7396 19.8709 29.3933 19.3237 28.4599C18.8232 27.6063 18.8232 26.3261 18.8232 25.5556C18.8232 24.4947 17.7561 23.8079 16.8979 24.4315C15.1772 25.6818 13.333 27.8024 13.333 30.7408Z"
                    stroke="url(#paint1_linear_790_98)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_790_98"
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
                      id="paint1_linear_790_98"
                      x1="13.333"
                      y1="30.5236"
                      x2="28.333"
                      y2="30.5236"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mb-5">
                <p className="font-bold md:text-[24px] lg:text-[48px] text-style">
                  Burnout <br />
                  <span className="second-style"> Game</span>
                </p>
                <p className="md:text-[12px] lg:text-[24px] opacity-50">
                  The "Burnout Game" tackles workplace <br /> burnout through
                  interactive challenges, <br /> promoting stress management and{" "}
                  <br />
                  fostering a healthier work environment.
                </p>
              </div>
            </div>
          </div>
          <img
            className="lg:w-full md:w-[400px]"
            src="./vectors/flat.png"
            alt="vector"
          />
        </div>
        <div className="absolute lg:w-[522px] md:w-[300px] right-0 top-0">
          <img
            className="lg:w-full md:w-[400px]"
            src="./vectors/flat.png"
            alt="vector"
          />
          <div className="lg:p-10 md:p-5">
            <div>
              <div className="flex relative">
                <img
                  className="lg:w-[72px] md:w-[40px] h-auto"
                  src="./shapes/cyanSquare.png"
                  alt="img"
                />
                <svg
                  className="lg:w-[40px] lg:h-[40px] md:w-[24px] md:h-[24px] absolute lg:top-4 lg:left-4 md:top-2 md:left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M14.167 18.333V23.333M11.667 20.833L16.667 20.833"
                    stroke="url(#paint0_linear_790_48)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M36.5325 28.9614L34.7245 21.4342C33.7024 17.1793 33.1914 15.0518 31.7418 13.6565C31.3749 13.3034 30.9694 12.9904 30.5326 12.7231C28.8065 11.667 26.5616 11.667 22.0716 11.667H17.9278C13.4378 11.667 11.1928 11.667 9.46674 12.7231C9.02991 12.9904 8.62444 13.3034 8.25758 13.6565C6.80796 15.0518 6.29693 17.1793 5.27489 21.4342L3.46683 28.9614C2.83124 31.6074 4.52076 34.2537 7.23991 34.8712C9.53294 35.3919 11.8917 34.3026 12.9274 32.2447L13.1407 31.8208C14.0917 29.9313 16.065 28.7335 18.2269 28.7335H21.7724C23.9343 28.7335 25.9077 29.9313 26.8586 31.8208L27.0719 32.2447C28.1077 34.3026 30.4664 35.3919 32.7594 34.8712C35.4786 34.2537 37.1681 31.6074 36.5325 28.9614Z"
                    stroke="url(#paint1_linear_790_48)"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M20 11.6667V10C20 9.07953 20.7462 8.33333 21.6667 8.33333H23.3333C24.2538 8.33333 25 7.58714 25 6.66667V5"
                    stroke="url(#paint2_linear_790_48)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M26.6663 18.3337C26.6663 19.2541 25.9201 20.0003 24.9997 20.0003C24.0792 20.0003 23.333 19.2541 23.333 18.3337C23.333 17.4132 24.0792 16.667 24.9997 16.667C25.9201 16.667 26.6663 17.4132 26.6663 18.3337Z"
                    fill="url(#paint3_linear_790_48)"
                  />
                  <path
                    d="M29.9997 23.3337C29.9997 24.2541 29.2535 25.0003 28.333 25.0003C27.4125 25.0003 26.6663 24.2541 26.6663 23.3337C26.6663 22.4132 27.4125 21.667 28.333 21.667C29.2535 21.667 29.9997 22.4132 29.9997 23.3337Z"
                    fill="url(#paint4_linear_790_48)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_790_48"
                      x1="11.667"
                      y1="20.8703"
                      x2="18.0956"
                      y2="20.8703"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_790_48"
                      x1="3.33301"
                      y1="23.5078"
                      x2="46.1901"
                      y2="23.5078"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_790_48"
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
                      id="paint3_linear_790_48"
                      x1="23.333"
                      y1="20.8959"
                      x2="31.9044"
                      y2="20.8959"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint4_linear_790_48"
                      x1="23.333"
                      y1="20.8959"
                      x2="31.9044"
                      y2="20.8959"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="mb-5">
                <p className="font-bold md:text-[24px] lg:text-[48px] text-style">
                  Gamified Employer <br />
                  <span className="second-style"> Engagement</span>
                </p>
                <p className="md:text-[12px] lg:text-[24px] opacity-50 lg:mb-14 md:mb-9">
                  It turns HR interactions into an engaging <br /> game,
                  promoting employee participation <br /> and enhancing
                  workplace culture.
                </p>
              </div>
            </div>
          </div>
          <img src="./vectors/flat.png" alt="vector" />
        </div>
      </div>
    </div>
  );
};

export default RetentionRate;
