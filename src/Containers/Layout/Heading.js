import React from "react";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";

const Heading = ()=>{

    return (
        <AfyaContainer
            align="center"
            justify="center"
            alignment="row"
            position="relative"
            left="10vw"
            width="135px"
            margin="-90vh .7rem .7rem .7rem"
            color="#dfe6e9"
        >
        <AfyaTextHolder 
            text="Analytics"
            size="1.9rem"
            color="#000000"
        />
        </AfyaContainer>
    )
}

export default Heading;