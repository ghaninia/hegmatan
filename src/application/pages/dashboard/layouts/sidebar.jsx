import React , {useState} from "react"
import useTrans from "../../../core/hooks/trans";
import {KEYS} from "../../../routes/web";
import Menu from "../../../core/components/menu";
import URL from "../../../routes";

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

                {/*<div className="user">*/}
                {/*    <div className="dropdown">*/}
                {/*      */}
                {/*        <div className="dropdown-menu">*/}
                {/*            <a href="user.html" className="dropdown-item">پروفایل</a>*/}
                {/*            <a href="settings.html" className="dropdown-item">تنظیمات</a>*/}
                {/*            <a href="sign-in.html" className="dropdown-item">خروج</a>*/}
                {/*        </div>*/}
                {/*        */}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
        </div>
    );

}


