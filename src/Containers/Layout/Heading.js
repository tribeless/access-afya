import React from "react";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";

const Heading = ()=>{

    return (
        <AfyaContainer
            align="center"
            justify="center"
            alignment="row"
            position="absolute"
            left="11vw"
            width="135px"
            margin=".7rem"
            top="100px"
            color="#dfe6e9"
            padding="1rem"
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