import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: localStorage.getItem("lang"),
        debug: true,

        interpolation: {
            escapeValue: false,
        },
        fallbackLng: "tr",
    });

export default i18n;
