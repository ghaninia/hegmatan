import React , {useState} from "react"
import useTrans from "../../../core/hooks/trans";
import {KEYS} from "../../../routes/web";
import Menu from "../../../core/components/menu";
import URL from "../../../routes";
import {Link} from "react-router-dom";

export default function Sidebar () {

    const items = [
        {
            label : useTrans("dashboard.sidebar.main"),
            icon: "lni lni-grid-alt" ,
            to : KEYS.DASHBOARD.MAIN ,
        } ,
        {
            label : useTrans("dashboard.sidebar.users.label"),
            icon : "lni lni-users" ,
            to : KEYS.DASHBOARD.USERS.INDEX,
            permissions : [
            ]
        } ,
    ]

    return (
        <div className="container">
            <div className="menu collapse" id="content">

                <Menu items={ items }  />

                <div className="user">
                    <div className="dropdown show">
                        <div className="picture">
                            <img src="" alt=""/>
                        </div>
                        {/*<div className="dropdown-menu show">*/}
                        {/*    <a className="dropdown-item">{ useTrans("dashboard.sidebar.users.profile.label") }</a>*/}
                        {/*    <a className="dropdown-item">{ useTrans("dashboard.sidebar.users.profile.setting") }</a>*/}
                        {/*    <a className="dropdown-item">{ useTrans("dashboard.sidebar.users.profile.signout") }</a>*/}
                        {/*</div>*/}
                    </div>
                </div>

            </div>
        </div>
    );

}


