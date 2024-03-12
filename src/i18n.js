import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import axios from "axios";

import TranslationInEng from "./locales/en/translation.json";
import TranslationInMongolia from "./locales/mn/translation.json";
const resources = {
  mn: {
    translation: TranslationInMongolia,
  },
  en: {
    translation: TranslationInEng,
  },
};

const initializei18n = async () => {
  try {
    const response = await axios.get("https://ipapi.co/json/");
    const country = response.data.country_code.toLowerCase();

    i18n.use(initReactI18next).init({
      resources,
      fallbackLng: "en",
      lng: country === "mn" ? "mn" : "en",
      interpolation: {
        escapeValue: false,
      },
      ns: "translation",
      defaultNS: "translation",
      debug: true,
    });
  } catch (error) {
    console.error("Failed to fetch IP geolocation data:", error);
    i18n.use(initReactI18next).init({
      resources,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      ns: "translation",
      defaultNS: "translation",
      debug: true,
    });
  }
};

initializei18n();

export default i18n;
