import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/CaseStudiesPage/Content";
const CaseStudies = () => {
  return (
    <div>
      <div className="relative z-50">
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

          <Content />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
