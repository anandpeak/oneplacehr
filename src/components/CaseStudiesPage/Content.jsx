import React, { useEffect, useState } from "react";
import data from "../../data.json";
import { Link } from "react-router-dom";
const Content = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [items, setItems] = useState(null);

  useEffect(() => {
    setItems(data);
  }, []);

  if (items === null) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        Loading...
      </div>
    );
  }

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredItems =
    activeCategory === "ALL"
      ? items
      : items.filter((item) => item.category === activeCategory);
  return (
    <div className="relative z-40">
      <div className="mt-20">
        <p className="text-[36px] px-10 sm:text-[56px]   sm:text-center font-bold third-style">
          Case <span className="text-style">Studies</span>
        </p>
      </div>
      <div className="mb-20">
        <div
          className="flex items-center justify-center gap-10 my-10 px-10 w-[800px] sm:w-screen overflow-x-scroll"
          style={{ overflowX: "hidden", touchAction: "manipulation" }}
        >
          <button
            className={`transition duration-300 ease-in-out ${
              activeCategory === "ALL"
                ? "bg-gradient-to-br from-[#F48D7E] to-[#D74C38] text-white"
                : "border-2 border-[#eeeff2] border-opacity-30 bg-black bg-opacity-10 text-white"
            } px-4 py-2 rounded-[52px]`}
            onClick={() => handleCategoryClick("ALL")}
          >
            ALL
          </button>

          <button
            className={`transition duration-300 ease-in-out ${
              activeCategory === "RECRUITMENT"
                ? "bg-gradient-to-br from-[#F48D7E] to-[#D74C38] text-white"
                : "border-2 border-[#eeeff2] border-opacity-30 bg-black bg-opacity-10 text-white"
            } px-4 py-2 rounded-[52px]`}
            onClick={() => handleCategoryClick("RECRUITMENT")}
          >
            RECRUITMENT
          </button>
          <button
            className={`transition duration-300 ease-in-out ${
              activeCategory === "TEAM ENGAGEMENT"
                ? "bg-gradient-to-br from-[#F48D7E] to-[#D74C38] text-white"
                : "border-2 border-[#eeeff2] border-opacity-30 bg-black bg-opacity-10 text-white"
            } px-4 py-2 rounded-[52px]`}
            onClick={() => handleCategoryClick("TEAM ENGAGEMENT")}
          >
            TEAM ENGAGEMENT
          </button>
          <button
            className={`transition duration-300 ease-in-out ${
              activeCategory === "RETENTION RATE"
                ? "bg-gradient-to-br from-[#F48D7E] to-[#D74C38] text-white"
                : "border-2 border-[#eeeff2] border-opacity-30 bg-black bg-opacity-10 text-white"
            } px-4 py-2 rounded-[52px]`}
            onClick={() => handleCategoryClick("RETENTION RATE")}
          >
            RETENTION RATE
          </button>
        </div>
        <div className=" flex flex-wrap gap-10 p-5 sm:p-10 justify-center items-center">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="flex-col w-[390px] bg-white rounded-[20px]"
            >
              <img
                src={`${process.env.PUBLIC_URL}/caseStudies/${item.img}`}
                className="w-[390px]"
                alt="img"
              />
              <div className="p-5">
                {" "}
                <div className="flex items-center gap-2">
                  <img
                    src={`${process.env.PUBLIC_URL}/caseStudies/${item.logo}`}
                    alt="logo"
                  />
                  <p className="text-[32px]  font-semibold">{item.name}</p>
                </div>
                <p className="text-[#808080] mt-2 text-[21px] mb-5">
                  {item.content}
                </p>
                <Link
                  className="text-style text-[21px]"
                  to={`/detail/${item.id}`}
                >
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
