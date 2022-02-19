import React from "react";
import "./assets/css/app.css";

import UrlContext from "./contexts/url";
import LanguageContext from "./contexts/language";
import TranslationContext from "./contexts/translation";
import URL, {ALL_ROUTES, FindUrl, searchUrl} from "./routes";
import {fetchAndSaveTranslations} from "./core/hooks/trans";
import Routers from "./core/routers";

export default function App()
{ 
    /** apply default api */
    const [urls, setUrls] = React.useState([]);

    /** apply default language */
    const [language, setLanguage] = React.useState("fa");

    /** apply default translations */
    const [translations, setTranslations] = React.useState({});

    React.useEffect(() => {

        fetch(ALL_ROUTES)
            .then(response => response.json() )
            .then(function (response){

                setUrls(response) ;

                fetchAndSaveTranslations(
                    searchUrl(response , URL.TRANSLATION) ,
                    setTranslations
                );

            });

    }, [] );

    return (
        <UrlContext.Provider value={urls}>
            <LanguageContext.Provider value={language}>
                 <TranslationContext.Provider value={ translations }>
                     <Routers/>
                 </TranslationContext.Provider>
            </LanguageContext.Provider>
        </UrlContext.Provider>
    );
}
