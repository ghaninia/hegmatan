import {Button, Form, FormGroup, Input, Page} from "../../../core/components";
import useTrans from "../../../core/hooks/trans";
import {useForm} from "react-hook-form";
import Container from "../layouts/container";

const Password = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <Container>
            <Page
                hasBack={true}
                title={ useTrans("dashboard.pages.profile.password.title") }
                description={ useTrans("dashboard.pages.profile.password.description") }>

                <Form>
                    <div className="form-row">
                        <div className="col-12">
                            <FormGroup label={ useTrans("dashboard.fields.current_password") }>
                                <Input  { ...register("name" , { required: true }) }/>
                            </FormGroup>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-lg-6">
                            <FormGroup label={ useTrans("dashboard.fields.password") }>
                                <Input  { ...register("name" , { required: true }) }/>
                            </FormGroup>
                        </div>
                        <div className="col-lg-6">
                            <FormGroup label={ useTrans("dashboard.fields.password_confirmation") }>
                                <Input  { ...register("username" , { required: true }) }/>
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


export default Password ;