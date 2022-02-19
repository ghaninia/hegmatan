import React from "react" ;

const TranslationContext = React.createContext({
    translations : null ,
    setTranslations : () => {} 
});


export default TranslationContext ;