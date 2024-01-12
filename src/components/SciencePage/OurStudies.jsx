import React from "react";

const OurStudies = () => {
  return (
    <div>
      <div className="flex  justify-center ">
        <div className="mb-10 text-center">
          <p className="text-[56px] font-bold third-style">Our Studies</p>
        </div>
      </div>
      <div className="flex flex-wrap  justify-center px-10   gap-16">
        <div className="flex-col w-[390px] bg-white rounded-[20px]">
          <img src="./sciencePage/Study1.png" className="w-[390px]" alt="img" />
          <div className="p-5">
            {" "}
            <p className="text-[32px] mb-2">Study 1</p>
            <p className="text-[#808080] text-[21px] mb-5">
              A global technology company was <br /> facing challenges in
              recruiting top <br />
              talent within a reasonable...
            </p>
            <a className="text-style text-[21px]  " href="/">
              Read more
            </a>
          </div>
        </div>
        <div className="flex-col w-[390px] bg-white rounded-[20px]">
          <img src="./sciencePage/Study2.png" className="w-[390px]" alt="img" />
          <div className="p-5">
            {" "}
            <p className="text-[32px] mb-2">Study 1</p>
            <p className="text-[#808080] text-[21px] mb-5">
              A global technology company was <br /> facing challenges in
              recruiting top <br />
              talent within a reasonable...
            </p>
            <a className="text-style text-[21px]  " href="/">
              Read more
            </a>
          </div>
        </div>
        <div className="flex-col w-[390px] bg-white rounded-[20px]">
          <img src="./sciencePage/Study3.png" className="w-[390px]" alt="img" />
          <div className="p-5">
            {" "}
            <p className="text-[32px] mb-2">Study 1</p>
            <p className="text-[#808080] text-[21px] mb-5">
              A global technology company was <br /> facing challenges in
              recruiting top <br />
              talent within a reasonable...
            </p>
            <a className="text-style text-[21px]  " href="/">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStudies;
