import Auth from "../pages/auth" ;
import Dashboard from "../pages/dashboard";
import Profile , { Password as ProfilePassword } from "../pages/dashboard/profile";
import Users from "../pages/dashboard/user";

/**
 * @type {{AUTH: {REGISTER: string, LOGIN: string, FORGET: string}, DASHBOARD: {PROFILE: {PASSWORD: string, INDEX: string}, ROLES: {INDEX: string}, MAIN: string, USERS: {INDEX: string, SHOW: string}, CATEGORIES: {CREATE: string, INDEX: string}, TAGS: {CREATE: string, INDEX: string}}, HOME: string}}
 */
export const KEYS = {
    HOME : "/" ,
    AUTH : {
        LOGIN : "/auth/login" ,
        REGISTER: "/auth/register" ,
        FORGET : "/auth/forget" ,
    },
    DASHBOARD : {
        MAIN : "/dashboard" ,
        USERS : {
            INDEX : "/dashboard/users" ,
            SHOW : "/dashboard/users/:user"
        },
        ROLES : {
            INDEX : "/dashboard/roles" ,
        },
        PROFILE : {
            INDEX : "/dashboard/profile" ,
            PASSWORD : "/dashboard/profile/password" ,
        },
        TAGS : {
            INDEX : "/dashboard/tags" ,
            CREATE : "/dashboard/tags/create" ,
        },
        CATEGORIES : {
            INDEX : "/dashboard/categories" ,
            CREATE : "/dashboard/categories/create" ,
        }
    },
}

/**
 * get clients
 * @param url
 * @param arguments
 * @returns {*}
 * @constructor
 */
export const ClientRoute =  (url, data = {}) => {
    for( const arg in data ) {
        url = url.replace( arg , data[arg]) ;
    }
    return url ;
};

/**
 * @type {[{path: string, exact: boolean, main: (function()), middleware: string[]}, {path: string, main: (function()), middleware: string[]}, {path: string, main: (function()), middleware: string[]}, {path: string, main: (function()), middleware: string[]}, {path: string, main: (function()), middleware: string[]}, null, null, null]}
 */
const Web = [
    {
        path: KEYS.HOME,
        main: () => <h2>main</h2> ,
        middleware : [ "guest" ] ,
        exact : false
    },
    {
        path: KEYS.AUTH.LOGIN ,
        main: () =>  <Auth.Login />,
        middleware : [ "guest" ]
    },
    {
        path: KEYS.AUTH.REGISTER ,
        main: () => <Auth.Register />,
        middleware : [ "guest" ]
    },
    {
        path: KEYS.AUTH.FORGET ,
        main: () => <h2>FORGET</h2>,
        middleware : [ "guest" ]
    },
    {
        path: KEYS.DASHBOARD.MAIN,
        main: () => <Dashboard /> ,
        middleware : [ "auth" ]
    },
    {
        path : KEYS.DASHBOARD.PROFILE.INDEX ,
        main: () => <Profile /> ,
        middleware : [ "auth" ]
    },
    {
        path : KEYS.DASHBOARD.PROFILE.PASSWORD ,
        main: () => <ProfilePassword /> ,
        middleware : [ "auth" ]
    },
    {
        path : KEYS.DASHBOARD.USERS.INDEX ,
        main: () => <Users /> ,
        middleware : [ "auth" ]
    }
]
export default Web ;
