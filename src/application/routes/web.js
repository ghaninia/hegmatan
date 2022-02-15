import Auth from "../pages/auth" ;

const Web = [
    {
        path: "/" ,
        exact: true,
        main: () => <h2>main</h2>
    },
    {
        path: "/auth",
        main: () => "auth"
    },
    {
        path: "/auth/login",
        main: () =>  <Auth.Login />
    },
    {
        path: "/auth/register",
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/auth/forget",
        main: () => <h2>Shoelaces</h2>
    }
]


export default Web ;