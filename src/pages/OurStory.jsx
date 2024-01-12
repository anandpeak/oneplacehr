import React from "react";
import Header from "../components/Header";
import OurTeam from "../components/OurStoryPage/OurTeam";
import Roadmap from "../components/OurStoryPage/Roadmap";
import Partner from "../components/Mainpage/Partner";
import Footer from "../components/Footer";
import RoadmapPh from "../components/OurStoryPage/RoadmapPh";

const OurStory = () => {
  return (
    <div className="relative">
      <Header />
      <div className="relative bg-[#202020] overflow-hidden">
        <img
          className="hidden sm:block overflow-hodden absolute top-[-100px]  right-[-60px]"
          src="./vectors/Ellipse.png"
          alt="ellipse"
        />
        <img
          src="./vectors/EllipsePhone.png"
          alt="ellipse"
          className="block sm:hidden overflow-hidden absolute top-[-80px] left-0 sm:z-0 "
        />
        <OurTeam />
        <div className="hidden sm:hidden md:block">
          <Roadmap />
        </div>
        <div className="block sm:block md:hidden">
          <RoadmapPh />
        </div>
        <Partner />
        <Footer />
      </div>
    </div>
  );
};

export default OurStory;
