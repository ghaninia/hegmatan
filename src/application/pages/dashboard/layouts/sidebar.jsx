import React, {useState} from "react"
import useTrans from "../../../core/hooks/trans";
import {KEYS} from "../../../routes/web";
import Menu from "../../../core/components/menu";
import {Dropdown} from "react-bootstrap";
import {Navigate, NavLink} from "react-router-dom";
import Auth from "../../../core/classes/auth";

export default function Sidebar () {


    const [redirect , setRedirect] = useState(false );

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
        {
            label : useTrans("dashboard.sidebar.roles.label"),
            icon : "lni lni-paint-roller" ,
            to : KEYS.DASHBOARD.ROLES.INDEX,
            permissions : [
            ]
        } ,
        {
            label : useTrans("dashboard.sidebar.tags.label"),
            icon : "lni lni-tag" ,
            to : KEYS.DASHBOARD.TAGS.INDEX,
            permissions : [
            ]
        } ,
        {
            label : useTrans("dashboard.sidebar.categories.label"),
            icon : "lni lni-bricks" ,
            to : KEYS.DASHBOARD.CATEGORIES.INDEX,
            permissions : [
            ]
        } ,
        {
            label : useTrans("dashboard.sidebar.shopping.label"),
            icon : "lni lni-gift" ,
            to : KEYS.DASHBOARD.CATEGORIES.INDEX,
            childrens : [
                {
                    label : useTrans("dashboard.sidebar.shopping.products"),
                    icon : "lni lni-dollar" ,
                    to : KEYS.DASHBOARD.CATEGORIES.INDEX,
                    permissions : [
                    ]
                } ,
            ],
            permissions : [
            ]
        } ,
    ]

    const logout = () => {
        Auth.logout() ;
        setRedirect(KEYS.AUTH.LOGIN)
    }

    return (
        <div className="container">
            { redirect ? <Navigate to={redirect}  /> : "" }
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
                            <NavLink end className="dropdown-item" to={KEYS.DASHBOARD.PROFILE.INDEX}>
                                { useTrans("dashboard.sidebar.profile.label") }
                            </NavLink>
                            <NavLink end className="dropdown-item" to={KEYS.DASHBOARD.PROFILE.PASSWORD}>
                                { useTrans("dashboard.sidebar.profile.password") }
                            </NavLink>
                            <Dropdown.Item onClick={ () =>  logout()   }>
                                { useTrans("dashboard.sidebar.profile.signout") }
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

            </div>
        </div>
    );

}


