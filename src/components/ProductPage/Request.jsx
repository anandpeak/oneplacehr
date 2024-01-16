import React, { useState } from "react";
import MainButton from "../MainButton";
const Request = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked((prevState) => !prevState);
  };

  const toggleStyle = {
    background: "linear-gradient(102deg, #F48D7E 8.63%, #D74C38 93.24%)",
    boxShadow: "2.554px 0px 15.327px 5.109px rgba(0, 0, 0, 0.10) inset",
  };
  return (
    <div className="sm:py-20 py-10">
      <div className="w-10/12 m-auto">
        <div className="flex md:flex-row sm:flex-col flex-col justify-between w-full my-10">
          <div className="md:w-1/2 sm:w-full w-full me-10 mt-10">
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
                    className={`w-12 h-6 rounded-full shadow-inner  `}
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
                <div className="ml-3   text-white text-[36px]  font-bold">
                  oneplace.hr
                </div>
              </label>
            </div>
            <p className="md:text-[48px] sm:text-[40px]  text-[36px] mt-5 sm:mt-0 font-bold text-style">
              Gamify your <br />{" "}
              <span className="third-style">Employee Experience</span>
            </p>
            <p className="hidden sm:block text-[24px] third-style opacity-50 mt-5">
              The Oneplace.hr redefines traditional human <br /> resources
              through innovative gamification.
            </p>
            <p className="block sm:hidden text-[16px] sm:mb-0 mb-10 third-style opacity-50 mt-5">
              The Oneplace.hr redefines traditional <br /> humanresources
              through innovative <br /> gamification.
            </p>
          </div>
          <div className="md:w-1/2 sm:w-full sm:flex sm:justify-center sm:mt-10 w-full ps-0 sm:ps-10">
            <div>
              {" "}
              <p className="sm:text-[32px] text-[36px] font-bold text-start third-style">
                Try Oneplace.hr
              </p>
              <div>
                <form className="mt-3">
                  <div>
                    <label className="text-white block">Your Name</label>
                    <input
                      className="sm:w-[435px] w-[270px] border-2 py-3 px-4 bg-black bg-opacity-5 border-black border-opacity-20 text-white rounded-lg"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="flex sm:flex-row flex-col mt-5">
                    <div className="me-5">
                      <label className="text-white block">Phone</label>
                      <input
                        className="sm:w-[211px] w-[270px] border-2 py-3 px-4 bg-black bg-opacity-5 border-black border-opacity-20 text-white rounded-lg"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <label className="text-white  block">E-Mail</label>
                      <input
                        className="sm:w-[211px] w-[270px] border-2 py-3 px-4 bg-black bg-opacity-5 border-black border-opacity-20 text-white rounded-lg"
                        type="text"
                        placeholder="Mail"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col mt-4">
                    <div className="me-5">
                      <label className="text-white  block">Company Name</label>
                      <input
                        className="sm:w-[211px] w-[270px] border-2 py-3 px-4 bg-black bg-opacity-5 border-black border-opacity-20 text-white rounded-lg"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <label className="text-white  block">Company Size</label>
                      <input
                        className="sm:w-[211px] w-[270px] border-2 py-3 px-4 bg-black bg-opacity-5 border-black border-opacity-20 text-white rounded-lg"
                        type="text"
                        placeholder="10-20"
                      />
                    </div>
                  </div>
                </form>
                <div className="hidden sm:flex mt-4 justify-end me-20">
                  <MainButton
                    className="py-4 bg-gradient-to-br from-[#F48D7E] to-[#D74C38] text-transparent ps-5 pe-5"
                    fSize={"18px"}
                    text="Send"
                    iColor="#fff"
                    tColor="#fff"
                  />
                </div>
                <div className="flex sm:hidden mt-4 justify-end ">
                  <MainButton
                    className="py-4 ps-5 pe-5  "
                    fSize={"18px"}
                    text="Send"
                    bgColor={"#fff"}
                    iColor="#000"
                    tColor={"#D74C38"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Request;
