import React from "react" ;
import Sidebar from "./layouts/sidebar" ;

const Dashboard = () => {
    return (
        <div className="nav-side">
            <nav className="navigation">
                <Sidebar />
            </nav>
        </div>
    );
}

export default Dashboard ;