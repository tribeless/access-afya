import React from "react";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import Issues from "./Issues";
import Monitoring from "./Monitoring";
import MainChart from "./Charts/Main";
import TableData from "./Table/Table";

const Main = ()=>{

    return (

        <AfyaContainer divClass="main-sec">
            <Issues />
            <Monitoring />
            <MainChart />
            <TableData />
        </AfyaContainer>
    )
}

export default Main;