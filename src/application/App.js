import LanguageContext from "./contexts/language" ;
import UrlContext from "./contexts/url" ;
import Routers from "./core/routers" ;
import API from "./routes/api" ;
import React from "react" ;

import "./assets/css/app.css" ;


export default function App() {

    /** apply api */
    const [urls , setUrls] = React.useState([]) ;

    /** apply default language */
    const [language , setLanguage ] = React.useState("fa") ;

    React.useEffect(() => {

        API.setUrlContext().then( response => setUrls(response) ) ;        
        
    } , []);

    return (
        <UrlContext.Provider value={ urls }>
            <LanguageContext.Provider value={ language }>
                <Routers />
            </LanguageContext.Provider>
        </UrlContext.Provider>
    );
}

