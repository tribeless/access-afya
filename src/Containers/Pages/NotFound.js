import React from "react";
import {Link} from 'react-router-dom'
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import AfyaBtn from "../../Components/AfyaButton/AfyaBtn";

const NotFound = () =>{
    return (
        <AfyaContainer>
            <AfyaTextHolder text="Uooh,the page you are looking for is not available. Please contact us if the problem persists." />
            <Link to="/">
                <AfyaBtn nwidth="130px" htmlType="button" type="button" text="Go to Dashboard"/>
            </Link>
        </AfyaContainer>
    )
}

export default NotFound;