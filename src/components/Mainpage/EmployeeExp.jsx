import React, { useState } from "react";

const EmployeeExp = () => {
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
        <div className="mt-[280px] lg:mb-[215px] md:mb-[155px]  w-1/2  ">
          <p className="lg:text-[48px] md:text-[38px] font-bold second-style">
            Employee <span className="text-style">Experience</span>
          </p>
          <div className="flex lg:mt-5 md:2 justify-start items-center relative">
            <p
              className=" absolute opacity-50 mt-5 lg:text-[24px] md:text-[16px]"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              Challenges in EX include issues related to <br /> communication
              gaps, limited growth <br /> opportunities, and a need for enhanced{" "}
              <br />
              work-life balance.
            </p>
            <p
              className="text-start  opacity-50 mt-5 lg:text-[24px] md:text-[16px]"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              Opportunities for improvement in EX include <br /> addressing
              communication gaps, <br /> expanding growth possibilities, and
              striving <br />
              for an improved work-life balance.
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
                  bg-[#fff] m-1 absolute w-4 h-4 rounded-full shadow inset-y-0 left-0 focus:outline-none transition-transform duration-300 transform ${
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
        <div className="relative w-1/2">
          <img
            className="absolute left-[-7px] top-0 "
            src="./vectors/downArrow.png"
            alt="line"
          />
          <div className="absolute top-40 left-[-0.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="251"
              height="253"
              viewBox="0 0 251 253"
              fill="none"
            >
              <path
                d="M250.361 252L16.9299 112.316C7.27296 106.537 1.36137 96.1108 1.36137 84.8569L1.36137 7.89687e-06"
                stroke="black"
                strokeWidth="1.98937"
              />
            </svg>
          </div>
          <div className="absolute lg:top-[500px] md:top-[400px]  left-[-0.5px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="254"
              height="332"
              viewBox="0 0 254 332"
              fill="none"
            >
              <path
                d="M253.361 1.61063L17.0062 139.985C7.19993 145.726 1.17374 156.237 1.17374 167.601L1.17374 331.5"
                stroke="black"
                strokeWidth="1.98937"
              />
            </svg>
          </div>

          <div className="absolute z-4 left-28 lg:top-56 md:top-[20rem]">
            <div className="relative">
              <img src="./vectors/imgBorder.png" alt="lie" />
              <div>
                <img
                  className="absolute lg:top-10 md:p-5 lg:left-10 md:top-0 md:left-0 lg:p-0  flex justify-center items-center "
                  src={`${process.env.PUBLIC_URL}/mainPage/Experience.png`}
                  alt="rectangle"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: isChecked ? "1" : "0",
                  }}
                />
                <img
                  className="absolute lg:top-10 lg:left-10 md:top-0 md:left-0 lg:p-0 md:p-5 "
                  src={`${process.env.PUBLIC_URL}/mainPage/ExperienceDark.png`}
                  alt="rectangle"
                  style={{
                    transition: "opacity 0.5s ease-in-out",
                    opacity: !isChecked ? "1" : "0",
                  }}
                />
                <div
                  className="absolute lg:bottom-10 md:bottom-[-10px] lg:left-[-80px] md:left-[-100px]"
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
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M2.5 11.4212C2.5 17.4999 7.52428 20.7391 11.2022 23.6384C12.5 24.6615 13.75 25.6248 15 25.6248C16.25 25.6248 17.5 24.6615 18.7978 23.6384C22.4757 20.7391 27.5 17.4999 27.5 11.4212C27.5 5.34252 20.6248 1.03165 15 6.87561C9.3752 1.03165 2.5 5.34252 2.5 11.4212Z"
                          fill="white"
                          fillOpacity="0.2"
                        />
                        <path
                          d="M11.2022 23.6384L10.7379 24.2274L11.2022 23.6384ZM15 6.87561L14.4596 7.39571C14.463 7.39918 14.4664 7.40262 14.4698 7.40603L15 6.87561ZM18.7978 23.6384L18.3335 23.0494L18.7978 23.6384ZM16.9698 9.90513C17.2627 10.198 17.7376 10.1979 18.0304 9.90494C18.3233 9.61199 18.3232 9.13712 18.0302 8.84428L16.9698 9.90513ZM11.6665 23.0494C9.78303 21.5647 7.6906 20.0909 6.03266 18.224C4.40043 16.3861 3.25 14.2265 3.25 11.4212H1.75C1.75 14.6946 3.11171 17.1939 4.91109 19.2201C6.68476 21.2173 8.94341 22.8128 10.7379 24.2274L11.6665 23.0494ZM3.25 11.4212C3.25 8.66245 4.80913 6.33927 6.9525 5.35953C9.04859 4.4014 11.8392 4.67315 14.4596 7.39571L15.5404 6.35551C12.536 3.2341 9.07661 2.73931 6.3289 3.9953C3.62847 5.22967 1.75 8.10125 1.75 11.4212H3.25ZM10.7379 24.2274C11.3799 24.7335 12.0572 25.2634 12.7406 25.6628C13.4239 26.0621 14.1846 26.3748 15 26.3748V24.8748C14.5654 24.8748 14.0761 24.7059 13.4974 24.3677C12.9189 24.0297 12.3223 23.5664 11.6665 23.0494L10.7379 24.2274ZM19.2621 24.2274C21.0566 22.8128 23.3152 21.2173 25.0889 19.2201C26.8883 17.1939 28.25 14.6946 28.25 11.4212H26.75C26.75 14.2265 25.5996 16.3861 23.9673 18.224C22.3094 20.0909 20.217 21.5647 18.3335 23.0494L19.2621 24.2274ZM28.25 11.4212C28.25 8.10125 26.3715 5.22967 23.6711 3.9953C20.9234 2.73931 17.464 3.2341 14.4596 6.35551L15.5404 7.39571C18.1608 4.67315 20.9514 4.4014 23.0475 5.35953C25.1909 6.33927 26.75 8.66245 26.75 11.4212H28.25ZM18.3335 23.0494C17.6777 23.5664 17.0811 24.0297 16.5026 24.3677C15.9239 24.7059 15.4346 24.8748 15 24.8748V26.3748C15.8154 26.3748 16.5761 26.0621 17.2594 25.6628C17.9428 25.2634 18.6201 24.7335 19.2621 24.2274L18.3335 23.0494ZM14.4698 7.40603L16.9698 9.90513L18.0302 8.84428L15.5302 6.34518L14.4698 7.40603Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">
                        Absenteeism Rate
                      </p>
                      <p className="font-semibold text-[14px] text-style">
                        -20%
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="absolute lg:top-24 xl:right-[-100px] xl-top-24 lg:right-[-80px] md:top-[-20px] md:right-[-50px] "
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
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <path
                          d="M23.4347 13.9734C23.7883 13.5491 23.731 12.9185 23.3067 12.5649C22.8824 12.2114 22.2518 12.2687 21.8983 12.693L19.5024 15.568C19.008 16.1613 18.7044 16.5218 18.4543 16.7477C18.3383 16.8524 18.2695 16.8942 18.2365 16.9101C18.2298 16.9134 18.2251 16.9153 18.2221 16.9164C18.219 16.9153 18.2143 16.9134 18.2076 16.9101C18.1746 16.8942 18.1058 16.8524 17.9898 16.7477C17.7397 16.5218 17.4361 16.1613 16.9417 15.568L16.5518 15.1002C16.1139 14.5745 15.7191 14.1006 15.3503 13.7676C14.949 13.4053 14.4436 13.0826 13.7776 13.0826C13.1116 13.0826 12.6062 13.4053 12.205 13.7676C11.8362 14.1006 11.4413 14.5745 11.0034 15.1002L8.56495 18.0263C8.21138 18.4506 8.26871 19.0812 8.69299 19.4347C9.11726 19.7883 9.74783 19.731 10.1014 19.3067L12.4972 16.4317C12.9916 15.8384 13.2952 15.4778 13.5454 15.252C13.6613 15.1472 13.7301 15.1055 13.7631 15.0895C13.7698 15.0863 13.7746 15.0843 13.7776 15.0832C13.7806 15.0843 13.7854 15.0863 13.7921 15.0895C13.8251 15.1055 13.8939 15.1472 14.0099 15.252C14.26 15.4778 14.5636 15.8384 15.058 16.4317L15.4478 16.8995C15.8858 17.4252 16.2806 17.899 16.6494 18.2321C17.0507 18.5944 17.5561 18.9171 18.2221 18.9171C18.888 18.9171 19.3935 18.5944 19.7947 18.2321C20.1635 17.899 20.5583 17.4252 20.9963 16.8995L23.4347 13.9734Z"
                          fill="white"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M15.9233 1.6665C12.8455 1.66649 10.4334 1.66647 8.55144 1.9195C6.62513 2.17849 5.1051 2.71894 3.91202 3.91202C2.71894 5.1051 2.17849 6.62513 1.9195 8.55144C1.66647 10.4334 1.66649 12.8455 1.6665 15.9233V16.0763C1.66649 19.1542 1.66647 21.5662 1.9195 23.4482C2.17849 25.3745 2.71894 26.8946 3.91202 28.0877C5.1051 29.2807 6.62513 29.8212 8.55144 30.0802C10.4334 30.3332 12.8455 30.3332 15.9233 30.3332H16.0763C19.1542 30.3332 21.5662 30.3332 23.4482 30.0802C25.3745 29.8212 26.8946 29.2807 28.0877 28.0877C29.2807 26.8946 29.8212 25.3745 30.0802 23.4482C30.3332 21.5662 30.3332 19.1542 30.3332 16.0763V15.9233C30.3332 12.8455 30.3332 10.4334 30.0802 8.55144C29.8212 6.62513 29.2807 5.1051 28.0877 3.91202C26.8946 2.71894 25.3745 2.17849 23.4482 1.9195C21.5662 1.66647 19.1542 1.66649 16.0763 1.6665H15.9233ZM5.32623 5.32623C6.08577 4.56669 7.1134 4.13083 8.81794 3.90166C10.5512 3.66863 12.8289 3.6665 15.9998 3.6665C19.1708 3.6665 21.4484 3.66863 23.1817 3.90166C24.8863 4.13083 25.9139 4.56669 26.6734 5.32623C27.433 6.08577 27.8688 7.1134 28.098 8.81794C28.331 10.5512 28.3332 12.8289 28.3332 15.9998C28.3332 19.1708 28.331 21.4484 28.098 23.1817C27.8688 24.8863 27.433 25.9139 26.6734 26.6734C25.9139 27.433 24.8863 27.8688 23.1817 28.098C21.4484 28.331 19.1708 28.3332 15.9998 28.3332C12.8289 28.3332 10.5512 28.331 8.81794 28.098C7.1134 27.8688 6.08577 27.433 5.32623 26.6734C4.56669 25.9139 4.13083 24.8863 3.90166 23.1817C3.66863 21.4484 3.6665 19.1708 3.6665 15.9998C3.6665 12.8289 3.66863 10.5512 3.90166 8.81794C4.13083 7.1134 4.56669 6.08577 5.32623 5.32623Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">
                        Employee Net <br /> Promoter Score
                      </p>
                      <p className="font-semibold text-[14px] text-style">
                        +30%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="lg:w-[594px] md:w-[400px]"
          src="./vectors/2types.png"
          alt="vector"
        />
      </div>
      <div className="flex lg:mb-[500px] md:mb-[300px] relative justify-between">
        <div className="absolute lg:w-[522px] md:w-[300px] left-[-20px] top-0">
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
                  src="./shapes/blueSquare.png"
                  alt="img"
                />
                <svg
                  className="lg:w-[40px] lg:h-[40px] md:w-[18px] md:h-[18px] absolute lg:top-4 lg:left-4 md:top-3 md:left-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M22.0888 32.3735C21.6007 31.8853 20.8092 31.8853 20.321 32.3735C19.8329 32.8617 19.8329 33.6531 20.321 34.1413L22.0888 32.3735ZM30.8469 33.2574L31.7308 34.1413L30.8469 33.2574ZM6.74196 9.15245L7.62585 10.0363L7.62585 10.0363L6.74196 9.15245ZM5.85808 19.6783C6.34623 20.1665 7.13769 20.1665 7.62585 19.6783C8.114 19.1902 8.114 18.3987 7.62585 17.9105L5.85808 19.6783ZM18.7944 6.74196L19.6783 7.62584C19.9127 7.39142 20.0444 7.07348 20.0444 6.74196C20.0444 6.41044 19.9127 6.0925 19.6783 5.85808L18.7944 6.74196ZM9.15245 6.74196L8.26857 5.85808L8.26857 5.85808L9.15245 6.74196ZM33.2574 21.2049L34.1413 20.321C33.9069 20.0866 33.5889 19.9549 33.2574 19.9549C32.9259 19.9549 32.6079 20.0866 32.3735 20.321L33.2574 21.2049ZM33.2574 30.8469L32.3735 29.963L33.2574 30.8469ZM13.8931 9.87556C13.4049 10.3637 13.4049 11.1552 13.8931 11.6433C14.3812 12.1315 15.1727 12.1315 15.6608 11.6433L13.8931 9.87556ZM28.356 24.3385C27.8679 24.8267 27.8679 25.6181 28.356 26.1063C28.8442 26.5944 29.6356 26.5944 30.1238 26.1063L28.356 24.3385ZM8.26857 5.85808L5.85808 8.26857L7.62585 10.0363L10.0363 7.62584L8.26857 5.85808ZM31.7308 34.1413L34.1413 31.7308L32.3735 29.963L29.963 32.3735L31.7308 34.1413ZM20.321 34.1413C21.4324 35.2526 22.3529 36.1769 23.1799 36.8079C24.0358 37.4609 24.9367 37.9163 26.0259 37.9163V35.4163C25.7031 35.4163 25.3298 35.3036 24.6964 34.8203C24.034 34.315 23.2501 33.5348 22.0888 32.3735L20.321 34.1413ZM29.963 32.3735C28.8017 33.5348 28.0178 34.315 27.3555 34.8203C26.722 35.3036 26.3487 35.4163 26.0259 35.4163V37.9163C27.1151 37.9163 28.0161 37.4609 28.8719 36.8079C29.6989 36.1769 30.6195 35.2526 31.7308 34.1413L29.963 32.3735ZM5.85808 8.26857C4.74675 9.3799 3.82246 10.3004 3.19147 11.1274C2.53848 11.9833 2.08301 12.8842 2.08301 13.9734H4.58301C4.58301 13.6506 4.6957 13.2774 5.17902 12.6439C5.68436 11.9816 6.46454 11.1976 7.62585 10.0363L5.85808 8.26857ZM7.62585 17.9105C6.46454 16.7492 5.68436 15.9653 5.17902 15.303C4.6957 14.6695 4.58301 14.2963 4.58301 13.9734H2.08301C2.08301 15.0627 2.53848 15.9636 3.19147 16.8194C3.82246 17.6464 4.74675 18.567 5.85808 19.6783L7.62585 17.9105ZM19.6783 5.85808C18.567 4.74675 17.6464 3.82245 16.8194 3.19147C15.9636 2.53847 15.0627 2.08301 13.9734 2.08301V4.58301C14.2963 4.58301 14.6695 4.6957 15.303 5.17902C15.9653 5.68435 16.7492 6.46454 17.9105 7.62584L19.6783 5.85808ZM10.0363 7.62584C11.1976 6.46454 11.9816 5.68436 12.6439 5.17902C13.2774 4.6957 13.6506 4.58301 13.9734 4.58301V2.08301C12.8842 2.08301 11.9833 2.53847 11.1274 3.19147C10.3004 3.82245 9.3799 4.74675 8.26857 5.85808L10.0363 7.62584ZM32.3735 22.0888C33.5348 23.2501 34.315 24.034 34.8203 24.6964C35.3036 25.3298 35.4163 25.7031 35.4163 26.0259H37.9163C37.9163 24.9367 37.4609 24.0358 36.8079 23.1799C36.1769 22.3529 35.2526 21.4324 34.1413 20.321L32.3735 22.0888ZM34.1413 31.7308C35.2526 30.6194 36.1769 29.6989 36.8079 28.8719C37.4609 28.016 37.9163 27.1151 37.9163 26.0259H35.4163C35.4163 26.3487 35.3036 26.722 34.8203 27.3554C34.315 28.0178 33.5348 28.8017 32.3735 29.963L34.1413 31.7308ZM17.9105 5.85808L13.8931 9.87556L15.6608 11.6433L19.6783 7.62584L17.9105 5.85808ZM32.3735 20.321L28.356 24.3385L30.1238 26.1063L34.1413 22.0888L32.3735 20.321Z"
                    fill="url(#paint0_linear_703_144)"
                  />
                  <path
                    d="M23.9331 6.79744L25.4779 5.25264C28.0374 2.69313 32.1872 2.69313 34.7467 5.25264C37.3062 7.81214 37.3062 11.9619 34.7467 14.5214L33.2019 16.0662M23.9331 6.79744C23.9331 6.79744 24.1262 10.0801 27.0227 12.9766C29.9192 15.8731 33.2019 16.0662 33.2019 16.0662M23.9331 6.79744L9.73105 20.9995C8.76911 21.9614 8.28814 22.4424 7.8745 22.9727C7.38657 23.5983 6.96823 24.2752 6.62691 24.9914C6.33756 25.5985 6.12247 26.2438 5.69228 27.5344L4.31495 31.6663L3.86935 33.0031M33.2019 16.0662L18.9998 30.2683C18.0379 31.2302 17.5569 31.7112 17.0266 32.1248C16.401 32.6128 15.7242 33.0311 15.008 33.3724C14.4008 33.6618 13.7555 33.8769 12.465 34.3071L8.33301 35.6844L6.99621 36.13M6.99621 36.13L5.65941 36.5756C5.02431 36.7873 4.3241 36.622 3.85073 36.1486C3.37735 35.6752 3.21205 34.975 3.42376 34.3399L3.86935 33.0031M6.99621 36.13L3.86935 33.0031"
                    stroke="url(#paint1_linear_703_144)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_703_144"
                      x1="3.33301"
                      y1="20.2485"
                      x2="46.1901"
                      y2="20.2485"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_703_144"
                      x1="3.33301"
                      y1="20.2485"
                      x2="46.1901"
                      y2="20.2485"
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
                  Team Skill Set <br />
                  <span className="second-style"> Analysis</span>
                </p>
                <p className="md:text-[12px] lg:text-[24px] opacity-50">
                  This game assesses and improves <br /> workforce capabilities
                  through interactive <br /> scenarios, fostering collaboration
                  and <br /> identifying skill gaps.
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
        <div className="absolute lg:w-[522px] md:w-[300px] right-[-20px] top-0">
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
                  src="./shapes/pinkSquare.png"
                  alt="img"
                />
                <svg
                  className="lg:w-[40px] lg:h-[40px] md:w-[25px] md:h-[25px] absolute lg:top-4 lg:left-4 md:top-2 md:left-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34.667 20.0001H30.7271C29.6305 20.0001 29.0822 20.0001 28.5966 20.2163C28.1111 20.4326 27.7441 20.8403 27.0102 21.6557L25.2948 23.5617C24.6927 24.2307 24.3917 24.5652 24.0099 24.557C23.628 24.5488 23.3419 24.2019 22.7696 23.5083L16.8893 16.3807C16.3558 15.7339 16.089 15.4106 15.727 15.3888C15.3649 15.3671 15.0614 15.6562 14.4543 16.2344L11.9486 18.6207C11.2334 19.3019 10.8758 19.6424 10.4288 19.8212C9.98178 20.0001 9.48796 20.0001 8.50033 20.0001H4.66699"
                    stroke="url(#paint0_linear_703_110)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.6029 32.2845L15.3929 31.3158H15.3929L14.6029 32.2845ZM19.6667 9.16461L18.7515 10.0161C18.988 10.2703 19.3195 10.4146 19.6667 10.4146C20.0138 10.4146 20.3453 10.2703 20.5818 10.0161L19.6667 9.16461ZM24.7305 32.2846L25.5204 33.2533L24.7305 32.2846ZM15.3929 31.3158C12.9764 29.3453 10.1549 26.7613 7.94801 23.9329C5.71742 21.0742 4.25 18.1368 4.25 15.4341H1.75C1.75 18.9771 3.6321 22.4655 5.977 25.4708C8.34561 28.5065 11.3255 31.2249 13.8129 33.2533L15.3929 31.3158ZM4.25 15.4341C4.25 10.8843 6.34651 7.8409 9.00108 6.73652C11.6216 5.6463 15.2547 6.25799 18.7515 10.0161L20.5818 8.31312C16.5789 4.01102 11.8787 2.83164 8.04079 4.42831C4.23696 6.01082 1.75 10.1323 1.75 15.4341H4.25ZM25.5204 33.2533C28.0078 31.225 30.9877 28.5066 33.3563 25.4709C35.7012 22.4656 37.5833 18.9771 37.5833 15.434H35.0833C35.0833 18.1369 33.6159 21.0742 31.3853 23.933C29.1785 26.7614 26.3569 29.3453 23.9405 31.3158L25.5204 33.2533ZM37.5833 15.434C37.5833 10.1321 35.0964 6.01064 31.2925 4.42818C27.4547 2.83157 22.7545 4.01103 18.7515 8.31312L20.5818 10.0161C24.0786 6.25798 27.7117 5.64623 30.3323 6.73641C32.9868 7.84074 35.0833 10.8841 35.0833 15.434H37.5833ZM13.8129 33.2533C15.9312 34.9806 17.4016 36.25 19.6667 36.25L19.6667 33.75C18.4641 33.75 17.7146 33.2091 15.3929 31.3158L13.8129 33.2533ZM23.9405 31.3158C21.6188 33.2091 20.8693 33.75 19.6667 33.75L19.6667 36.25C21.9317 36.25 23.4022 34.9806 25.5204 33.2533L23.9405 31.3158Z"
                    fill="url(#paint1_linear_703_110)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_703_110"
                      x1="4.66699"
                      y1="20.0409"
                      x2="43.2384"
                      y2="20.0408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_703_110"
                      x1="3"
                      y1="20.2239"
                      x2="45.8571"
                      y2="20.2239"
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
                  Game Based <br />
                  <span className="second-style"> Pulse Survey</span>
                </p>
                <p className="md:text-[12px] lg:text-[24px] opacity-50">
                  This game transforms employee feedback <br /> into an
                  interactive game, offering real- <br />
                  time insights into sentiments, preferences, <br /> and areas
                  for improvement.
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
      </div>
    </div>
  );
};

export default EmployeeExp;
