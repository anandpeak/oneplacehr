import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const RecProcess = () => {
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
    <div className="m-auto w-10/12">
      <div className="flex">
        <div className="relative w-1/2">
          <img
            className="absolute right-[-9px] top-5 "
            src={`/vectors/downArrow.png`}
            alt="line"
          />
          <img
            className="absolute right-[-2px]   top-44 "
            src="/vectors/toLeft.png"
            alt="line"
          />
          <img
            className="absolute right-[-2px] md:top-[400px] lg:top-[560px]"
            src="/vectors/leftToDown.png"
            alt="line"
          />

          <div className="absolute z-4 right-28 top-[20rem]">
            <div className="relative">
              <img src={`/vectors/ImgBorder.png`} alt="border" />
              <div>
                <img
                  className="absolute lg:top-10 lg:right-10 lg:p-0 md:top-0 md:right-0 md:p-5 flex justify-center items-center "
                  src={`/mainPage/Recruitment.png`}
                  alt="rectangle"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
                />
                <img
                  className="absolute lg:top-10 lg:right-10 lg:p-0 md:top-0 md:right-0 md:p-5"
                  src="/mainPage/RecruitmentDark.png"
                  alt="rectangle"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: !isChecked ? "1" : "0",
                  }}
                />
                <div
                  className="absolute lg:bottom-10 lg:right-[-40px] md:bottom-0 md:right-[-100px] w-[240px]"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
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
                        width="35"
                        height="35"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.77158 6.75855C11.832 1.70524 20.0582 1.75897 25.1496 6.85037C30.2432 11.944 30.2948 20.175 25.2349 25.2349C20.175 30.2948 11.9439 30.2432 6.85032 25.1496C3.83185 22.1312 2.58538 18.0132 3.12063 14.1083C3.19563 13.5611 3.69999 13.1784 4.24716 13.2534C4.79433 13.3284 5.1771 13.8327 5.1021 14.3799C4.6488 17.687 5.70376 21.1747 8.26453 23.7354C12.5905 28.0614 19.5552 28.0862 23.8207 23.8207C28.0861 19.5552 28.0614 12.5906 23.7354 8.26458C19.4116 3.94082 12.4518 3.91385 8.1858 8.17276L9.18273 8.17777C9.73501 8.18055 10.1805 8.63051 10.1777 9.18278C10.1749 9.73506 9.72496 10.1805 9.17268 10.1777L5.77861 10.1607C5.23026 10.1579 4.78641 9.71408 4.78365 9.16573L4.76659 5.77166C4.76382 5.21938 5.20928 4.76942 5.76156 4.76665C6.31383 4.76387 6.76379 5.20933 6.76657 5.76161L6.77158 6.75855ZM15.9998 9.66656C16.5521 9.66656 16.9998 10.1143 16.9998 10.6666V15.5857L20.0403 18.6261C20.4308 19.0166 20.4308 19.6498 20.0403 20.0403C19.6498 20.4309 19.0166 20.4309 18.6261 20.0403L14.9998 16.4141V10.6666C14.9998 10.1143 15.4476 9.66656 15.9998 9.66656Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">
                        {t("Mainpage.Recprocess.hoverHire")}
                      </p>
                      <p className="font-semibold text-[14px] text-style">
                        -34.3%
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute lg:top-10 lg:left-[-40px] md:top-0 md:left-[-60px] w-[210px]"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
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
                        width="40"
                        height="40"
                        viewBox="0 0 31 31"
                        fill="none"
                      >
                        <path
                          d="M15.4896 20.313C8.28965 20.313 7.01417 13.1374 6.78822 7.44608C6.72537 5.86296 6.69394 5.0714 7.28859 4.33903C7.88323 3.60666 8.59494 3.48658 10.0184 3.24642C11.4234 3.00935 13.2601 2.81299 15.4896 2.81299C17.719 2.81299 19.5557 3.00935 20.9608 3.24642C22.3842 3.48658 23.0959 3.60666 23.6906 4.33903C24.2852 5.0714 24.2538 5.86296 24.1909 7.44608C23.965 13.1374 22.6895 20.313 15.4896 20.313Z"
                          fill="url(#paint0_linear_63_713)"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M24.2393 6.56299L25.425 6.95825C26.6626 7.37077 27.2814 7.57703 27.6353 8.06809C27.9892 8.55914 27.9892 9.2114 27.9892 10.5159L27.9892 10.6066C27.9892 11.6825 27.9891 12.2205 27.7302 12.6606C27.4712 13.1007 27.0009 13.362 26.0604 13.8845L22.3643 15.938"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M6.73919 6.56299L5.5534 6.95825C4.31584 7.37077 3.69705 7.57703 3.34313 8.06809C2.98921 8.55914 2.98922 9.2114 2.98926 10.5159L2.98926 10.6066C2.98929 11.6825 2.9893 12.2205 3.24829 12.6606C3.50728 13.1007 3.97754 13.362 4.91807 13.8845L8.61419 15.938"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M15.4893 21.563V24.063"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <path
                          d="M19.8643 27.813H11.1143L11.5383 25.6928C11.6551 25.1086 12.1682 24.688 12.764 24.688H18.2145C18.8104 24.688 19.3234 25.1086 19.4402 25.6928L19.8643 27.813Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.9893 27.813H7.98926"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_63_713"
                            x1="6.75586"
                            y1="11.6936"
                            x2="29.214"
                            y2="11.6936"
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
                      <p className="font-semibold text-[14px]">
                        {t("Mainpage.Recprocess.hoverOver")}
                      </p>
                      <p className="font-semibold text-[14px] text-style">
                        -34.3%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mt-[350px] lg:mb-[200px] md:mt-[280px] md:mb-[68px] w-1/2  ps-10 ">
          <p className="lg:text-[48px] md:text-[38px] font-bold second-style">
            {t("Mainpage.Recprocess.title1")}
            <span className="text-style">
              {t("Mainpage.Recprocess.title2")}
            </span>
          </p>
          <div className="flex justify-start items-center relative">
            <p
              className="text-start opacity-50 mt-5 lg:text-[24px] md:text-[16px] flex justify-start"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              {t("Mainpage.Recprocess.description")}
            </p>
            <p
              className=" absolute  opacity-50 mt-5 lg:text-[24px] md:text-[16px]"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              {t("Mainpage.Recprocess.hoverDesc")}
            </p>
          </div>
          <div className="lg:flex md:hidden mt-5 items-center">
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
                  bg-[#fff] m-1 absolute w-4 h-4 rounded-full shadow inset-y-0 left-0  focus:outline-none transition-transform duration-300 transform ${
                    isChecked ? "translate-x-6" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-[40px] font-bold">oneplace.hr</div>
            </label>
          </div>
          <div className="lg:hidden md:flex mt-5 items-center">
            <label className="flex items-center cursor-pointer">
              <div className="relative mt-2">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div
                  className={`w-12 h-7  rounded-full shadow-inner  `}
                  style={
                    isChecked ? toggleStyle : { backgroundColor: "#879DAB" }
                  }
                ></div>
                <div
                  className={`
                  bg-[#fff] m-1 absolute w-5 h-5 rounded-full shadow inset-y-0 left-0 focus:outline-none transition-transform duration-300 transform ${
                    isChecked ? "translate-x-full" : "translate-x-0"
                  }`}
                ></div>
              </div>
              <div className="ml-3 text-[30px] font-bold">oneplace.hr</div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecProcess;
