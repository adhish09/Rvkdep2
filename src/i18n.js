import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translationEN.json';
import translationHI from './locales/hi/translationHI.json';

const resources = {

    en: {
        translation: translationEN
    },
    hi: {
        translation: translationHI
    }
};

i18n
  .use(initReactI18next)  //passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator:false,

    interpolation: {
        escapeValue: false
    }
  });

  export default i18n;