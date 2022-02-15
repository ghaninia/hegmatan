import React from "react" ;

import LanguageContext from "../../contexts/language" ;

import { TRANSLATION , useGetRoute } from "../../routes/api" ;


export default function useTrans(key){
    
    const [ translations , setTranslations ] = React.useState({}) ;
    
    const language = React.useContext(LanguageContext) ;

    const translationURL = useGetRoute(TRANSLATION) ;

    console.log(translationURL) ;

    

    return key ;

    // if(translations.length == 0 ) return key ;

    // const parameters = key.split(".") ;

    // translations = translations?.[language] ?? {} ;
    


    // const cloneParameter = parameter ;
    // getTranslations = getTranslations?.[currentSystemLanguage] ?? {};
    // parameters.forEach(parameter => {
    //     getTranslations = getTranslations[parameter] || currentSystemLanguage + "." + cloneParameter;
    // });
    // return getTranslations;

}