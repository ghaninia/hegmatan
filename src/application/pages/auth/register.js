import {Button, Form, FormGroup, Input} from "../../core/components";
import Layout from "./layouts" ;
import {useForm} from "react-hook-form";
import setTitle from "../../core/classes/documentor";
import useTrans from "../../core/hooks/trans";
import {Link, Navigate} from "react-router-dom";
import {KEYS as KEYS_ROUTE, KEYS} from "../../routes/web";
import Request from "../../core/classes/request";
import Notification from "../../core/classes/notification";
import storage from "../../core/classes/storage";
import Error from "../../core/classes/error";
import URL, {searchUrl} from "../../routes";
import UrlContext from "../../contexts/url";
import {useContext, useState} from "react";

export default function Register(props){

    setTitle( useTrans("dashboard.browser.pages.register.title") ) ;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [redirect , redirectChange ] = useState() ;

    const [isLoading , setIsLoading] = useState(false) ;

    const registerUrl = searchUrl(useContext(UrlContext) , URL.REGISTER) ;

    const onSubmit = (data) => {

        setIsLoading(true  ) ;

        ( new Request(registerUrl , data ) )
            .post()
            .then(function (response){
                const { msg } = response.data ;

                Notification.success(msg , function (){
                    setIsLoading(false) ;
                    redirectChange( KEYS_ROUTE.HOME ) ;
                });

            })
            .catch(response => {
                (new Error()).notification(response , function (){
                    setIsLoading(false);
                });
            })

    };

    return (
        <Layout>
            { redirect ? <Navigate to={redirect}  /> : "" }
            <Form onSubmit={handleSubmit(onSubmit)} >
                <FormGroup label={ useTrans("dashboard.fields.name") } icon="lni lni-users">
                    <Input  { ...register("name" ) }/>
                </FormGroup>
                <FormGroup label={ useTrans("dashboard.fields.email") } icon="lni lni-envelope">
                    <Input type="email"  { ...register("email" ) }/>
                </FormGroup>
                <FormGroup label={ useTrans("dashboard.fields.password") } icon="lni lni-lock-alt">
                    <Input type="password"  { ...register("password" ) }/>
                </FormGroup>
                <Button isLoading={isLoading}>{ useTrans("dashboard.register.submit")}</Button>
            </Form>
            <div className="callout">
                <span>
                    {useTrans("dashboard.register.areYouMember")}
                    <Link to={ KEYS.AUTH.LOGIN }>{ useTrans("dashboard.register.singIn") }</Link>
                </span>
            </div>
        </Layout>
    );
}