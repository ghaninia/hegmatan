import React from "react";
import Sidebar from "./sidebar" ;

export default class Container extends React.Component {
    render(){
        return (
            <div className="nav-side">
                <nav className="navigation">
                    <Sidebar />
                </nav>
                <div className="main">
                    <div className="pages">
                        <div className="container">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}