import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n.use(initReactI18next)
    .use(LanguageDetector)
    .init({
        lng: "tr",
        debug: true,

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
