import React from "react" ;
import Layout from "./layouts" ;
import { useForm } from "react-hook-form";
import { Form , Input , Button , FormGroup } from "../../core/components" ;

import {useGetRoute , LOGIN} from "../../routes/api" ;

import useTrans from  "../../core/hooks/trans" ;

export default function Login(props){ 

  const { register, handleSubmit , formState: { errors } } = useForm();

  return (
    <Layout>
      <Form>
        <FormGroup label={ useTrans("dashboard.fields.username") }>
            <div className="prepend h3">
              <i className="lni lni-user"></i>
            </div>
            <Input { ...register("username" , { required: true }) } />
        </FormGroup>
        <FormGroup>
            <div className="prepend h3">
              <i className="lni lni-lock-alt"></i>
            </div>
            <Input { ...register("username" , { required: true }) } />
        </FormGroup>
        <Button />
      </Form>
    </Layout>
  );

}