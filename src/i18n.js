import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-http-backend';
import languageEN from './locate/en/translate.json';
import languageES from './locate/es/translate.json';

i18n
  .use(backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: languageEN,
      es: languageES,
    },
    // default language when load the website in browser
    lng: 'es',
    fallbackLng: ['es', 'en'],
    debug: true,

    // how is the json structured
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',

    // Return Objects if selected
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
