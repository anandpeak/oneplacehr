import React from "react";
import members from "../../members.json";
import advisors from "../../advisor.json";
import { useTranslation } from "react-i18next";
const OurTeam = () => {
  const member = members;
  const advisor = advisors;
  const { t } = useTranslation();
  return (
    <div>
      <div className="flex mt-20 justify-center ">
        <div className="sm:text-center px-10">
          <p className="sm:text-[56px] text-[36px] font-bold third-style">
            {t("Storypage.title")}
          </p>
          <p className="hidden sm:block  text-white opacity-50 text-[24px] w-[500px]">
            {t("Storypage.description")}
          </p>
          <p className="block sm:hidden  text-white opacity-50 text-[16px]">
            {t("Storypage.description")}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap my-20 justify-between px-10 gap-10 sm:px-20 sm:mx-20 ">
        <div className="w-[490px]">
          <div className="flex justify-start">
            <div className="relative flex justify-center items-center">
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
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0002 13.7498C16.5484 13.7498 13.7502 16.5481 13.7502 19.9998C13.7502 23.4516 16.5484 26.2498 20.0002 26.2498C23.4519 26.2498 26.2502 23.4516 26.2502 19.9998C26.2502 16.5481 23.4519 13.7498 20.0002 13.7498ZM16.2502 19.9998C16.2502 17.9288 17.9291 16.2498 20.0002 16.2498C22.0712 16.2498 23.7502 17.9288 23.7502 19.9998C23.7502 22.0709 22.0712 23.7498 20.0002 23.7498C17.9291 23.7498 16.2502 22.0709 16.2502 19.9998Z"
                  fill="url(#paint0_linear_178_3754)"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.0002 5.4165C12.4766 5.4165 7.40898 9.9235 4.46777 13.7446L4.41473 13.8135C3.74956 14.6774 3.13693 15.473 2.72131 16.4138C2.27624 17.4213 2.0835 18.5193 2.0835 19.9998C2.0835 21.4804 2.27624 22.5784 2.72131 23.5858C3.13693 24.5266 3.74956 25.3223 4.41474 26.1862L4.46778 26.2551C7.40898 30.0762 12.4766 34.5832 20.0002 34.5832C27.5237 34.5832 32.5913 30.0762 35.5326 26.2551L35.5856 26.1862C36.2507 25.3223 36.8634 24.5267 37.279 23.5858C37.7241 22.5784 37.9168 21.4804 37.9168 19.9998C37.9168 18.5193 37.7241 17.4213 37.279 16.4138C36.8634 15.473 36.2508 14.6774 35.5856 13.8135L35.5326 13.7446C32.5913 9.9235 27.5237 5.4165 20.0002 5.4165ZM6.44886 15.2695C9.16456 11.7414 13.5841 7.9165 20.0002 7.9165C26.4162 7.9165 30.8358 11.7414 33.5515 15.2695C34.2824 16.2192 34.7106 16.7866 34.9922 17.4241C35.2554 18.0199 35.4168 18.7481 35.4168 19.9998C35.4168 21.2516 35.2554 21.9798 34.9922 22.5756C34.7106 23.2131 34.2824 23.7805 33.5515 24.7302C30.8358 28.2583 26.4162 32.0832 20.0002 32.0832C13.5841 32.0832 9.16456 28.2583 6.44886 24.7302C5.71789 23.7805 5.28972 23.2131 5.00809 22.5756C4.74489 21.9798 4.5835 21.2516 4.5835 19.9998C4.5835 18.7481 4.74489 18.0199 5.00809 17.4241C5.28972 16.7866 5.71789 16.2192 6.44886 15.2695Z"
                  fill="url(#paint1_linear_178_3754)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_178_3754"
                    x1="2.0835"
                    y1="20.2175"
                    x2="48.1549"
                    y2="20.2175"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_178_3754"
                    x1="2.0835"
                    y1="20.2175"
                    x2="48.1549"
                    y2="20.2175"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <p className="sm:text-[48px] text-[36px] font-bold third-style third-style">
            {t("Storypage.vision")}{" "}
            <span className="text-style">{t("Storypage.vision2")}</span>
          </p>
          <p className="hidden sm:block text-white opacity-50 text-[24px]">
            {t("Storypage.visiondesc")}
          </p>
          <p className="block sm:hidden text-white opacity-50 text-[16px]">
            {t("Storypage.visiondesc")}
          </p>
        </div>
        <div className="w-[450px]">
          <div className="flex justify-start">
            <div className="relative flex justify-center items-center">
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
                className="absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.3335 2.0835C9.02385 2.0835 9.5835 2.64314 9.5835 3.3335V5.14207L12.2061 4.61755C15.1948 4.01982 18.2928 4.30425 21.1226 5.43619L21.8114 5.71171C23.9422 6.56403 26.2875 6.7232 28.5139 6.16659C30.6459 5.63359 32.358 7.94436 31.2274 9.82881L29.0965 13.3803C28.4691 14.4259 28.3686 14.6415 28.3429 14.8381C28.3288 14.9457 28.3288 15.0547 28.3429 15.1623C28.3686 15.3588 28.4691 15.5745 29.0965 16.62L31.6976 20.9552C32.6475 22.5383 31.798 24.5892 30.0068 25.037L29.84 25.0787C26.6358 25.8797 23.2607 25.6507 20.1941 24.424C17.8146 23.4722 15.2095 23.233 12.6964 23.7357L9.5835 24.3582V36.6668C9.5835 37.3572 9.02385 37.9168 8.3335 37.9168C7.64314 37.9168 7.0835 37.3572 7.0835 36.6668V3.3335C7.0835 2.64314 7.64314 2.0835 8.3335 2.0835ZM9.5835 21.8087L12.2061 21.2842C15.1948 20.6865 18.2928 20.9709 21.1226 22.1029C23.7012 23.1343 26.5393 23.3269 29.2336 22.6533L29.4005 22.6116C29.5629 22.571 29.64 22.385 29.5538 22.2414L26.9528 17.9063C26.9197 17.8512 26.8869 17.7967 26.8543 17.7426C26.3827 16.9595 25.9661 16.2677 25.864 15.4864C25.8218 15.1636 25.8218 14.8367 25.864 14.5139C25.9661 13.7326 26.3827 13.0408 26.8543 12.2577C26.8869 12.2036 26.9197 12.1491 26.9527 12.0941L29.0425 8.61113C26.3294 9.27224 23.4769 9.07049 20.8829 8.0329L20.1941 7.75738C17.8146 6.80555 15.2095 6.56638 12.6964 7.069L9.5835 7.69158V21.8087Z"
                  fill="url(#paint0_linear_178_3757)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_178_3757"
                    x1="7.0835"
                    y1="20.2676"
                    x2="39.2362"
                    y2="20.2676"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          <p className="sm:text-[48px] text-[36px] font-bold third-style third-style">
            {t("Storypage.mission")}{" "}
            <span className="text-style">{t("Storypage.mission2")}</span>
          </p>
          <p className="hidden sm:block text-white opacity-50 text-[24px]">
            {t("Storypage.missiondesc")}
          </p>
          <p className="block sm:hidden text-white opacity-50 text-[16px]">
            {t("Storypage.missiondesc")}
          </p>
        </div>
      </div>
      <div className="w-10/12 m-auto mt-20">
        <div className="flex justify-center mb-10">
          <p className="sm:text-[56px] text-[36px] font-bold third-style">
            {t("Storypage.title2")}
          </p>
        </div>
        <div className="my-20 flex flex-wrap items-center justify-center gap-20">
          {member.map((item) => {
            return (
              <div key={item.id} className="w-[260px]">
                <div className="flex justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/members/${item.img}`}
                    className="w-[200px] h-[200px] rounded-full "
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-[28px]">
                    {item.name}
                  </p>
                  <p className="text-[24px] text-white opacity-50">
                    {item.position}
                  </p>
                  <p className="text-[18px] text-white opacity-50 mt-4 h-[50px]">
                    {item.story}
                  </p>
                  <div className="flex justify-center items-center mt-5 gap-4">
                    <a href="/">
                      <div className="flex relative">
                        <div className="bg-[#006699] w-[32px] h-[32px] rounded-full " />
                        <img
                          src="./icons/linkedin.svg"
                          alt="linkedin"
                          className="absolute top-[9.67px] left-[9.28px]"
                        />
                      </div>
                    </a>
                    <a href="/">
                      <div className="flex relative">
                        <div className="bg-[#33CCFF] w-[32px] h-[32px] rounded-full " />
                        <img
                          src="./icons/twitter.svg"
                          alt="linkedin"
                          className="absolute top-[9.31px] left-[7.68px]"
                        />
                      </div>
                    </a>
                    <a href="/">
                      <div className="flex relative">
                        <div className="bg-[#fff] w-[32px] h-[32px] rounded-full " />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[] absolute top-[9.4px] left-[6.61px]"
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                        >
                          <path
                            d="M1.99155 13.9567H4.94206V6.79114L0.727051 3.62988V12.6922C0.727051 13.3919 1.29397 13.9567 1.99155 13.9567Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M15.0581 13.9567H18.0086C18.7083 13.9567 19.2731 13.3897 19.2731 12.6922V3.62988L15.0581 6.79114"
                            fill="#34A853"
                          />
                          <path
                            d="M15.0581 1.31155V6.79107L19.2731 3.62981V1.9438C19.2731 0.38003 17.4881 -0.511445 16.2383 0.426395"
                            fill="#FBBC04"
                          />
                          <path
                            d="M4.94189 6.79104V1.31152L9.99991 5.10504L15.0579 1.31152V6.79104L9.99991 10.5846"
                            fill="#EA4335"
                          />
                          <path
                            d="M0.727051 1.9438V3.62981L4.94206 6.79107V1.31155L3.76186 0.426395C2.51 -0.511445 0.727051 0.38003 0.727051 1.9438Z"
                            fill="#C5221F"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center mb-10">
          <p className="text-[56px] font-bold third-style">
            {t("Storypage.title3")}
          </p>
        </div>
        <div className="my-20 flex flex-wrap items-center justify-center gap-20">
          {advisor.map((item) => {
            return (
              <div key={item.id} className="w-[310px]">
                <div className="flex justify-center">
                  <img
                    src={item.img}
                    className="w-[200px] rounded-full "
                    alt="img"
                  />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-white text-[28px]">
                    {item.name}
                  </p>
                  <p className="text-[24px] text-white opacity-50">
                    {item.position}
                  </p>
                  <p className="text-[18px] text-white opacity-50 mt-4 ">
                    {item.story}
                  </p>
                  <div className="flex justify-center items-center mt-5 gap-4">
                    <a href="/">
                      <div className="flex relative">
                        <div className="bg-[#006699] w-[32px] h-[32px] rounded-full " />
                        <img
                          src="./icons/linkedin.svg"
                          alt="linkedin"
                          className="absolute top-[9.67px] left-[9.28px]"
                        />
                      </div>
                    </a>
                    <a href="/">
                      <div className="flex relative">
                        <div className="bg-[#33CCFF] w-[32px] h-[32px] rounded-full " />
                        <img
                          src="./icons/twitter.svg"
                          alt="linkedin"
                          className="absolute top-[9.31px] left-[7.68px]"
                        />
                      </div>
                    </a>
                    <a href="/">
                      <div className="flex relative">
                        <div className="bg-[#fff] w-[32px] h-[32px] rounded-full " />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[] absolute top-[9.4px] left-[6.61px]"
                          width="20"
                          height="14"
                          viewBox="0 0 20 14"
                          fill="none"
                        >
                          <path
                            d="M1.99155 13.9567H4.94206V6.79114L0.727051 3.62988V12.6922C0.727051 13.3919 1.29397 13.9567 1.99155 13.9567Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M15.0581 13.9567H18.0086C18.7083 13.9567 19.2731 13.3897 19.2731 12.6922V3.62988L15.0581 6.79114"
                            fill="#34A853"
                          />
                          <path
                            d="M15.0581 1.31155V6.79107L19.2731 3.62981V1.9438C19.2731 0.38003 17.4881 -0.511445 16.2383 0.426395"
                            fill="#FBBC04"
                          />
                          <path
                            d="M4.94189 6.79104V1.31152L9.99991 5.10504L15.0579 1.31152V6.79104L9.99991 10.5846"
                            fill="#EA4335"
                          />
                          <path
                            d="M0.727051 1.9438V3.62981L4.94206 6.79107V1.31155L3.76186 0.426395C2.51 -0.511445 0.727051 0.38003 0.727051 1.9438Z"
                            fill="#C5221F"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
