import {Button, Form, FormGroup, Input, Textarea ,Checkbox, Page,Confirm} from "../../../core/components";
import {KEYS , ClientRoute} from "../../../routes/web";
import Request from "../../../core/classes/request";
import URL, {searchUrl} from "../../../routes";
import UrlContext from "../../../contexts/url";
import Container from "../layouts/container";
import React from "react" ;
import { useParams } from "react-router-dom";
import useTrans from "../../../core/hooks/trans";

const Show = (props) => {

    const [user , setUser] = React.useState({}) ;
    let staticUserShowURI = searchUrl(React.useContext(UrlContext) , URL.DASHBOARD.USER.SHOW) ;
    staticUserShowURI = ClientRoute(staticUserShowURI , useParams() );

    React.useEffect(() => {
        fetchUser();
    } , []) ;

    /**
     * @returns {Promise<void>}
     */
    const fetchUser = async () => {
        await (new Request(staticUserShowURI)).auth().get().then(function(response){
            setUser(response.data?.data);
        })
    };

    const translations = {
        active : useTrans("dashboard.fields.active") ,
        deactive : useTrans("dashboard.fields.deactive") ,
    };


    console.log(user) ;

    return (
        <Container>
            <div className="row">
                <div className="col-12">
                    <Page
                        hasBack={true}
                        title={ user?.name }
                        description={
                            <React.Fragment>
                                <div className={ "circle " + (user.status ? "active" : "deactive") }></div>
                                {user.status ? translations.active : translations.deactive }
                            </React.Fragment>
                        }>
                        <Form>
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <FormGroup label={ useTrans("dashboard.fields.name") }>
                                        <Input value={ user.name } />
                                    </FormGroup>
                                </div>
                                <div className="col-lg-6">
                                    <FormGroup label={ useTrans("dashboard.fields.username") }>
                                        <Input value={ user.username } />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-6">
                                    <FormGroup label={ useTrans("dashboard.fields.email") }>
                                        <Input value={ user.email } />
                                    </FormGroup>
                                </div>
                                <div className="col-lg-6">
                                    <FormGroup label={ useTrans("dashboard.fields.mobile") }>
                                        <Input value={ user.mobile } />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <FormGroup label={ useTrans("dashboard.fields.bio") }>
                                        <Textarea>{ user.bio }</Textarea>
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12">
                                    <div className="form-group-sub">
                                        <div className="label">لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است</div>
                                        <label className="switch">
                                            <input type="checkbox" checked="" />
                                            <span className="slider round "></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <Button >
                                { useTrans("dashboard.btn.update")}
                            </Button>
                        </Form>
                    </Page>
                </div>
            </div>
        </Container>
    );
}

export default Show;