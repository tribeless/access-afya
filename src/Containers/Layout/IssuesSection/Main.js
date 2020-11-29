import React from "react";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import Issues from "./Issues";
import Monitoring from "./Monitoring";

const Main = ()=>{

    return (

        <AfyaContainer divClass="main-sec">
            <Issues />
            <Monitoring />
        </AfyaContainer>
    )
}

export default Main;