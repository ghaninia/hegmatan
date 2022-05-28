import {Checkbox, Page,Confirm} from "../../../core/components";
import Container from "../layouts/container";
import Widget from "../../../core/components/widget";
import useTrans from "../../../core/hooks/trans";
import React, {useContext, useEffect, useState} from "react";
import Request from "../../../core/classes/request";
import Notification from "../../../core/classes/notification";
import URL, {searchUrl} from "../../../routes";
import UrlContext from "../../../contexts/url";
import EnumUser from "../../../core/Enums/EnumUser";
import Paginator from "../../../core/components/pagination";
import {NavLink, useSearchParams} from "react-router-dom";
import {Dropdown, DropdownButton , OverlayTrigger , Tooltip} from "react-bootstrap";
import {KEYS , ClientRoute} from "../../../routes/web";
import Swal from 'sweetalert2'
import Show from "./show" ;

const Users = (props) => {

    const staticUsersURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.WIDGET.STATISTIC.USERS) ;
    
    const usersURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.USER.INDEX) ;
    const UserDestroyURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.USER.DESTROY) ;
    const UserRestoreURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.USER.RESTORE) ;

    let [searchParams, setSearchParams] = useSearchParams();
    const [userFilters , setUserFilters ] = useState(Object.fromEntries([...searchParams])) ;

    const [ activeUserCount , setActiveUsersCount ] = useState(0) ;
    const [ deactiveUserCount , setDeactiveUsersCount ] = useState(0) ;
    const [ usersCount , setUsersCount ] = useState(0) ;
    const [ users , setUsers ] = useState(null) ;
    let [ marked , setMarked ] = useState([]) ;

   /** @var */
    let translation = {
        name : useTrans("dashboard.fields.name") ,
        username : useTrans("dashboard.fields.username") ,
        mobile : useTrans("dashboard.fields.mobile") ,
        detail : useTrans("dashboard.fields.detail") ,
        remove : useTrans("dashboard.fields.delete") ,
        restore : useTrans("dashboard.fields.restore") ,
        user : {
            label : useTrans("dashboard.widget.users.label") ,
            active : useTrans("dashboard.widget.users.active") ,
            deactive : useTrans("dashboard.widget.users.deactive") ,
            tooltip : {
                active : useTrans("dashboard.fields.active") ,
                deactive : useTrans("dashboard.fields.deactive") ,
            },
            alert : {
                delete : useTrans("dashboard.confirm.users.delete") ,
                restore : useTrans("dashboard.confirm.users.restore") ,
            }
        } ,
    } ;

    /**
     * fetch users
     * @param filters
     * @returns {Promise<void>}
     */
    const fetchUsers = async (filters) => {
        await (new Request(usersURI ,filters)).auth().get().then(function(response){
            setUsers(response.data);
        })
    };

    /**
     * fetch statics
     * @returns {Promise<void>}
     */
    const fetchStatics = async () => {
        await (new Request(staticUsersURI)).auth().get().then(function(response){
            setActiveUsersCount(
                response.data.filter( (data) => data.status == EnumUser.TYPE_ACTIVE ).reduce( (total , data ) => total + data.count , 0 )
            );
            setDeactiveUsersCount(
                response.data.filter( (data) => data.status == EnumUser.TYPE_DEACTIVE ).reduce( (total , data ) => total + data.count , 0 )
            )
            setUsersCount(
                response.data.reduce( (total , data ) => total + data.count , 0 )
            )
        });
    } ;

    useEffect( () => {
        fetchStatics() ;
        fetchUsers(userFilters) ;
    } , []) ;

    /**
     * @param id
     */
    const setCheckHandler = (event , id) => {
        event.target.checked ?
            setMarked([...marked,id]) :
            setMarked(marked.filter( item => item !== id )) ;
    }

    /**
     * @param items
     */
    const reChecKedCheckboxes = (event , items) => {
        let list = marked ;
        items.map((item) => {
            if(event.target.checked){
                if(! list.includes(item.id)) {
                    list = [...list , item.id] ;
                }
            }else{
                list = list.filter( index => item.id !== index ) ;
            }
        });
        setMarked(list) ;
    }

    /**
     * @param page
     * @return void
     */
    const handlePaginate = (page) => {
        var filters = { page , ...userFilters} ;
        setUserFilters(filters) ;
        fetchUsers(filters) ;
    };

    /**
     * REMOVE USER
     * @param e
     * @param user
     */
    const removeUser = (e , userId) => {
        e.preventDefault() ;
        let route = ClientRoute(UserDestroyURI , {user : userId} ) ;
        Confirm(translation.user.alert.delete , async function (){
            await (new Request(route)).auth().delete().then(function(response){
                Notification.success(response.data.msg , () => {
                    e.target.closest("tr").classList.add("deactive") ;
                });
            });
        });
    };


    /**
     * RESTORE USER
     * @param e
     * @param user
     */
    const restoreUser = (e , userId) => {
        e.preventDefault() ;
        let route = ClientRoute(UserRestoreURI , {user : userId} ) ;
        Confirm(translation.user.alert.restore , async function (){
            await (new Request(route)).auth().post().then(function(response){
                Notification.success(response.data.msg , () => {
                    e.target.closest("tr").classList.remove("deactive") ;
                });
            });
        });
    };


    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-users" input={ usersCount } label={ translation.user.label } />
                </div>
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-checkmark" input={ activeUserCount } label={ translation.user.active } />
                </div>
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-close" input={ deactiveUserCount } label={ translation.user.deactive } />
                </div>
            </div>
            <Page>
                <table className="table" >
                    <thead>
                        <tr>
                            <th>
                                <Checkbox onChange={(e) => reChecKedCheckboxes(e , users?.data) }/>
                            </th>
                            <th>{ translation.name }</th>
                            <th>{ translation.username }</th>
                            <th>{ translation.mobile }</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users == null ?
                            (<tr><td colSpan={5}></td></tr>) :
                            users.data.map((user , key) => (
                                <tr key={key} className={ user.is_trashed ? "deactive" : "active" }>
                                    <td>
                                        <Checkbox
                                            onChange={ e => { setCheckHandler(e , user?.id) } }
                                            checked={ marked.includes(user?.id) ? "1" : "" }
                                        />
                                    </td>
                                    <td data-title={ translation.name }>
                                        <OverlayTrigger
                                            overlay={<Tooltip>{user.status ? translation.user.tooltip.active : translation.user.tooltip.deactive }</Tooltip>}>
                                            <div className={ user.status ? 'circle active' : 'circle deactive'}></div>
                                        </OverlayTrigger>
                                        {user?.name}
                                    </td>
                                    <td data-title={ translation.username }>{user?.username}</td>
                                    <td data-title={ translation.mobile }>{user?.mobile}</td>
                                    <td>
                                        <Dropdown>
                                            <Dropdown.Toggle className="unset" variant="">
                                                <i className="lni lni-radio-button"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <NavLink end className="dropdown-item" to={ ClientRoute(KEYS.DASHBOARD.USERS.SHOW , {"user" : user.id}) }>
                                                    { translation.detail }
                                                </NavLink>
                                                {
                                                    user.is_trashed ?
                                                        (
                                                            <NavLink
                                                                to="/"
                                                                onClick = { (e) => restoreUser(e ,user.id) }
                                                                end className="dropdown-item" >
                                                                { translation.restore }
                                                            </NavLink>
                                                        ) :
                                                        (
                                                            <NavLink
                                                                to="/"
                                                                onClick = { (e) => removeUser(e ,user.id) }
                                                                end className="dropdown-item" >
                                                                { translation.remove }
                                                            </NavLink>
                                                        )
                                                }
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </td>
                                </tr>
                        ))}
                    </tbody>
                </table>
                <Paginator items={users} clousre={ (page) => handlePaginate(page) } />
            </Page>
        </Container>
    ) ;
}
export default React.memo(Users) ;

export {
    Show
};