import React from "react" ;

const UrlContext = React.createContext({
    "urls" : [] , 
    setUrls : () => {}  
});

export default UrlContext ;