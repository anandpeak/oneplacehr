import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OurScience from "../components/SciencePage/OurScience";
// import OurStudies from "../components/SciencePage/OurStudies";
import Request from "../components/ProductPage/Request";
const Science = () => {
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
        <OurScience />
        {/* <div className="hidden sm:hidden md:block">
          <OurStudies />
        </div> */}
        <Request />

        <Footer />
      </div>
    </div>
  );
};

export default Science;
