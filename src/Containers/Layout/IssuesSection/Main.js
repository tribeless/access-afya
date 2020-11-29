import React from "react";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import Issues from "./Issues";
import Monitoring from "./Monitoring";

const Main = ()=>{

    return (

        <AfyaContainer
            alignment="column"
            justify="flex-start"
            align="flex-start"
            color="#dfe6e9"
            width="50vw"
            height="100vh"
            position="relative"
            left="550px"
            top="72px"
        >
            <Issues />
            <Monitoring />
        </AfyaContainer>
    )
}

export default Main;