import { createContext } from "react" ;

const LanguageContext = createContext({
    lagnauge : "fa" , 
    swithLanguage : () => {} 
})

export default LanguageContext ;