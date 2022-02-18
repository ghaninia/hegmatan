import React from "react" ;

import LanguageContext from "../../contexts/language" ;

import { TRANSLATION , useGetRoute } from "../../routes/api" ;


export default function useTrans(params){
    
    const [ translations , setTranslations ] = React.useState({}) ;
    
    const language = React.useContext(LanguageContext) ;

    const TRANSLATION_URL = useGetRoute(TRANSLATION) ;

    React.useEffect( () => {
        
        fetch( TRANSLATION_URL )
            .then( response => response.json() )
            .then( response => setTranslations( response ) ) ;

    } , [ TRANSLATION_URL ]) ;

    // translations = translations?.[language] ?? {} ;

    
    // params = params.split(".") ;

    // console.log(
    //     getTrans(params , translations )
    // );

}

function getTrans(params , translations){
    const param = params.shift() ;
    let trans = translations ;

    console.log( trans ) ;
}