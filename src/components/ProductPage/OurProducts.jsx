import React from "react";
import { useTranslation } from "react-i18next";

const OurProducts = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex mt-20 justify-center ">
        <div className="px-10 text-start sm:text-center">
          <p className="text-[36px] sm:text-[56px] font-bold third-style">
            {t("Productpage.title")}
          </p>
          <p className="text-center text-white opacity-50 text-[24px] sm:block hidden w-[600px]">
            {t("Productpage.description")}
          </p>
          <p className="text-start text-white opacity-50 text-[16px] sm:hidden block">
            {t("Productpage.description")}
          </p>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-center sm:px-16 px-10 pt-20 gap-5 ">
          <div className="border-2 sm:w-[400px] w-[312px] border-black border-opacity-10 bg-opacity-10 bg-black  p-6 sm:p-10 backdrop-filter backdrop-blur-12  rounded-[36px] ">
            <div className="relative flex justify-start items-center">
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
                  cx="19.1663"
                  cy="19.1663"
                  r="15.8333"
                  fill="white"
                  fillOpacity="0.2"
                  stroke="url(#paint0_linear_674_315)"
                  strokeWidth="3"
                />
                <path
                  d="M30.833 30.833L36.6663 36.6663"
                  stroke="url(#paint1_linear_674_315)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M15 19.1667H19.1667M19.1667 19.1667H23.3333M19.1667 19.1667V23.3333M19.1667 19.1667V15"
                  stroke="url(#paint2_linear_674_315)"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_674_315"
                    x1="19.1663"
                    y1="3.33301"
                    x2="19.1663"
                    y2="34.9997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.46" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_674_315"
                    x1="33.7497"
                    y1="30.833"
                    x2="33.7497"
                    y2="36.6663"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0.46" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_674_315"
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
            <div>
              <p className="text-style my-5 sm:text-[42px] text-[36px] font-bold ">
                {t("Mainpage.Recgame.title1")} <br />{" "}
                <span className="third-style">
                  {t("Mainpage.Recgame.title2")}
                </span>
              </p>
              <p className="hidden sm:block opacity-50 text-[23px] text-white">
                {t("Mainpage.Recgame.description")}
              </p>
              <p className="block sm:hidden opacity-50 text-[16px] text-white">
                {t("Mainpage.Recgame.description")}
              </p>
            </div>
          </div>
          <div className="border-2 sm:w-[400px] w-[312px] border-black border-opacity-10 bg-opacity-10 bg-black  p-6 sm:p-10 backdrop-filter backdrop-blur-12  rounded-[36px] ">
            <div className="relative flex justify-start items-center">
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
                  d="M22.0893 32.374C21.6011 31.8858 20.8097 31.8858 20.3215 32.374C19.8334 32.8621 19.8334 33.6536 20.3215 34.1418L22.0893 32.374ZM30.8474 33.2579L31.7313 34.1418L30.8474 33.2579ZM6.74245 9.15294L7.62633 10.0368L7.62633 10.0368L6.74245 9.15294ZM5.85857 19.6788C6.34672 20.167 7.13818 20.167 7.62633 19.6788C8.11449 19.1906 8.11449 18.3992 7.62633 17.911L5.85857 19.6788ZM18.7949 6.74245L19.6788 7.62633C19.9132 7.39191 20.0449 7.07397 20.0449 6.74245C20.0449 6.41093 19.9132 6.09299 19.6788 5.85856L18.7949 6.74245ZM9.15294 6.74245L8.26906 5.85857L8.26906 5.85857L9.15294 6.74245ZM33.2579 21.2054L34.1418 20.3215C33.9073 20.0871 33.5894 19.9554 33.2579 19.9554C32.9264 19.9554 32.6084 20.0871 32.374 20.3215L33.2579 21.2054ZM33.2579 30.8474L32.374 29.9635L33.2579 30.8474ZM13.8935 9.87605C13.4054 10.3642 13.4054 11.1557 13.8935 11.6438C14.3817 12.132 15.1732 12.132 15.6613 11.6438L13.8935 9.87605ZM28.3565 24.339C27.8684 24.8272 27.8684 25.6186 28.3565 26.1068C28.8447 26.5949 29.6361 26.5949 30.1243 26.1068L28.3565 24.339ZM8.26906 5.85857L5.85857 8.26906L7.62633 10.0368L10.0368 7.62633L8.26906 5.85857ZM31.7313 34.1418L34.1418 31.7313L32.374 29.9635L29.9635 32.374L31.7313 34.1418ZM20.3215 34.1418C21.4329 35.2531 22.3534 36.1774 23.1804 36.8084C24.0363 37.4614 24.9372 37.9168 26.0264 37.9168V35.4168C25.7036 35.4168 25.3303 35.3041 24.6969 34.8208C24.0345 34.3155 23.2506 33.5353 22.0893 32.374L20.3215 34.1418ZM29.9635 32.374C28.8022 33.5353 28.0183 34.3155 27.3559 34.8208C26.7225 35.3041 26.3492 35.4168 26.0264 35.4168V37.9168C27.1156 37.9168 28.0165 37.4614 28.8724 36.8084C29.6994 36.1774 30.6199 35.2531 31.7313 34.1418L29.9635 32.374ZM5.85857 8.26906C4.74724 9.38039 3.82294 10.3009 3.19196 11.1279C2.53896 11.9838 2.0835 12.8847 2.0835 13.9739H4.5835C4.5835 13.6511 4.69619 13.2779 5.17951 12.6444C5.68484 11.9821 6.46503 11.1981 7.62633 10.0368L5.85857 8.26906ZM7.62633 17.911C6.46503 16.7497 5.68484 15.9658 5.17951 15.3035C4.69619 14.67 4.5835 14.2967 4.5835 13.9739H2.0835C2.0835 15.0631 2.53896 15.9641 3.19196 16.8199C3.82294 17.6469 4.74724 18.5675 5.85857 19.6788L7.62633 17.911ZM19.6788 5.85856C18.5675 4.74723 17.6469 3.82294 16.8199 3.19196C15.9641 2.53896 15.0631 2.0835 13.9739 2.0835V4.5835C14.2968 4.5835 14.67 4.69619 15.3035 5.17951C15.9658 5.68484 16.7497 6.46503 17.911 7.62633L19.6788 5.85856ZM10.0368 7.62633C11.1981 6.46503 11.9821 5.68484 12.6444 5.17951C13.2779 4.69619 13.6511 4.5835 13.9739 4.5835V2.0835C12.8847 2.0835 11.9838 2.53896 11.1279 3.19196C10.3009 3.82294 9.38039 4.74723 8.26906 5.85857L10.0368 7.62633ZM32.374 22.0893C33.5353 23.2506 34.3155 24.0345 34.8208 24.6968C35.3041 25.3303 35.4168 25.7036 35.4168 26.0264H37.9168C37.9168 24.9372 37.4614 24.0363 36.8084 23.1804C36.1774 22.3534 35.2531 21.4329 34.1418 20.3215L32.374 22.0893ZM34.1418 31.7313C35.2531 30.6199 36.1774 29.6994 36.8084 28.8724C37.4614 28.0165 37.9168 27.1156 37.9168 26.0264H35.4168C35.4168 26.3492 35.3041 26.7225 34.8208 27.3559C34.3155 28.0183 33.5353 28.8022 32.374 29.9635L34.1418 31.7313ZM17.911 5.85856L13.8935 9.87605L15.6613 11.6438L19.6788 7.62633L17.911 5.85856ZM32.374 20.3215L28.3565 24.339L30.1243 26.1068L34.1418 22.0893L32.374 20.3215Z"
                  fill="url(#paint0_linear_176_2386)"
                />
                <path
                  d="M23.9336 6.79793L25.4784 5.25313C28.0379 2.69362 32.1877 2.69362 34.7472 5.25313C37.3067 7.81263 37.3067 11.9624 34.7472 14.5219L33.2024 16.0667M23.9336 6.79793C23.9336 6.79793 24.1267 10.0806 27.0232 12.9771C29.9197 15.8736 33.2024 16.0667 33.2024 16.0667M23.9336 6.79793L9.73154 21C8.7696 21.9619 8.28863 22.4429 7.87499 22.9732C7.38705 23.5988 6.96872 24.2757 6.6274 24.9919C6.33805 25.599 6.12296 26.2443 5.69276 27.5349L4.31544 31.6668L3.86984 33.0036M33.2024 16.0667L19.0003 30.2688C18.0384 31.2307 17.5574 31.7117 17.0271 32.1253C16.4015 32.6133 15.7246 33.0316 15.0085 33.3729C14.4013 33.6623 13.756 33.8774 12.4655 34.3076L8.3335 35.6849L6.9967 36.1305M6.9967 36.1305L5.6599 36.5761C5.0248 36.7878 4.32459 36.6225 3.85121 36.1491C3.37784 35.6757 3.21254 34.9755 3.42424 34.3404L3.86984 33.0036M6.9967 36.1305L3.86984 33.0036"
                  stroke="url(#paint1_linear_176_2386)"
                  strokeWidth="2.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_176_2386"
                    x1="3.3335"
                    y1="20.2489"
                    x2="46.1906"
                    y2="20.2489"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_176_2386"
                    x1="3.3335"
                    y1="20.2489"
                    x2="46.1906"
                    y2="20.2489"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <p className="text-style sm:text-[40px] text-[36px] font-bold my-5 ">
                {t("Mainpage.Analysis.title1")} <br />{" "}
                <span className="third-style">
                  {t("Mainpage.Analysis.title2")}
                </span>
              </p>
              <p className="hidden sm:block opacity-50 text-[20px] text-white">
                {t("Mainpage.Analysis.description")}
              </p>{" "}
              <p className="block sm:hidden opacity-50 text-[16px] text-white">
                {t("Mainpage.Analysis.description")}
              </p>
            </div>
          </div>
          <div className="border-2 sm:w-[400px] w-[312px] border-black border-opacity-10 bg-opacity-10 bg-black  p-6 sm:p-10 backdrop-filter backdrop-blur-12  rounded-[36px] ">
            <div className="relative flex justify-start items-center">
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
            <div>
              <p className="text-style sm:text-[42px] my-5 text-[34px] font-bold ">
                {t("Mainpage.Pulsesurvey.title1")} <br />{" "}
                <span className="third-style">
                  {t("Mainpage.Pulsesurvey.title2")}
                </span>
              </p>
              <p className="sm:block hidden opacity-50 text-[18px] text-white">
                {t("Mainpage.Pulsesurvey.description")}
              </p>
              <p className="sm:hidden block opacity-50 text-[16px] text-white">
                {t("Mainpage.Pulsesurvey.description")}
              </p>
            </div>
          </div>
          <div className="border-2 sm:w-[400px] w-[312px] border-black border-opacity-10 bg-opacity-10 bg-black  p-6 sm:p-10 backdrop-filter backdrop-blur-12  rounded-[36px] ">
            <div className="relative flex justify-start items-center">
              <img src="./shapes/orangeSquare.png" alt="img" />
              <svg
                className="absolute top-4 left-4"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
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
            <div>
              <p className="text-style sm:text-[42px] my-5 text-[36px] font-bold ">
                {t("Mainpage.Burnout.title1")} <br />{" "}
                <span className="third-style">
                  {t("Mainpage.Burnout.title2")}
                </span>
              </p>
              <p className="hidden sm:block opacity-50 text-[21px] text-white">
                {t("Mainpage.Burnout.description")}
              </p>
              <p className="block sm:hidden opacity-50 text-[16px] text-white">
                {t("Mainpage.Burnout.description")}
              </p>
            </div>
          </div>
          <div className="border-2 sm:w-[400px] w-[312px] border-black border-opacity-10 bg-opacity-10 bg-black  p-6 sm:p-10 backdrop-filter backdrop-blur-12  rounded-[36px] ">
            <div className="relative flex justify-start items-center">
              <img src="./shapes/cyanSquare.png" alt="img" />
              <svg
                className="absolute left-4 top-4"
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
            <div>
              <p className="text-style text-[36px] my-5 font-bold ">
                {t("Mainpage.Engagement.title1")} <br />{" "}
                <span className="third-style">
                  {t("Mainpage.Engagement.title2")}
                </span>
              </p>
              <p className="hidden sm:block opacity-50  text-[25px] text-white">
                {t("Mainpage.Engagement.description")}
              </p>
              <p className="block sm:hidden opacity-50  text-[16px] text-white">
                {t("Mainpage.Engagement.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
