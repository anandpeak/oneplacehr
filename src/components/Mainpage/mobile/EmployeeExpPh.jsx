import React, { useState } from "react";

const EmployeeExpPh = () => {
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
          src="./mainPage/Experience.png"
          alt="rectangle"
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: isChecked ? "1" : "0",
          }}
        />
        <img
          className="absolute p-10"
          src="./mainPage/ExperienceDark.png"
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
            Employee <br /> <span className="second-style">Experience</span>
          </p>
          <div className="flex items-start mt-5">
            <p
              className="opacity-50"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              Challenges in EX include issues related <br /> to communication
              gaps, limited growth <br />
              opportunities, and a need for enhanced <br /> work-life balance.
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
                <img src="./shapes/blueSquare.png" alt="img" />
                <svg
                  className="absolute top-4 left-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M22.0891 32.3738C21.601 31.8857 20.8095 31.8857 20.3214 32.3738C19.8332 32.862 19.8332 33.6534 20.3214 34.1416L22.0891 32.3738ZM30.8472 33.2577L31.7311 34.1416L30.8472 33.2577ZM6.7423 9.15276L7.62618 10.0366L7.62618 10.0366L6.7423 9.15276ZM5.85841 19.6786C6.34657 20.1668 7.13803 20.1668 7.62618 19.6786C8.11434 19.1905 8.11434 18.399 7.62618 17.9108L5.85841 19.6786ZM18.7948 6.74226L19.6786 7.62615C19.9131 7.39173 20.0448 7.07379 20.0448 6.74227C20.0448 6.41074 19.9131 6.0928 19.6786 5.85838L18.7948 6.74226ZM9.15279 6.74227L8.26891 5.85838L8.26891 5.85838L9.15279 6.74227ZM33.2577 21.2052L34.1416 20.3213C33.9072 20.0869 33.5892 19.9552 33.2577 19.9552C32.9262 19.9552 32.6083 20.0869 32.3738 20.3213L33.2577 21.2052ZM33.2577 30.8472L32.3738 29.9633L33.2577 30.8472ZM13.8934 9.87587C13.4052 10.364 13.4052 11.1555 13.8934 11.6436C14.3815 12.1318 15.173 12.1318 15.6612 11.6436L13.8934 9.87587ZM28.3564 24.3388C27.8682 24.827 27.8682 25.6184 28.3564 26.1066C28.8445 26.5947 29.636 26.5947 30.1241 26.1066L28.3564 24.3388ZM8.26891 5.85838L5.85841 8.26888L7.62618 10.0366L10.0367 7.62615L8.26891 5.85838ZM31.7311 34.1416L34.1416 31.7311L32.3738 29.9633L29.9634 32.3738L31.7311 34.1416ZM20.3214 34.1416C21.4327 35.2529 22.3532 36.1772 23.1802 36.8082C24.0361 37.4612 24.937 37.9166 26.0262 37.9166V35.4166C25.7034 35.4166 25.3302 35.304 24.6967 34.8206C24.0344 34.3153 23.2504 33.5351 22.0891 32.3738L20.3214 34.1416ZM29.9634 32.3738C28.802 33.5351 28.0181 34.3153 27.3558 34.8206C26.7223 35.304 26.3491 35.4166 26.0262 35.4166V37.9166C27.1155 37.9166 28.0164 37.4612 28.8722 36.8082C29.6992 36.1772 30.6198 35.2529 31.7311 34.1416L29.9634 32.3738ZM5.85841 8.26888C4.74708 9.38021 3.82279 10.3007 3.19181 11.1278C2.53881 11.9836 2.08334 12.8845 2.08334 13.9737H4.58334C4.58334 13.6509 4.69604 13.2777 5.17936 12.6442C5.68469 11.9819 6.46488 11.1979 7.62618 10.0366L5.85841 8.26888ZM7.62618 17.9108C6.46488 16.7495 5.68469 15.9656 5.17936 15.3033C4.69603 14.6698 4.58334 14.2966 4.58334 13.9737H2.08334C2.08334 15.063 2.53881 15.9639 3.19181 16.8197C3.82279 17.6467 4.74708 18.5673 5.85841 19.6786L7.62618 17.9108ZM19.6786 5.85838C18.5673 4.74705 17.6468 3.82276 16.8198 3.19177C15.9639 2.53878 15.063 2.08331 13.9738 2.08331V4.58331C14.2966 4.58331 14.6698 4.696 15.3033 5.17933C15.9656 5.68466 16.7496 6.46484 17.9109 7.62615L19.6786 5.85838ZM10.0367 7.62615C11.198 6.46484 11.9819 5.68466 12.6442 5.17933C13.2777 4.696 13.651 4.58331 13.9738 4.58331V2.08331C12.8846 2.08331 11.9836 2.53878 11.1278 3.19177C10.3008 3.82276 9.38024 4.74705 8.26891 5.85838L10.0367 7.62615ZM32.3738 22.0891C33.5351 23.2504 34.3153 24.0343 34.8207 24.6967C35.304 25.3301 35.4167 25.7034 35.4167 26.0262H37.9167C37.9167 24.937 37.4612 24.0361 36.8082 23.1802C36.1772 22.3532 35.2529 21.4327 34.1416 20.3213L32.3738 22.0891ZM34.1416 31.7311C35.2529 30.6198 36.1772 29.6992 36.8082 28.8722C37.4612 28.0163 37.9167 27.1154 37.9167 26.0262H35.4167C35.4167 26.349 35.304 26.7223 34.8207 27.3558C34.3153 28.0181 33.5351 28.802 32.3738 29.9633L34.1416 31.7311ZM17.9109 5.85838L13.8934 9.87587L15.6612 11.6436L19.6786 7.62615L17.9109 5.85838ZM32.3738 20.3213L28.3564 24.3388L30.1241 26.1066L34.1416 22.0891L32.3738 20.3213Z"
                    fill="url(#paint0_linear_276_17031)"
                  />
                  <path
                    d="M23.9335 6.79774L25.4782 5.25294C28.0378 2.69344 32.1875 2.69344 34.747 5.25294C37.3066 7.81245 37.3066 11.9622 34.747 14.5217L33.2022 16.0665M23.9335 6.79774C23.9335 6.79774 24.1266 10.0804 27.0231 12.9769C29.9195 15.8734 33.2022 16.0665 33.2022 16.0665M23.9335 6.79774L9.73138 20.9998C8.76945 21.9617 8.28848 22.4427 7.87484 22.973C7.3869 23.5986 6.96857 24.2755 6.62725 24.9917C6.3379 25.5988 6.1228 26.2441 5.69261 27.5347L4.31529 31.6666L3.86969 33.0034M33.2022 16.0665L19.0002 30.2686C18.0382 31.2305 17.5573 31.7115 17.027 32.1251C16.4014 32.6131 15.7245 33.0314 15.0083 33.3727C14.4012 33.6621 13.7559 33.8772 12.4653 34.3074L8.33334 35.6847L6.99654 36.1303M6.99654 36.1303L5.65975 36.5759C5.02464 36.7876 4.32444 36.6223 3.85106 36.1489C3.37768 35.6755 3.21239 34.9753 3.42409 34.3402L3.86969 33.0034M6.99654 36.1303L3.86969 33.0034"
                    stroke="url(#paint1_linear_276_17031)"
                    strokeWidth="2.5"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_276_17031"
                      x1="3.33334"
                      y1="20.2488"
                      x2="46.1905"
                      y2="20.2488"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_276_17031"
                      x1="3.33334"
                      y1="20.2488"
                      x2="46.1905"
                      y2="20.2488"
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
                  Team Skill Set
                  <br />
                  <span className="second-style"> Analysis</span>
                </p>
                <p className="text-[16px] opacity-50">
                  This game assesses and improves <br /> workforce capabilities
                  through interactive <br /> scenarios, fostering collaboration
                  and <br /> identifying skill gaps.
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
                <img src="./shapes/pinkSquare.png" alt="img" />
                <svg
                  className="absolute top-4 left-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M34.6666 20.0001H30.7268C29.6301 20.0001 29.0818 20.0001 28.5963 20.2163C28.1107 20.4326 27.7438 20.8403 27.0099 21.6557L25.2944 23.5617C24.6924 24.2307 24.3913 24.5652 24.0095 24.557C23.6277 24.5488 23.3415 24.2019 22.7692 23.5083L16.889 16.3807C16.3554 15.7339 16.0886 15.4106 15.7266 15.3888C15.3646 15.3671 15.061 15.6562 14.4539 16.2344L11.9482 18.6207C11.2331 19.3019 10.8755 19.6424 10.4284 19.8212C9.98141 20.0001 9.4876 20.0001 8.49996 20.0001H4.66663"
                    stroke="url(#paint0_linear_276_17036)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M14.6029 32.2845L15.3929 31.3158H15.3929L14.6029 32.2845ZM19.6667 9.16461L18.7515 10.0161C18.988 10.2703 19.3195 10.4146 19.6667 10.4146C20.0138 10.4146 20.3453 10.2703 20.5818 10.0161L19.6667 9.16461ZM24.7305 32.2846L25.5204 33.2533L24.7305 32.2846ZM15.3929 31.3158C12.9764 29.3453 10.1549 26.7613 7.94801 23.9329C5.71742 21.0742 4.25 18.1368 4.25 15.4341H1.75C1.75 18.9771 3.6321 22.4655 5.977 25.4708C8.34561 28.5065 11.3255 31.2249 13.8129 33.2533L15.3929 31.3158ZM4.25 15.4341C4.25 10.8843 6.34651 7.8409 9.00108 6.73652C11.6216 5.6463 15.2547 6.25799 18.7515 10.0161L20.5818 8.31312C16.5789 4.01102 11.8787 2.83164 8.04079 4.42831C4.23696 6.01082 1.75 10.1323 1.75 15.4341H4.25ZM25.5204 33.2533C28.0078 31.225 30.9877 28.5066 33.3563 25.4709C35.7012 22.4656 37.5833 18.9771 37.5833 15.434H35.0833C35.0833 18.1369 33.6159 21.0742 31.3853 23.933C29.1785 26.7614 26.3569 29.3453 23.9405 31.3158L25.5204 33.2533ZM37.5833 15.434C37.5833 10.1321 35.0964 6.01064 31.2925 4.42818C27.4547 2.83157 22.7545 4.01103 18.7515 8.31312L20.5818 10.0161C24.0786 6.25798 27.7117 5.64623 30.3323 6.73641C32.9868 7.84074 35.0833 10.8841 35.0833 15.434H37.5833ZM13.8129 33.2533C15.9312 34.9806 17.4016 36.25 19.6667 36.25L19.6667 33.75C18.4641 33.75 17.7146 33.2091 15.3929 31.3158L13.8129 33.2533ZM23.9405 31.3158C21.6188 33.2091 20.8693 33.75 19.6667 33.75L19.6667 36.25C21.9317 36.25 23.4022 34.9806 25.5204 33.2533L23.9405 31.3158Z"
                    fill="url(#paint1_linear_276_17036)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_276_17036"
                      x1="4.66663"
                      y1="20.0409"
                      x2="43.2381"
                      y2="20.0408"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_276_17036"
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
                <p className="font-bold text-[36px] my-5 text-style">
                  Game Based
                  <br />
                  <span className="second-style"> Pulse Survey</span>
                </p>
                <p className="text-[16px] opacity-50">
                  This game transforms employee <br /> feedback into an
                  interactive game, <br /> offering real-time insights into
                  sentiments, <br />
                  preferences, and areas for improvement.
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

export default EmployeeExpPh;
