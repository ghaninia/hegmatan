import Auth from "../pages/auth" ;
import Dashboard from "../pages/dashboard";

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
        }
    },
}

const Web = [
    {
        path: KEYS.HOME,
        exact: true,
        main: () => <h2>main</h2>
    },
    {
        path: KEYS.AUTH.LOGIN ,
        main: () =>  <Auth.Login />
    },
    {
        path: KEYS.AUTH.REGISTER ,
        main: () => <Auth.Register />
    },
    {
        path: KEYS.AUTH.FORGET ,
        main: () => <h2>FORGET</h2>
    },
    {
        path: KEYS.DASHBOARD.MAIN,
        exact: true,
        main: () => <Dashboard />
    }
]


export default Web ;