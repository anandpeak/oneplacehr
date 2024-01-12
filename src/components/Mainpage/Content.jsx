import React from "react";
import RecGameContent from "./RecGameContent";
import RecProcess from "./RecProcess";
import EmployeeExp from "./EmployeeExp";
import RetentionRate from "./RetentionRate";
import TestSec from "./TestSec";
import PrestigiousSec from "./PrestigiousSec";
import Partner from "./Partner";
import Footer from "../Footer";
import RecProcessPh from "./mobile/RecProcessPh";
import EmployeeExpPh from "./mobile/EmployeeExpPh";
import RetentionRatePh from "./mobile/RetentionRatePh";

const Content = () => {
  return (
    <div>
      <div className="md:block sm:hidden hidden">
        <RecProcess />
        <RecGameContent />
        <EmployeeExp />
        <RetentionRate />
        <PrestigiousSec />
        <TestSec />
        <Partner />
        <Footer />
      </div>
      <div className="lg:hidden md:hidden sm:block block">
        <RecProcessPh />
        <EmployeeExpPh />
        <RetentionRatePh />
        <PrestigiousSec />
        <TestSec />
        <Partner />
        <Footer />
      </div>
    </div>
  );
};

export default Content;
