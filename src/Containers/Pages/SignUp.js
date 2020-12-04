import React,{useState} from 'react';
import * as Yup from 'yup';
import { Formik, Form as FormikForm } from 'formik';
import { Form,Alert } from 'antd';
import {useMutation} from '@apollo/react-hooks';
import {useHistory,Link} from "react-router-dom";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaInputs from '../../Components/AfyaInputs/AfyaInputs';
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import AfyaBtn from '../../Components/AfyaButton/AfyaBtn';
import {emailRegex,passwordRegex} from "../../Utils/Constants";
import {SIGNUP_MUTATION} from "../../GraphQl/Mutations/SignUp";
import graphQlErrors from "../../Utils/GraphqlErrors";
import "./Pages.css";

const SignUpFormValidation = Yup.object().shape({
    firstName:Yup.string().required(),
    lastName:Yup.string().required(),
    email: Yup.string().required().matches(emailRegex,"Enter a valid email"),
    password:Yup.string().matches(passwordRegex,"Enter a longer password").required()
})

const SignUp = () =>{
    
    const [SignUpMutation,{loading}] = useMutation(SIGNUP_MUTATION);
    const history = useHistory();
     const [signinerror,setError] = useState({message:"",open:false});
    const {message,open} = signinerror;
    
    const handleClose = ()=>{
        setError({message:"",open:false});
    }
    return (
        <AfyaContainer divClass="main-signup">
            {open && (
               <div style={{backgroundColor:"#ad2626",width:"auto",padding:"1rem"}}>
                <Alert 
                onClose={()=>handleClose()}
                closable={true}
                description={message}
                action="error"
            />
            </div> 
            )}
        <Formik 

            initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: ""
            }}

            onSubmit={(values) =>{
                const input ={
                    firstName:values.firstName,
                    lastName:values.lastName,
                    email:values.email,
                    password:values.password
                }

                SignUpMutation({
                    variables:{input}
                }).then((res)=>{
                    history.push("/sign-in")
                }).catch(res=>{
                    setError({message:graphQlErrors(res),open:true})
                })
            }}

            validationSchema={SignUpFormValidation}
        >
        {({setFieldValue,values,errors})=>(
    <>
        <AfyaTextHolder text="SIGN UP "/>
        <FormikForm>
            <AfyaSmallContainer divClass="sign-up">
           <Form.Item label="FirstName" name="firstName" value={values.firstName} onChange={(e)=>{
                setFieldValue("firstName",e.target.value,true)
            }}>
                  <AfyaInputs type="text" divClass={errors.firstName ? "text_errors" : "text_inputs"} />
             </Form.Item>

            <Form.Item label="LastName" name="lastName"  value={values.lastName} onChange={(e)=>{
                setFieldValue("lastName",e.target.value,true)
            }}>
                  <AfyaInputs type="text" divClass={errors.lastName ? "text_errors" : "text_inputs"}/>
             </Form.Item>
            
            <Form.Item label="Email" name="email" value={values.email} onChange={(e)=>{
                setFieldValue("email",e.target.value,true)
            }}>
                  <AfyaInputs type="text" divClass={errors.email ? "text_errors" :"text_inputs"}/>
             </Form.Item>

            <Form.Item label="Password" name="password" value={values.password} onChange={(e)=>{
                setFieldValue("password",e.target.value,true)
            }}>
                  <AfyaInputs type="password" divClass={errors.password ? "text_errors" : "text_inputs"} />
             </Form.Item> 
             <AfyaSmallContainer>
              <Form.Item >
                <AfyaBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"SIGNUP"}/>
             </Form.Item> 
            </AfyaSmallContainer>
            </AfyaSmallContainer>
        </FormikForm>
        
       </>
    )}
    </Formik>
        <AfyaSmallContainer >
                <AfyaTextHolder  text="Already have an account? "/>
                <Link to="/sign-in">
                <AfyaTextHolder text=" Sign in "/>
                </Link>
        </AfyaSmallContainer>
    </AfyaContainer>
    )
};

export default SignUp;

