import React from "react";
import Header from "../components/Header";
import Content from "../components/DetailPage/Content";
import Testimonials from "../components/DetailPage/Testimonials";
import TestSec from "../components/Mainpage/TestSec";
import Footer from "../components/Footer";
import SecContent from "../components/DetailPage/SecContent";
import SecContentPh from "../components/DetailPage/SecContentPh";
const Detail = () => {
  return (
    <div>
      <div className="relative z-50">
        <Header />
        <div className="relative bg-[#202020] overflow-hidden">
          <img
            className="hidden sm:block w-full h-full overflow-hodden absolute top-[-100px]  right-[-60px]"
            src="./vectors/Ellipse.png"
            alt="ellipse"
          />
          <img
            src="./vectors/EllipsePhone.png"
            alt="ellipse"
            className="block sm:hidden w-full h-full overflow-hidden absolute top-[-80px] left-0 sm:z-0 "
          />
          <Content />
        </div>
        <div className="hidden sm:block">
          <SecContent />
        </div>
        <div className="block sm:hidden">
          <SecContentPh />
        </div>
        <Testimonials />
        <TestSec />
        <Footer />
      </div>
    </div>
  );
};

export default Detail;
