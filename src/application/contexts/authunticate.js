import React, {createContext} from "react" ;

const AuthunticateContext = createContext({
    authunticate : null ,
    setAuthunticate : () => {}
});

export default AuthunticateContext ;