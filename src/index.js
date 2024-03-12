import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "swiper/css/bundle"; // Adjust the path based on your project setup
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
