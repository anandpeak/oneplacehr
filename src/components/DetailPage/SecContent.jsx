import React, { useState } from "react";

const SecContent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((prevState) => !prevState);
  };
  const toggleStyle = {
    background: "linear-gradient(102deg, #F48D7E 8.63%, #D74C38 93.24%)",
    boxShadow: "2.554px 0px 15.327px 5.109px rgba(0, 0, 0, 0.10) inset",
  };
  return (
    <div>
      <div className=" w-10/12  m-auto my-20">
        <div className="flex items-center justify-center mt-10">
          <label
            htmlFor="switch"
            className="flex relative items-center cursor-pointer"
          >
            <div className="relative mx-4">
              <input
                id="switch"
                type="checkbox"
                className="sr-only"
                checked={isChecked}
                onChange={toggleSwitch}
              />
              <div className="block w-52 h-16 bg-[#879DAB] bg-opacity-30 rounded-full"></div>
              <div
                style={toggleStyle}
                className={` absolute left-0 top-0 w-24 h-12 m-2 rounded-full transition-transform transform ${
                  isChecked ? "translate-x-[6rem]" : "translate-x-0 "
                }`}
              ></div>
            </div>
            <span
              className={`${
                !isChecked ? "text-white" : ""
              } font-bold text-[22px] absolute left-10`}
            >
              Before
            </span>
            <span
              className={`${
                isChecked ? "text-white" : ""
              } font-bold text-[22px] absolute right-11`}
            >
              After
            </span>
          </label>
        </div>
        <div className="mt-20 flex items-start justify-between">
          <div>
            <p className="text-[18px] opacity-50">
              Reduced <br /> Turnover Rate
            </p>
            <div className="flex">
              <p className="text-[36px] font-bold text-style">32%</p>
              <p
                className={`${
                  !isChecked ? "hidden" : "block"
                }  ms-2 text-[36px] font-bold text-[#4FBF4F]`}
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isChecked ? "1" : "0",
                }}
              >
                +12%
              </p>
            </div>
            <p className="text-[18px] mt-20 opacity-50">
              Optimized <br /> time-to-hire.
            </p>
            <div className="flex w-[187px]">
              <p className="text-[36px] font-bold text-style">44%</p>
              <p
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isChecked ? "1" : "0",
                }}
                className={`${
                  !isChecked ? "hidden" : "block"
                }  ms-2 text-[36px] font-bold text-[#4FBF4F]`}
              >
                +9%
              </p>
            </div>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/detailPage/macbooks.png`}
              alt="macbook"
            />
          </div>
          <div>
            <p className="text-[18px] opacity-50">
              Reduced <br /> Turnover Rate
            </p>
            <div className="flex">
              <p className="text-[36px] font-bold text-style">32%</p>
              <p
                className={`${
                  !isChecked ? "hidden" : "block"
                }  ms-2 text-[36px] font-bold text-[#4FBF4F]`}
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isChecked ? "1" : "0",
                }}
              >
                +12%
              </p>
            </div>
            <p className="text-[18px] mt-20 opacity-50">
              Optimized <br /> time-to-hire.
            </p>
            <div className="flex w-[187px]">
              <p className="text-[36px] font-bold me-5 text-style">44%</p>
              <p
                style={{
                  transition: "opacity 0.5s ease-in-out",
                  opacity: isChecked ? "1" : "0",
                }}
                className={`${
                  !isChecked ? "hidden" : "block"
                }  ms-2 text-[36px] font-bold text-[#4FBF4F]`}
              >
                +9%
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecContent;
