import {Checkbox, Page} from "../../../core/components";
import Container from "../layouts/container";
import Widget from "../../../core/components/widget";
import useTrans from "../../../core/hooks/trans";
import React, {useContext, useEffect, useState} from "react";
import Request from "../../../core/classes/request";
import URL, {searchUrl} from "../../../routes";
import UrlContext from "../../../contexts/url";
import EnumUser from "../../../core/Enums/EnumUser";
import Paginator from "../../../core/components/pagination";
import {useSearchParams} from "react-router-dom";

const Users = (props) => {

    const staticUsersURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.WIDGET.STATISTIC.USERS) ;
    const usersURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.USER.INDEX) ;
    let [searchParams, setSearchParams] = useSearchParams();
    const [userFilters , setUserFilters ] = useState(Object.fromEntries([...searchParams])) ;

    const [ activeUserCount , setActiveUsersCount ] = useState(0) ;
    const [ deactiveUserCount , setDeactiveUsersCount ] = useState(0) ;
    const [ usersCount , setUsersCount ] = useState(0) ;
    const [ users , setUsers ] = useState(null) ;
    let [ marked , setMarked ] = useState([]) ;

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
                response.data.filter( (data) => data.count === EnumUser.TYPE_ACTIVE ).reduce( (total , data ) => total + data.count , 0 )
            );
            setDeactiveUsersCount(
                response.data.filter( (data) => data.count === EnumUser.TYPE_DEACTIVE ).reduce( (total , data ) => total + data.count , 0 )
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

    console.log(marked) ;

    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-users" input={ usersCount } label={ useTrans("dashboard.widget.users.label") } />
                </div>
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-checkmark" input={ activeUserCount } label={ useTrans("dashboard.widget.users.active") } />
                </div>
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-close" input={ deactiveUserCount } label={ useTrans("dashboard.widget.users.deactive") } />
                </div>
            </div>
            <Page>
                <table className="table ">
                        <thead>
                        <tr>
                            <th >
                                { marked.length ?? 0 }
                                <Checkbox onChange={(e) => reChecKedCheckboxes(e , users?.data) }/>
                            </th>
                            <th >{ useTrans("dashboard.fields.name") }</th>
                            <th >{ useTrans("dashboard.fields.username") }</th>
                            <th >{ useTrans("dashboard.fields.mobile") }</th>
                            <th colSpan={2}></th>
                        </tr>
                        </thead>
                        <tbody >
                        {
                            users == null ?
                                (<tr><td colSpan={5}></td></tr>) :
                                users.data.map((user , key) => (
                                    <tr key={key}>
                                        <td>
                                            <Checkbox
                                                onChange={ e => { setCheckHandler(e , user?.id) } }
                                                checked={ marked.includes(user?.id) ? "1" : "" }
                                            />
                                        </td>
                                        <td>{user?.name}</td>
                                        <td>{user?.username}</td>
                                        <td>{user?.mobile}</td>
                                        <td>edit</td>
                                        <td>delete</td>
                                    </tr>
                                ))
                        }
                        </tbody>
                    </table>
                {/*<Paginator items={users} clousre={ (page) => handlePaginate(page) } />*/}
            </Page>
        </Container>
    ) ;
}

export default React.memo(Users) ;
