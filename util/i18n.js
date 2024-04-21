// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Translations
import uz from "../public/locales/uz.json";
import en from "../public/locales/en.json";
import ru from "../public/locales/ru.json";

const options = {
  resources: {
    ru: {
      translation: ru,
    },
    en: {
      translation: en,
    },
    uz: {
      translation: uz,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;
