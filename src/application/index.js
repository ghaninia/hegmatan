import React from "react";
import "./assets/css/app.css";
import 'react-toastify/dist/ReactToastify.css';

import UrlContext from "./contexts/url";
import LanguageContext from "./contexts/language";
import TranslationContext from "./contexts/translation";
import URL, {ALL_ROUTES, FindUrl, searchUrl} from "./routes";
import {fetchAndSaveTranslations} from "./core/hooks/trans";
import Routers from "./core/routers";
import {ToastContainer} from "react-toastify";
import AuthunticateContext from "./contexts/authunticate";
import Request from "./core/classes/request";

export default function App()
{ 
    /** apply default api */
    const [urls, setUrls] = React.useState([]);

    /** apply default language */
    const [language, setLanguage] = React.useState("fa");

    /** apply default translations */
    const [translations, setTranslations] = React.useState({});

    /** apply default authuntuicate */
    const [authunticate, setAuthunticate] = React.useState({}) ;


    React.useEffect(() => {

        (new Request(ALL_ROUTES)).get().then(function (response){
            setUrls(response?.data) ;
            fetchAndSaveTranslations(
                searchUrl(response?.data , URL.TRANSLATION) ,
                setTranslations
            );
        })

    }, [] );

    return (
        <AuthunticateContext.Provider value={ authunticate }>
            <UrlContext.Provider value={urls}>
                <LanguageContext.Provider value={language}>
                     <TranslationContext.Provider value={ translations }>
                         <Routers/>
                     </TranslationContext.Provider>
                </LanguageContext.Provider>
                <ToastContainer autoClose={2000} />
            </UrlContext.Provider>
        </AuthunticateContext.Provider>
    );
}
