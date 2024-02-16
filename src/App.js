import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Science from "./pages/Science";
import Product from "./pages/Product";
import CaseStudies from "./pages/CaseStudies";
import OurStory from "./pages/OurStory";
import Detail from "./pages/Detail";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/science" element={<Science />} />
        <Route path="/product" element={<Product />} />
        <Route path="/caseStudies" element={<CaseStudies />} />
        <Route path="/ourStory" element={<OurStory />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
