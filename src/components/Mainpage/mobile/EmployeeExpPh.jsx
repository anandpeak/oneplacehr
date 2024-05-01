import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const EmployeeExpPh = () => {
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
            {t("Mainpage.Empexp.title1")} <br />{" "}
            <span className="second-style">{t("Mainpage.Empexp.title2")}</span>
          </p>
          <div className="flex items-start mt-5">
            <p
              className="opacity-50"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: !isChecked ? "1" : "0",
              }}
            >
              {t("Mainpage.Empexp.description")}
            </p>
            <p
              className=" absolute opacity-50 "
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: isChecked ? "1" : "0",
              }}
            >
              {t("Mainpage.Empexp.hoverDesc")}
            </p>
          </div>
        </div>
        <div className="flex mt-10 items-center">
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
                  {t("Mainpage.Pulsesurvey.title1")}
                  <br />
                  <span className="second-style">
                    {" "}
                    {t("Mainpage.Pulsesurvey.title2")}
                  </span>
                </p>
                <p className="text-[16px] opacity-50">
                  {t("Mainpage.Pulsesurvey.description")}
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
                  {t("Mainpage.Burnout.title1")} <br />
                  <span className="second-style">
                    {" "}
                    {t("Mainpage.Burnout.title2")}
                  </span>
                </p>
                <p className="text-[16px] opacity-50">
                  {t("Mainpage.Burnout.description")}
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
