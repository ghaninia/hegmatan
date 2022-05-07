import {Page} from "../../../core/components";
import Container from "../layouts/container";
import Widget from "../../../core/components/widget";
import useTrans from "../../../core/hooks/trans";
import React, {useContext, useEffect, useState} from "react";
import Request from "../../../core/classes/request";
import URL, {searchUrl} from "../../../routes";
import UrlContext from "../../../contexts/url";
import EnumUser from "../../../core/Enums/EnumUser";
import Pagination from "react-js-pagination";
  
const Users = (props) => {

    const staticUsersURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.WIDGET.STATISTIC.USERS) ;
    const usersURI = searchUrl(useContext(UrlContext) , URL.DASHBOARD.USER.INDEX) ;

    const [ activeUserCount , setActiveUsersCount ] = useState(0) ;
    const [ deactiveUserCount , setDeactiveUsersCount ] = useState(0) ;
    const [ usersCount , setUsersCount ] = useState(0) ;

    const [ users , setUsers ] = useState(null) ;

    const [userFilters , setUserFilters ] = useState({}) ;

    const fetchUsers = async () => {
        await (new Request(usersURI)).auth().get().then(function(response){
            setUsers(response.data);
        })
    };

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
        fetchUsers() ;

    } , []) ;

    console.log( users ) ;

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
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>{ useTrans("dashboard.fields.primaryKeyID") }</th>
                            <th>{ useTrans("dashboard.fields.name") }</th>
                            <th>{ useTrans("dashboard.fields.username") }</th>
                            <th>{ useTrans("dashboard.fields.mobile") }</th>
                            <th>{ useTrans("dashboard.fields.email") }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users == null ? "loading ..." : users.data.map((user , key) => {
                                return (
                                    <tr key={key}>
                                        <td>{user?.id}</td>
                                        <td>{user?.name}</td>
                                        <td>{user?.username}</td>
                                        <td>{user?.mobile}</td>
                                        <td>{user?.email}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <Pagination
                    activePage={users?.current_page ? users?.current_page : 0}
                    itemsCountPerPage={users?.per_page ? users?.per_page : 0 }
                    totalItemsCount={users?.total ? users?.total : 0}
                    onChange={(pageNumber) => {
                        fetchUsers() 
                    }}
                    pageRangeDisplayed={8}
                    itemClass="page-item"
                    linkClass="page-link"
                    firstPageText="First Page"
                    lastPageText="Last Lage"
                />
            </Page>
        </Container>
    ) ;

}

export default Users ;
