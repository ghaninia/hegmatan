import {Page} from "../../../core/components";
import Container from "../layouts/container";
import Widget from "../../../core/components/widget";
import useTrans from "../../../core/hooks/trans";
import React, {useContext, useEffect, useState} from "react";
import Request from "../../../core/classes/request";
import URL, {searchUrl} from "../../../routes";
import UrlContext from "../../../contexts/url";
import EnumUser from "../../../core/Enums/EnumUser";

const Users = () => {

    const staticUsers = searchUrl(useContext(UrlContext) , URL.DASHBOARD.WIDGET.STATISTIC.USERS) ;
    const [ activeUserCount , setActiveUsersCount ] = useState(0) ;
    const [ deactiveUserCount , setDeactiveUsersCount ] = useState(0) ;
    const [ usersCount , setUsersCount ] = useState(0) ;

    useEffect(async () => {

        await (new Request(staticUsers)).auth().get().then(function(response){

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

    } , []) ;


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

            </Page>
        </Container>
    ) ;

}

export default Users ;
