import Container from "./layouts/container";
import React, {useContext, useEffect, useState} from "react";
import Widget from "../../core/components/widget" ;
import useTrans from "../../core/hooks/trans";
import Request from "../../core/classes/request";
import URL, {searchUrl} from "../../routes";
import UrlContext from "../../contexts/url";
import EnumPost from "../../core/Enums/EnumPost";
import Auth from "../../core/classes/auth";

const Dashboard = (props) => {

    const staticPosts = searchUrl(useContext(UrlContext) , URL.DASHBOARD.WIDGET.STATISTIC.POSTS) ;

    const [ postCount , setPostCount ] = useState(0) ;
    const [ pageCount , setPageCount ] = useState(0) ;
    const [ productCount , setProductCount ] = useState(0) ;

    useEffect(async () => {

        await (new Request(staticPosts)).auth().get().then(function(response){

            setPostCount(
                response.data.filter( (data) => data.type === EnumPost.TYPE_POST ).reduce( (total , data ) => total + data.count , 0 )
            );

            setPageCount(
                response.data.filter( (data) => data.type === EnumPost.TYPE_PAGE ).reduce( (total , data ) => total + data.count , 0 )
            )

            setProductCount(
                response.data.filter( (data) => data.type === EnumPost.TYPE_PRODUCT ).reduce( (total , data ) => total + data.count , 0 )
            )

        });

    } , [])

    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-write" input={ postCount } label={ useTrans("dashboard.widget.posts") } />
                </div>
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-quotation" input={ pageCount } label={ useTrans("dashboard.widget.pages") } />
                </div>
                <div className="col-md-4">
                    <Widget.Counter icon="lni lni-certificate" input={ productCount } label={ useTrans("dashboard.widget.products") } />
                </div>
            </div>
        </Container>
    );
}

export default Dashboard ;