import React from "react"
import useTrans from "../../../core/hooks/trans";
import {KEYS} from "../../../routes/web";
import Menu from "../../../core/components/menu";
import {Dropdown} from "react-bootstrap";
import { NavLink} from "react-router-dom";
import Auth from "../../../core/classes/auth";
import storage  from "../../../core/classes/storage";

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

    const logout = () => {
        Auth.logout() ;
        storage.flash(KEYS.AUTHUSER) ;
    }

    return (
        <div className="container">
            <div className="menu collapse" id="content">
                <Menu items={ items }  />
                <div className="user">
                    <Dropdown>
                        <Dropdown.Toggle className="unset" variant="">
                            <div className="picture">
                                <img src="" alt=""/>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <NavLink className="dropdown-item" to={KEYS.DASHBOARD.PROFILE.INDEX}>
                                { useTrans("dashboard.sidebar.users.profile.label") }
                            </NavLink>
                            <NavLink className="dropdown-item" to={KEYS.DASHBOARD.PROFILE.SETTING}>
                                { useTrans("dashboard.sidebar.users.profile.setting") }
                            </NavLink>
                            <Dropdown.Item onClick={ () =>  logout()   }>
                                { useTrans("dashboard.sidebar.users.profile.signout") }
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        </div>
    );

}


