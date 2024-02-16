import React, { useEffect, useState } from "react";
import datas from "./subscription_packages.json";
import Detail from "./Detail";
const Packages = () => {
  const { packages } = datas;
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 120) {
        // Change 100 to the appropriate scroll position
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-10/12 m-auto ">
      <div className="relative">
        <div className="flex justify-center">
          <svg
            width="16"
            height="30"
            viewBox="0 0 16 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.29289 29.7071C7.68342 30.0976 8.31658 30.0976 8.70711 29.7071L15.0711 23.3431C15.4616 22.9526 15.4616 22.3195 15.0711 21.9289C14.6805 21.5384 14.0474 21.5384 13.6569 21.9289L8 27.5858L2.34315 21.9289C1.95262 21.5384 1.31946 21.5384 0.928932 21.9289C0.538408 22.3195 0.538408 22.9526 0.928932 23.3431L7.29289 29.7071ZM7 1.54472e-09L7 29L9 29L9 -1.54472e-09L7 1.54472e-09Z"
              fill="url(#paint0_linear_218_824)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_218_824"
                x1="8"
                y1="45.8251"
                x2="8"
                y2="-1.05685"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="mb-5">
          <p className="fourth-style font-bold text-2xl text-center">
            Oneplace.hr redefines traditional Human Resources <br /> tasks
            through innovative gamification
          </p>
          <div className="flex mt-1 justify-center">
            <svg
              width="705"
              height="1"
              viewBox="0 0 705 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                y1="0.5"
                x2="705"
                y2="0.5"
                stroke="url(#paint0_linear_233_1188)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_233_1188"
                  x1="0"
                  y1="1"
                  x2="705"
                  y2="1.00013"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-opacity="0" />
                  <stop offset="0.498033" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className={`flex justify-between items-center mb-5 pt-5 pb-5 h-[50px] bg-white  ${
            isSticky ? "fixed top-20 z-50 w-10/12" : "absolute w-full"
          }`}
        >
          {packages.map((item) => (
            <div className={`px-5`} key={item.id}>
              <p
                className={`text-2xl text-center font-bold ${
                  item.id === "advenced"
                    ? "text-[#FFBE59]"
                    : item.id === "caring"
                    ? "text-[#F38A7B]"
                    : item.id === "premium"
                    ? "text-[#00750C]"
                    : "text-black"
                }`}
              >
                {item.name}
              </p>
              <svg
                width="157"
                height="1"
                viewBox="0 0 157 1"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  y1="0.5"
                  x2="157.003"
                  y2="0.5"
                  className={`${
                    item.id === "advenced"
                      ? "stroke-customYellow"
                      : item.id === "caring"
                      ? "stroke-customRed"
                      : item.id === "premium"
                      ? "stroke-customGreen"
                      : "stroke-black"
                  }`}
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_255_924"
                    x1="-31.4931"
                    y1="-0.194151"
                    x2="191.496"
                    y2="2.21726"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.005" stopOpacity="0" />
                    <stop offset="0.47598" />
                    <stop offset="1" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-start pt-12 relative my-20">
          <table>
            <tbody>
              {packages[0].features.map((item, index) => (
                <tr key={index}>
                  <td className="w-[200px] text-center pb-5 text-lg">
                    {item.split(" ").map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${word === "2" ? "font-bold" : ""} ${
                          index < 2 ? "font-bold" : ""
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="absolute bottom-0 left-4">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[0].price}/ 1 сар
            </p>
          </div>
          <img className="h-[824px]" src="./vectors/DownLine.png" alt="line" />
          <table>
            <tbody>
              {packages[1].features.map((item, index) => (
                <tr key={index}>
                  <td className="w-[200px] text-center pb-5 text-lg">
                    {item.split(" ").map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${word === "2" ? "font-bold" : ""} ${
                          index < 3 ? "font-bold" : ""
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="absolute bottom-0 left-[28.5%]">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[1].price}/ 1 сар
            </p>{" "}
          </div>
          <img className="h-[824px]" src="./vectors/DownLine.png" alt="line" />
          <table>
            <tbody>
              {packages[2].features.map((item, index) => (
                <tr key={index}>
                  <td className="w-[200px] text-center pb-5 text-lg">
                    {item.split(" ").map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${word === "2" ? "font-bold" : ""} ${
                          index < 3 ? "font-bold" : ""
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="absolute bottom-0 right-[28.5%]">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[2].price}/ 1 сар
            </p>
          </div>
          <img className="h-[824px]" src="./vectors/DownLine.png" alt="line" />
          <table>
            <tbody>
              {packages[3].features.map((item, index) => (
                <tr key={index}>
                  <td className="w-[200px] text-center pb-5 text-lg">
                    {item.split(" ").map((word, wordIndex) => (
                      <span
                        key={wordIndex}
                        className={`${word === "2" ? "font-bold" : ""} ${
                          index < 4 ? "font-bold" : ""
                        }`}
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="absolute bottom-0 right-4">
            <button className="px-6 py-2 shadow-lg border rounded-lg text-lg border-black hover:text-white hover:bg-black ">
              Худалдаж авах
            </button>
            <p className="text-center text-lg mt-2">
              {packages[3].price}/ 1 сар
            </p>
          </div>
        </div>
      </div>
      <div>
        <Detail />
      </div>
    </div>
  );
};

export default Packages;
