import Password from "./password";

import useTrans from "../../../core/hooks/trans";
import {Button, Form, FormGroup, Input, Textarea , Page } from "../../../core/components";
import {useForm} from "react-hook-form";
import Container from "../layouts/container";

const Profile = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <Container>
            <Page
                hasBack={true}
                title={ useTrans("dashboard.pages.profile.index.title") }
                description={ useTrans("dashboard.pages.profile.index.description") }>
                <Form>
                    <div className="form-row">
                        <div className="col-lg-6">
                            <FormGroup label={ useTrans("dashboard.fields.name") }>
                                <Input { ...register("name" , { required: true }) }/>
                            </FormGroup>
                        </div>
                        <div className="col-lg-6">
                            <FormGroup label={ useTrans("dashboard.fields.username") }>
                                <Input { ...register("username" , { required: true }) }/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-6">
                            <FormGroup label={ useTrans("dashboard.fields.email") }>
                                <Input { ...register("email" , { required: true }) }/>
                            </FormGroup>
                        </div>
                        <div className="col-lg-6">
                            <FormGroup label={ useTrans("dashboard.fields.mobile") }>
                                <Input { ...register("mobile" , { required: true }) }/>
                            </FormGroup>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg-12">
                            <FormGroup label={ useTrans("dashboard.fields.bio") }>
                                <Textarea { ...register("bio" , { required: true }) }/>
                            </FormGroup>
                        </div>
                    </div>
                    <Button >
                        { useTrans("dashboard.btn.update")}
                    </Button>
                </Form>
            </Page>
        </Container>
    );
}

export default Profile ;

export {
    Password
} ;