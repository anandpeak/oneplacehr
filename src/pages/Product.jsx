import React from "react";
import Header from "../components/Header";
import OurProducts from "../components/ProductPage/OurProducts";
import Request from "../components/ProductPage/Request";
import Footer from "../components/Footer";

const Product = () => {
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
        <OurProducts />
        <Request />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
