import {Button, Form, FormGroup, Input} from "../../core/components";

import Request from "../../core/classes/request";
import useTrans from "../../core/hooks/trans";
import UrlContext from "../../contexts/url";
import URL, {searchUrl} from "../../routes";
import {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import Layout from "./layouts" ;
import Error from "../../core/classes/error";
import {Link, Navigate} from "react-router-dom";
import {KEYS as KEYS_ROUTE } from "../../routes/web";

import Notification from "../../core/classes/notification" ;
import setTitle from "../../core/classes/documentor";
import Auth from "../../core/classes/auth";

export default function Login(props) {

    setTitle( useTrans("dashboard.browser.pages.login.title") )


    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isLoading , setIsLoading] = useState(false) ;

    const [redirect , redirectChange ] = useState() ;

    const loginURL = searchUrl(useContext(UrlContext) , URL.LOGIN) ;

    const onSubmit = (data) => {

        setIsLoading(true  ) ;

        ( new Request(loginURL , data ) )
            .post()
            .then(function (response){

                const {token , data : user , msg } = response.data ;

                Notification.success(msg , function(){
                    setIsLoading( false ) ;

                    Auth.setToken(token) ;
                    Auth.setUser(user) ;

                    redirectChange( KEYS_ROUTE.DASHBOARD.MAIN ) ;
                });

            })
            .catch(response => {
                (new Error()).notification(response , function (){
                    setIsLoading(false);
                });
            })
    }

    return (
        <Layout>
            { redirect ? <Navigate to={redirect}  /> : "" }
            <Form onSubmit={handleSubmit(onSubmit)} >
                <FormGroup label={ useTrans("dashboard.fields.email") } icon="lni lni-users">
                    <Input { ...register("email" , { required: true }) }/>
                </FormGroup>
                <FormGroup label={ useTrans("dashboard.fields.password") } >
                    <Link to={ KEYS_ROUTE.AUTH.FORGET }>{ useTrans("dashboard.login.forget") }</Link>
                    <div className="prepend h3">
                        <i className="lni lni-lock-alt"></i>
                    </div>
                    <Input type="password" { ...register("password" , { required: true }) }/>
                </FormGroup>
                <Button isLoading={ isLoading }>
                    { useTrans("dashboard.login.submit")}
                </Button>
            </Form>
            <div className="callout">
                <span>
                    { useTrans("dashboard.login.notMember")}
                    <Link to={ KEYS_ROUTE.AUTH.REGISTER }>
                        { useTrans("dashboard.login.createNewAccount") }
                    </Link>
                </span>
            </div>
        </Layout>
    );
}
