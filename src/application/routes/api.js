import React from "react" ;
import UrlContext from "../contexts/url" ;

export const BASE_URL = "http://127.0.0.1:8000" ;
const ALL_ROUTES = BASE_URL + "/api/v1/routes" ;

const setUrlContext = () => {
    return fetch(ALL_ROUTES).then(response => response.json()) ;
}

export const useGetRoute = (urlName) => {
    
    const urls = React.useContext( UrlContext ) ;

    const findRoute = urls.filter( function(route) {
        return route["as"] === urlName ;
    });

    return findRoute.length ? findRoute[0]["uri"] :  "" ;
}

export const LOGIN = "api.v1.authunticate.login" ;
export const REGISTER = "api.v1.authunticate.register.store" ;
export const VERIFY_REGISTER = "api.v1.authunticate.register.verify" ;
export const TRANSLATION = "api.v1.translations" ;


export default {
    setUrlContext ,
    useGetRoute ,
    BASE_URL,
    LOGIN ,
    REGISTER , 
    VERIFY_REGISTER ,
    TRANSLATION ,
}