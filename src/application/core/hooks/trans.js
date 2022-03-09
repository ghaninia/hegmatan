import {useContext } from "react";
import TranslationContext from "../../contexts/translation";
import LanguageContext from "../../contexts/language";


export const fetchAndSaveTranslations = (routeUrl , setTranslations) => {
    fetch(routeUrl)
        .then(response => response.json())
        .then(response => setTranslations(response));
}

const useTrans = (params) => {

    let translations = useContext(TranslationContext);
    let language = useContext(LanguageContext);

    translations = translations?.[language] ?? {};

    const trans = params.split('.').reduce((prev, part) => prev && prev[part], translations);

    return trans === undefined ? params : trans;
}


export default useTrans ;