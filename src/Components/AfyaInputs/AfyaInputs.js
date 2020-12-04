import React from "react";
import { Input } from 'antd';
import "../../Containers/Pages/Pages.css"

const AfyaInputs = ({type,divClass}) =>{
    return (
        <Input type={type} className={divClass}/>
    )
}

export default AfyaInputs;