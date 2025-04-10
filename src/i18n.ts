import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslations from "./locals/en/translation.json";
import noTranslations from "./locals/no/translation.json";


// Translation resources
const resources = {
  en: {
    translation: enTranslations,
  },
  no: {
    translation: noTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "no",
    ns: ["translation"],
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
      prefix: "",
      suffix: "",
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"],
      caches: ["cookie", "localStorage"],
    },
  })
  .catch((err: unknown) => {
    console.error(err);
  });

export default i18n;
