import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css/bundle"; // Adjust the path based on your project setup
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
