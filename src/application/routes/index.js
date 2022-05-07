import React from "react" ;
import UrlContext from "../contexts/url" ;

export const BASE_URL = "http://127.0.0.1:8000" ;
export const ALL_ROUTES = BASE_URL + "/api/v1/routes" ;

/**
 * search url in context
 */
export const searchUrl = (urlContext , routeName ) => {

    const findRoute = urlContext.filter( function(route) {
        return route["as"] === routeName ;
    });

    return findRoute.length ? findRoute[0]["uri"] :  null ;
}


const URL = {
    LOGIN :  "api.v1.authunticate.login" ,
    REGISTER :  "api.v1.authunticate.register.store" ,
    VERIFY_REGISTER :  "api.v1.authunticate.register.verify" ,
    TRANSLATION :  "api.v1.translations" ,

    DASHBOARD: {
        WIDGET : {
            STATISTIC : {
                POSTS : "api.v1.widget.statistic.posts" ,
                USERS : "api.v1.widget.statistic.users" ,
            }
        },
        USER : {
            INDEX : "api.v1.user.index"
        }
    }

} ;



export default URL ;