import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Packages from "../components/Pricing/Packages";

const Pricing = () => {
  return (
    <div className="relative">
      <Header />
      <div className="relative overflow-hidden">
        <Packages />
        <Footer />
      </div>
    </div>
  );
};

export default Pricing;
