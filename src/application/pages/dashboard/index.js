import Container from "./layouts/container";
import React, {useContext, useEffect} from "react";
import Widget from "../../core/components/widget" ;
import useTrans from "../../core/hooks/trans";
import Request from "../../core/classes/request";
import URL, {searchUrl} from "../../routes";
import UrlContext from "../../contexts/url";

const Dashboard = (props) => {


    const staticPosts = searchUrl(useContext(UrlContext) , URL.DASHBOARD.WIDGET.STATISTIC.POSTS) ;

    useEffect(() => {

        (new Request(staticPosts)).auth().get().then(function(response){
            console.log(response) ;
        });

    } , [staticPosts])

    return (
        <Container>
            <div className="row">
                <div className="col-md-4">
                    <div className="item">
                        <Widget.Counter input={ 50 } label={ useTrans("dashboard.widget.posts") } />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Dashboard ;