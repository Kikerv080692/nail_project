import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import {initReactI18next } from 'react-i18next'


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    fallbacking: 'en',
    debug: true,
    detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie']
    },
    interpolation: {
    escapeValue: false
    }
    })
    export default i18n

// import i18n from 'i18next'
// import LocalStorageBackend from 'i18next-localstorage-backend';
// import LanguageDetector from 'i18next-browser-languagedetector'
// import {initReactI18next } from 'react-i18next'
// import uk from '../public/locales/uk/translation.json'
// import en from '../public/locales/en/translation.json'
// import cze from '../public/locales/cze/translation.json'


// export const recourses = {
//     en: {translation: en},
//     uk: {translation: uk},
//     cze: {translation: cze}
// }

// i18n.use(LanguageDetector).use(LocalStorageBackend).use(initReactI18next).init({
//     detection: {
//         order: ['localStorage'],
//         cache: ['localStorage'],

//     },
//     fallbackLng: 'en',
//     recourses, interpolation: {
//         escapeValue: false,
//     }
// })
// export default i18n