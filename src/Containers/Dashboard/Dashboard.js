import React from "react";
import {useHistory} from "react-router-dom";
import { Spin } from 'antd';
import Cookies from 'universal-cookie';
import {useQuery} from "@apollo/react-hooks";
import {GET_USER} from "../../GraphQl/Queries/UserDetails";
import Layout from "../Layout/Layout";
import graphQlErrors from "../../Utils/GraphqlErrors";

const Dashboard = ()=>{

    const history = useHistory();
    const cookies = new Cookies();
    const {loading,data,error} = useQuery(GET_USER);
    
    if (!cookies.get("signedin")) {
         history.push("/sign-in");
    }
    return (

        error ? (<div>{graphQlErrors(error)}</div>) : (
            loading ? (<Spin />) : data.usersDetails.map(({firstName,lastName,email,index})=>(
        <Layout key={index} firstname={firstName} lastname={lastName} email={email} />
        ))
            )
        
    )
}

export default Dashboard;