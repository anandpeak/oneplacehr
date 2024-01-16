import React, { useState } from "react";
import MainButton from "../MainButton";

const TestSec = () => {
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
      <div className="block sm:w-full sm:block  md:flex  md:justify-between w-full gap-10  my-10">
        <div className="md:w-1/2 sm:w-full w-full mt-10">
          <div className="flex  items-center">
            <label className="flex items-center cursor-pointer">
              <div className="relative mt-2">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <div
                  className={` w-10 h-5 rounded-full shadow-inner  `}
                  style={
                    isChecked ? toggleStyle : { backgroundColor: "#879DAB" }
                  }
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
          <p className="md:text-[48px] sm:text-[38px] text-[32px] mt-5 font-bold text-style">
            Gamify your <br />{" "}
            <span className="second-style">Employee Experience</span>
          </p>
          <p className="text-[24px] sm:hidden md:block hidden opacity-50 mt-5">
            The Oneplace.hr redefines traditional human <br /> resources through
            innovative gamification.
          </p>
          <p className="text-[16px] sm:text-[20px] sm:block md:hidden block opacity-50 mt-5">
            The Oneplace.hr redefines traditional <br /> human resources through
            innovative
            <br /> gamification.
          </p>
        </div>
        <div className="sm:flex sm:justify-center md:w-1/2 sm:w-full w-full ps-0 md:mt-0 sm:mt-10 mt-10 md:ps-10">
          <div>
            <p className="sm:text-[32px] text-[36px] font-bold text-start second-style">
              Try Oneplace.hr
            </p>
            <div>
              <form className="mt-3">
                <div>
                  <label className="block mb-1">Your Name</label>
                  <input
                    className="sm:w-[435px] md:w-[335px] lg:w-[435px] w-[280px] border-2 py-3 px-4 rounded-lg"
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="sm:flex md:flex-col lg:flex-row block mt-5">
                  <div className="me-3">
                    <label className="block mb-1">Phone</label>
                    <input
                      className="w-[280px] sm:w-[211px] md:w-[335px] lg:w-[211px] border-2 py-3 px-4 rounded-lg"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block sm:mt-0 md:mt-4 lg:mt-0 mt-4 mb-1">
                      E-Mail
                    </label>
                    <input
                      className="w-[280px] sm:w-[211px] md:w-[335px] lg:w-[211px] border-2 py-3 px-4 rounded-lg"
                      type="text"
                      placeholder="Mail"
                    />
                  </div>
                </div>
                <div className="sm:flex md:flex-col lg:flex-row block mt-4">
                  <div className="me-3">
                    <label className="block mb-1">Company Name</label>
                    <input
                      className="w-[280px] sm:w-[211px] md:w-[335px] lg:w-[211px] border-2 py-3 px-4 rounded-lg"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block sm:mt-0 md:mt-4 lg:mt-0 mt-4 mb-1">
                      Company Size
                    </label>
                    <input
                      className="w-[280px] sm:w-[211px] md:w-[335px] lg:w-[211px] border-2 py-3 px-4 rounded-lg"
                      type="text"
                      placeholder="10-20"
                    />
                  </div>
                </div>
              </form>
              <div className="mt-4 me-20 sm:flex sm:justify-end hidden">
                <MainButton
                  className="py-4 ps-5 pe-5"
                  fSize={"18px"}
                  text="Send"
                  iColor="#F48D7E"
                  bgColor="#000"
                  tColor="#fff"
                />
              </div>
              <div className="mt-4 sm:hidden flex justify-start">
                <MainButton
                  className="py-4 ps-5 pe-5"
                  fSize={"16px"}
                  text="Send"
                  iColor="#F48D7E"
                  bgColor="#000"
                  tColor="#fff"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestSec;
