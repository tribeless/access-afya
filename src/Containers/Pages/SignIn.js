import React,{useState} from 'react';
import {Formik,Form as FormikForm} from 'formik';
import * as Yup from 'yup';
import {useMutation} from "@apollo/react-hooks";
import {useHistory,Link} from 'react-router-dom';
import { Form,Alert } from 'antd';
import {emailRegex,passwordRegex} from "../../Utils/Constants";
import {SIGNIN_MUTATION} from "../../GraphQl/Mutations/Sessions";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaInputs from '../../Components/AfyaInputs/AfyaInputs';
import AfyaTextHolder from '../../Components/TextBoxes/AfyaTextHolder';
import AfyaBtn from '../../Components/AfyaButton/AfyaBtn';
import graphQlErrors from "../../Utils/GraphqlErrors";
import "./Pages.css";


const SignInFormValidation = Yup.object().shape({
    email:Yup.string().matches(emailRegex,"please enter valid email").required(),
    password:Yup.string().matches(passwordRegex,"please enter valid password").required()
})
const SignInPage = ()=>{
    const [SignInMutation,{loading}] = useMutation(SIGNIN_MUTATION);
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
                        email:"",
                        password:""
                    }}

                    onSubmit={(values)=>{
                        SignInMutation({
                            variables:{
                                email:values.email,
                                password:values.password
                            }
                        }).then((res)=>{
                            document.cookie = 'signedin=true' ;
                            history.push("/")
                        })
                        .catch((res)=>{ 
                            setError({message:graphQlErrors(res),open:true})
                        })
                    }}

                    validationSchema={SignInFormValidation}
                >
            {({setFieldValue,values,errors})=>(
                <>
                 <AfyaTextHolder text="SIGN IN "/>
                <FormikForm>
                    <AfyaSmallContainer divClass="sign-up">
                    <Form.Item label="Email" name="email" value={values.email} onChange={(e)=>{
                        setFieldValue("email",e.target.value,true)
                    }}>
                        <AfyaInputs type="text" divClass={errors.email ? "text_errors" : "text_inputs"}/>
                    </Form.Item>

                    <Form.Item label="Password" name="password" value={values.password} onChange={(e)=>{
                        setFieldValue("password",e.target.value,true)
                    }}>
                        <AfyaInputs type="password" divClass={errors.password ? "text_errors" : "text_inputs"} />
                    </Form.Item> 
                    <AfyaSmallContainer>
                        <Form.Item >
                            <AfyaBtn type="primary" htmlType="submit" disabled={loading} text={loading ? "Loading...":"SIGNIN"}/>
                        </Form.Item> 
                        </AfyaSmallContainer>
                   </AfyaSmallContainer>
                   
                </FormikForm>
                </>
            )}
                </Formik>
                <AfyaSmallContainer >
                        <AfyaTextHolder text="Don't have an account? "/>
                        <Link to="/sign-up">
                        <AfyaTextHolder text=" Sign up "/>
                            </Link>
                    </AfyaSmallContainer>
            </AfyaContainer>

    )
}

export default React.memo(SignInPage);