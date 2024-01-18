import React, { useState } from "react";
import Header from "../components/Header";
import MainButton from "../components/MainButton";
import Content from "../components/Mainpage/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const MainPage = () => {
  const [imageSrc, setImageSrc] = useState(false);

  const secondStyle = {
    background:
      "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 128.57%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  setTimeout(() => {
    setImageSrc(!imageSrc);
  }, 10000);

  return (
    <div className="relative">
      <Header />
      <div className="bg-[#202020]">
        <div className="relative py-20">
          <div className="flex flex-col-reverse sm:flex-col-reverse md:flex-row m-auto justify-center w-10/12 items-center ">
            <div className="me-10">
              <p className="font-bold text-[36px] sm:text-[36px] md:text-[46px] lg:text-[56px] text-white pe-2">
                <span className="text-style">Gamify your</span> <br />
                <span style={secondStyle}>Employee Experience</span>
              </p>
              <p className="text-white mt-2 mb-8 text-[18px] text-opacity-50 hidden sm:hidden md:block lg:hidden">
                The oneplace.hr redefines traditional human <br /> resources
                processes through gamification.
              </p>
              <p
                className="text-white mt-2 mb-8 text-[24px] text-opacity-50 hidden sm:hidden md:hidden lg:block
              "
              >
                The oneplace.hr redefines traditional human <br />
                resources processes through gamification.
              </p>
              <p className="text-white mt-4 mb-8 text-[16px]  text-opacity-50 block sm:block md:hidden lg:hidden">
                The oneplace.hr redefines traditional human resources processes
                through gamification.
              </p>
              <MainButton
                className="md:flex sm:hidden hidden"
                text="Let's"
                fSize="22px"
                sText="Gamify"
                sColor="#D74C38"
              />
              <MainButton
                className="md:hidden sm:flex block"
                text="Let's"
                fSize="16px"
                sText="Gamify"
                sColor="#D74C38"
              />
            </div>
            <div className="ms-1 relative">
              <div className="relative flex justify-between items-center">
                <img
                  src="./mainPage/main.png"
                  alt="human"
                  style={{
                    transition: "opacity  0.5s ease-in-out",
                    opacity: imageSrc ? "0" : "1",
                  }}
                />
                <img
                  src="./mainPage/main2.png"
                  alt="human"
                  className="absolute"
                  style={{
                    transition: "opacity  0.5s ease-in-out",
                    opacity: imageSrc ? "1" : "0",
                  }}
                />
              </div>

              <div className="absolute top-20 right-[-20px] md:hidden sm:block block ">
                <div className="bg-white flex  rounded-[77px] px-2 py-1 gap-2 items-center justify-between">
                  <div className="flex items-center justify-center rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 73 73"
                      fill="none"
                    >
                      <circle
                        cx="36.5107"
                        cy="36.687"
                        r="36"
                        transform="rotate(90 36.5107 36.687)"
                        fill="url(#paint0_linear_63_705)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_63_705"
                          x1="4.35074"
                          y1="17.6282"
                          x2="75.2771"
                          y2="33.3164"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F48D7E" />
                          <stop offset="1" stopColor="#D74C38" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
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
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[8px] ">
                      Reduced <br /> turnover rate
                    </p>
                    <p className="font-semibold text-[8px] text-style">64.3%</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 left-[-10px] md:hidden sm:block block">
                <div className="bg-white flex  rounded-[77px] px-2 py-1 gap-2 items-center justify-between">
                  <div className="flex justify-center items-center rounded-full ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="35"
                      height="35"
                      viewBox="0 0 73 73"
                      fill="none"
                    >
                      <circle
                        cx="36.5107"
                        cy="36.687"
                        r="36"
                        transform="rotate(90 36.5107 36.687)"
                        fill="url(#paint0_linear_63_705)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_63_705"
                          x1="4.35074"
                          y1="17.6282"
                          x2="75.2771"
                          y2="33.3164"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#F48D7E" />
                          <stop offset="1" stopColor="#D74C38" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    <p className="font-semibold text-[8px]">
                      Optimized <br /> time-to-hire.
                    </p>
                    <p className="font-semibold text-style text-[8px]">
                      52.3%{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-40 right-[-20px] lg:hidden md:block sm:hidden hidden ">
                <div className="bg-white flex  rounded-[77px] px-3 py-1  items-center justify-between">
                  <div className="flex items-center justify-center rounded-full me-3 ">
                    <svg
                      className="z-10 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 57 57"
                      fill="none"
                    >
                      <circle
                        cx="28.5"
                        cy="28.5"
                        r="28.5"
                        fill="url(#paint0_linear_175_639)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_175_639"
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
                      className="absolute z-20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[10px]">
                      Reduced <br /> turnover rate
                    </p>
                    <p className="font-semibold text-style text-[14px]">
                      64.3%
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-20 left-0 lg:hidden md:block sm:hidden hidden">
                <div className="bg-white flex  rounded-[77px] px-3 py-1 gap-2 items-center justify-between">
                  <div className="flex justify-center items-center me-1 rounded-full ">
                    <svg
                      className="z-10 "
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 57 57"
                      fill="none"
                    >
                      <circle
                        cx="28.5"
                        cy="28.5"
                        r="28.5"
                        fill="url(#paint0_linear_175_639)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_175_639"
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
                      className="absolute z-20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
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
                    <p className="font-semibold text-[10px]">
                      Optimized <br /> time-to-hire.
                    </p>
                    <p className="font-semibold text-style text-[14px]">
                      52.3%{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute top-40 right-[-60px] lg:block md:hidden sm:hidden hidden ">
                <div className=" flex bg-white  rounded-[77px] px-5 py-2  items-center justify-between">
                  <div className="flex items-center justify-center rounded-full me-5 ">
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
                        fill="url(#paint0_linear_139_1110)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_139_1110"
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
                      className="absolute z-40"
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
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
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">
                      Reduced <br /> turnover rate
                    </p>
                    <p className="font-semibold text-style">64.3%</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-20 left-2 lg:block md:hidden sm:hidden hidden">
                <div className="bg-white flex  rounded-[77px] px-5 py-2 gap-2 items-center justify-between">
                  <div className="flex justify-center items-center me-1 rounded-full ">
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
                        fill="url(#paint0_linear_139_1110)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_139_1110"
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
                      className="absolute z-40"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
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
                    <p className="font-semibold">
                      Optimized <br /> time-to-hire.
                    </p>
                    <p className="font-semibold text-style">52.3% </p>
                  </div>
                </div>
              </div>
              <div className=" items-center justify-center  absolute right-20 bottom-16 rounded-full lg:flex md:hidden sm:hidden hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="72"
                  height="72"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <circle
                    cx="28.5"
                    cy="28.5"
                    r="28.5"
                    fill="url(#paint0_linear_139_1110)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_139_1110"
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
                  className="absolute z-40"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <circle
                    cx="19.6771"
                    cy="19.8538"
                    r="15.8333"
                    stroke="url(#paint0_linear_63_706)"
                    strokeWidth="3"
                  />
                  <path
                    d="M31.3438 31.5205L37.1771 37.3538"
                    stroke="url(#paint1_linear_63_706)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M15.5107 19.8537H19.6774M19.6774 19.8537H23.8441M19.6774 19.8537V24.0203M19.6774 19.8537V15.687"
                    stroke="url(#paint2_linear_63_706)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_63_706"
                      x1="19.6771"
                      y1="4.02051"
                      x2="19.6771"
                      y2="35.6872"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.46" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_63_706"
                      x1="34.2604"
                      y1="31.5205"
                      x2="34.2604"
                      y2="37.3538"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.46" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_63_706"
                      x1="19.6774"
                      y1="15.687"
                      x2="19.6774"
                      y2="24.0203"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0.46" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className=" items-center justify-center  absolute right-20  bottom-10 rounded-full lg:hidden md:flex sm:hidden hidden ">
                <svg
                  className="z-10 "
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 57 57"
                  fill="none"
                >
                  <circle
                    cx="28.5"
                    cy="28.5"
                    r="28.5"
                    fill="url(#paint0_linear_175_639)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_175_639"
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
                <img
                  src="./icons/magnifier.png"
                  className="absolute z-20 h-8 w-8"
                  alt="icon"
                />
              </div>
            </div>
          </div>
          <img
            src="./vectors/Ellipse.png"
            className="md:block sm:hidden hidden overflow-hidden absolute top-1/2 transform -translate-y-1/2 right-0 z-10"
            alt="ellipse"
          />
          <img
            src="./vectors/EllipsePhone.png"
            alt="ellipse"
            className="block sm:block md:hidden overflow-hidden w-full absolute top-[-80px] left-0 sm:z-0 "
          />
        </div>
        <div className="pb-10">
          <Swiper
            className="flex items-center"
            modules={[Autoplay, FreeMode]}
            grabCursor={true}
            autoplay={true}
            freeMode={true}
            breakpoints={{
              0: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/astana.png" alt="astana" />
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/cocaCola.png" alt="cocaCola" />
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/cu.png" alt="Cu" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/iceMark.png" alt="icemark" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/invescore.png" alt="invesCore" />
                </div>
              </SwiperSlide>{" "}
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/mandal.png" alt="mandal" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/mBank.png" alt="mbank" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/monos.png" alt="monos" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/ncd.png" alt="ncd" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/teso.png" alt="teso" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="flex justify-center ">
                  <img src="./clients/unitel.png" alt="unitel" />
                </div>
              </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default MainPage;
