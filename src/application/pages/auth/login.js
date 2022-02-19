import {useForm} from "react-hook-form";
import {Button, Form, FormGroup, Input} from "../../core/components";
import useTrans from "../../core/hooks/trans";
import Layout from "./layouts" ;
import {useState} from "react";

export default function Login(props) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [isProgress , setIsProgress] = useState(false) ;

    const onSubmit = (data) => {
        setIsProgress(prev => true ) ;
    }

    return (
        <Layout>
            <Form onSubmit={handleSubmit(onSubmit)} >
                <FormGroup label={ useTrans("dashboard.fields.username") } icon="lni lni-user">
                    <Input { ...register("username" , { required: true }) }/>
                </FormGroup>
                <FormGroup label={ useTrans("dashboard.fields.password") } >
                    <div className="prepend h3">
                        <i className="lni lni-lock-alt"></i>
                    </div>
                    <Input { ...register("password" , { required: true }) }/>
                </FormGroup>
                <Button isProgress={ isProgress }>
                    { useTrans("dashboard.login.submit")}
                </Button>
            </Form>
        </Layout>
    );
}
