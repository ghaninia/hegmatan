import { BrowserRouter , Route, Routes } from 'react-router-dom';

import web from "../routes/web" ;

export default function Routers(){
    
    return (
        <BrowserRouter>
            <Routes>
                {web.map( 
                    (route , index) => <Route
                        key={index}
                        path={route.path}
                        exact={route.exact ?? false}
                        element={<route.main />}
                    />
                )}
             </Routes>
         </BrowserRouter>
    );
}