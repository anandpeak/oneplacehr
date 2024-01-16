import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  const toggleStyle = {
    background: "linear-gradient(102deg, #F48D7E 8.63%, #D74C38 93.24%)",
    boxShadow: "2.554px 0px 15.327px 5.109px rgba(0, 0, 0, 0.10) inset",
  };
  return (
    <div className="sm:py-20 md:px-10 sm:px-20 p-10 lg:px-20 bg-black">
      <div className="flex flex-col gap-10 sm:flex-col md:flex-row justify-between items-start">
        <div className="mt-10">
          <div className="flex-col justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <div className="relative mt-2">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isChecked}
                      onChange={handleToggle}
                    />
                    <div
                      className={`w-10 h-5 sm:w-12 sm:h-6 rounded-full shadow-inner  `}
                      style={
                        isChecked ? toggleStyle : { backgroundColor: "#879DAB" }
                      }
                    ></div>
                    <div
                      className={`
                  bg-[#fff] m-1 absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow inset-y-0 left-0 focus:outline-none transition-transform duration-300 transform ${
                    isChecked
                      ? "translate-x-5 sm:translate-x-6"
                      : "translate-x-0"
                  }`}
                    ></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-white text-[36px] sm:text-[40px] flex items-center text-bold ">
                      oneplace.hr
                    </p>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <div className="flex gap-[16px] mt-10">
                <div>
                  <a
                    className="flex justify-center items-center"
                    href="https://www.facebook.com/metacog.mn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_63_467)">
                        <path
                          d="M8.37501 2.49999H10.25C10.4226 2.49999 10.5625 2.36007 10.5625 2.18748V0.31248C10.5625 0.139922 10.4226 0 10.25 0H8.37501C6.47739 0.00208008 4.93957 1.53987 4.93752 3.43749V5.625H2.75001C2.57742 5.625 2.4375 5.76492 2.4375 5.93751V7.81251C2.4375 7.9851 2.57742 8.12502 2.75001 8.12502H4.93752V14.6875C4.93752 14.8601 5.07744 15 5.25003 15H7.12503C7.29762 15 7.43754 14.8601 7.43754 14.6875V8.12502H9.62505C9.75949 8.12493 9.87882 8.03883 9.9213 7.91127L10.5463 6.03627C10.6008 5.87253 10.5123 5.69558 10.3486 5.64103C10.3168 5.63045 10.2835 5.62503 10.25 5.625H7.43754V3.43749C7.43751 2.91973 7.85725 2.49999 8.37501 2.49999Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_63_467">
                          <rect width="15" height="15" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    className="flex justify-center items-center"
                    href="https://twitter.com/MetacogMn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M16.5 4.34967C15.9363 4.59424 15.3401 4.75592 14.73 4.82967C15.3736 4.44516 15.856 3.84026 16.0875 3.12717C15.4827 3.48722 14.8206 3.74089 14.13 3.87717C13.6684 3.3766 13.0537 3.04339 12.3824 2.92981C11.711 2.81622 11.0209 2.92869 10.4203 3.24956C9.81978 3.57043 9.3427 4.08157 9.06393 4.7028C8.78516 5.32403 8.72047 6.02021 8.88 6.68217C7.65707 6.62031 6.46083 6.30188 5.36899 5.74757C4.27715 5.19325 3.31413 4.41544 2.5425 3.46467C2.27185 3.9373 2.12964 4.47254 2.13 5.01717C2.12904 5.52296 2.25316 6.02113 2.49132 6.46734C2.72947 6.91355 3.07426 7.29395 3.495 7.57467C3.00598 7.56136 2.52741 7.43014 2.1 7.19217V7.22967C2.10367 7.93834 2.352 8.62399 2.80299 9.17064C3.25398 9.7173 3.87994 10.0914 4.575 10.2297C4.30744 10.3111 4.02966 10.354 3.75 10.3572C3.55642 10.3549 3.36332 10.3374 3.1725 10.3047C3.37043 10.9143 3.75347 11.447 4.26831 11.8288C4.78315 12.2105 5.40418 12.4223 6.045 12.4347C4.9629 13.2861 3.62691 13.7508 2.25 13.7547C1.9993 13.7555 1.7488 13.7405 1.5 13.7097C2.90582 14.6174 4.54411 15.0992 6.2175 15.0972C7.37227 15.1092 8.51785 14.8909 9.58734 14.4552C10.6568 14.0195 11.6288 13.3751 12.4464 12.5595C13.264 11.744 13.911 10.7737 14.3494 9.70535C14.7879 8.63698 15.009 7.49196 15 6.33717C15 6.20967 15 6.07467 15 5.93967C15.5885 5.50078 16.0961 4.96274 16.5 4.34967Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
                <div>
                  <a
                    className="flex justify-center items-center"
                    href="https://www.instagram.com/metacogmetrics/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="white"
                      />
                    </svg>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        opacity="0.1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0009 7.4668C13.6834 7.4668 13.3925 7.47693 12.4823 7.51835C11.5739 7.55995 10.9538 7.70378 10.4112 7.9148C9.84993 8.13276 9.37384 8.42432 8.89952 8.89881C8.42485 9.37313 8.13329 9.84922 7.91462 10.4103C7.70307 10.9531 7.55906 11.5733 7.51818 12.4814C7.47746 13.3917 7.4668 13.6827 7.4668 16.0002C7.4668 18.3178 7.47711 18.6077 7.51835 19.5179C7.56013 20.4264 7.70395 21.0465 7.9148 21.5891C8.13294 22.1503 8.4245 22.6264 8.89899 23.1007C9.37313 23.5754 9.84922 23.8677 10.4101 24.0856C10.9531 24.2967 11.5733 24.4405 12.4816 24.4821C13.3918 24.5235 13.6825 24.5336 15.9999 24.5336C18.3176 24.5336 18.6075 24.5235 19.5178 24.4821C20.4262 24.4405 21.047 24.2967 21.59 24.0856C22.151 23.8677 22.6264 23.5754 23.1006 23.1007C23.5752 22.6264 23.8668 22.1503 24.0855 21.5893C24.2952 21.0465 24.4392 20.4262 24.4819 19.5181C24.5228 18.6079 24.5335 18.3178 24.5335 16.0002C24.5335 13.6827 24.5228 13.3918 24.4819 12.4816C24.4392 11.5732 24.2952 10.9531 24.0855 10.4105C23.8668 9.84922 23.5752 9.37313 23.1006 8.89881C22.6259 8.42414 22.1512 8.13258 21.5894 7.9148C21.0454 7.70378 20.425 7.55995 19.5165 7.51835C18.6063 7.47693 18.3165 7.4668 15.9983 7.4668H16.0009ZM15.2354 9.00457C15.4626 9.00421 15.7161 9.00457 16.0009 9.00457C18.2793 9.00457 18.5494 9.01274 19.4491 9.05363C20.2811 9.09168 20.7327 9.2307 21.0335 9.3475C21.4317 9.50217 21.7156 9.68706 22.0141 9.98573C22.3128 10.2844 22.4977 10.5688 22.6527 10.9671C22.7695 11.2675 22.9087 11.7191 22.9466 12.5511C22.9875 13.4507 22.9963 13.7209 22.9963 15.9982C22.9963 18.2756 22.9875 18.5458 22.9466 19.4454C22.9085 20.2774 22.7695 20.729 22.6527 21.0294C22.498 21.4276 22.3128 21.7112 22.0141 22.0097C21.7154 22.3084 21.4319 22.4932 21.0335 22.6479C20.733 22.7652 20.2811 22.9039 19.4491 22.942C18.5495 22.9828 18.2793 22.9917 16.0009 22.9917C13.7223 22.9917 13.4522 22.9828 12.5527 22.942C11.7207 22.9036 11.2691 22.7645 10.9681 22.6477C10.5699 22.4931 10.2855 22.3082 9.98679 22.0095C9.68812 21.7108 9.50323 21.4271 9.3482 21.0287C9.2314 20.7282 9.0922 20.2767 9.05433 19.4447C9.01344 18.5451 9.00527 18.2749 9.00527 15.9961C9.00527 13.7173 9.01344 13.4485 9.05433 12.549C9.09238 11.717 9.2314 11.2654 9.3482 10.9646C9.50287 10.5664 9.68812 10.2819 9.98679 9.98324C10.2855 9.68457 10.5699 9.49968 10.9681 9.34466C11.2689 9.22732 11.7207 9.08866 12.5527 9.05043C13.3399 9.01488 13.645 9.00421 15.2354 9.00243V9.00457ZM20.556 10.4215C19.9906 10.4215 19.532 10.8796 19.532 11.4451C19.532 12.0105 19.9906 12.4691 20.556 12.4691C21.1213 12.4691 21.58 12.0105 21.58 11.4451C21.58 10.8798 21.1213 10.4215 20.556 10.4215ZM16.0009 11.6179C13.5808 11.6179 11.6187 13.5801 11.6187 16.0002C11.6187 18.4203 13.5808 20.3816 16.0009 20.3816C18.4211 20.3816 20.3825 18.4203 20.3825 16.0002C20.3825 13.5801 18.4211 11.6179 16.0009 11.6179ZM16.0009 13.1557C17.5718 13.1557 18.8454 14.4292 18.8454 16.0002C18.8454 17.5711 17.5718 18.8447 16.0009 18.8447C14.4299 18.8447 13.1564 17.5711 13.1564 16.0002C13.1564 14.4292 14.4299 13.1557 16.0009 13.1557Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <p className="text-[#D3D2D2] text-[14px] mt-10">
                  © 2023 One Place LLC
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[16px] text-white font-bold">Products</p>
          <div>
            <ul className="text-[16px]  text-white">
              <li className="mt-4">Recruiting Game Scene</li>
              <li className="mt-4">Team Emotional Analysis</li>
              <li className="mt-4">Game Based Pulse Survey</li>
              <li className="mt-4">Burnout Game</li>
              <li className="mt-4">Gamified Employer Engagement</li>
            </ul>
          </div>
        </div>
        <div className="me-[200px] md:me-[50px] sm:me-200 lg:me-[200px]">
          <p className="text-[16px] text-white font-bold">Science</p>
          <div className="w-[100px]">
            <ul className="text-[16px] text-white">
              <li className="mt-4">
                <Link to="/product">Products</Link>
              </li>
              <li className="mt-4">
                <Link to="/science">Science</Link>
              </li>
              <li className="mt-4">
                <Link to="/caseStudies">Case Studies</Link>
              </li>
              <li className="mt-4">
                <Link to="/ourStory">Our Story</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
