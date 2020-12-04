import React from "react";
import {Button} from 'antd';
import AfyaTextHolder from '../TextBoxes/AfyaTextHolder';

const AfyaBtn = ({disabled,type,htmlType,text,nwidth})=>{

    const styles = {
        height: "31px",
        width:nwidth || "75px",
        borderRadius: "10px",
        backgroundColor:"#F48C2C",
        outlineStyle:"none",
        border:"none",
        margin:"1rem"
    }
    return (
        <Button style={styles} type={type} disabled={disabled} htmlType={htmlType}>
            <AfyaTextHolder  text={text} size="12px" disabled={disabled}/>
        </Button>
    )
}
export default AfyaBtn;