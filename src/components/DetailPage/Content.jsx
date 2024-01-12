import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import jsonData from "../../data.json";
const Content = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const filteredData = jsonData.find((item) => item.id === id);
    setData(filteredData);
  }, [id]);

  if (!data) {
    return <div>loading</div>;
  }

  return (
    <div>
      <div className="py-20 ">
        <div className="flex md:flex-row sm:flex-col-reverse flex-col-reverse items-center justify-between">
          <div className="md:ps-[150px] mt-5 ps-0">
            <img
              src={`${process.env.PUBLIC_URL}/caseStudies/${data.logo}`}
              className="w-[64px] h-[64px]"
              alt="logo"
            />

            <p className="third-style md:text-[56px] sm:text-[46px] text-[36px] font-bold">
              {data.name} EX <br /> EVALUATION
            </p>
            <p className="text-[16px] mt-5 sm:text-[20px] md:text-[24px] text-white opacity-50">
              Prioritizing soft skills and cognitive <br /> performance in
              hiring elevates the <br />
              likelihood of securing high-potential <br /> employees by
              fivefold.
            </p>
            <div className="sm:flex block gap-20 mt-10 sm:mt-14">
              <div>
                <p className="text-white opacity-50 text-[18px]">
                  Reduced turnover rate
                </p>
                <p className="text-style text-[36px] font-bold">-22%</p>
              </div>
              <div>
                <p className="text-white opacity-50 text-[18px]">
                  Optimized time-to-hire
                </p>
                <p className="text-style text-[36px] font-bold">-10%</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/detailPage/macbook.svg`}
              className="sm:ps-0 ps-20 sm:mb-0 mb-10"
              alt="macbook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
