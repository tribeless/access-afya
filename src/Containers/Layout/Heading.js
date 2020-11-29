import React from "react";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";

const Heading = ()=>{

    return (
        <AfyaContainer divClass="heading-section">
        <AfyaTextHolder 
            text="Analytics"
            divClass="heading-sub"
        />
        </AfyaContainer>
    )
}

export default Heading;