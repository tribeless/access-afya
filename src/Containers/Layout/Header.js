import React from "react";
import {MdAdd} from "react-icons/md";
import { Progress } from 'antd';
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import mamai from "../../Assets/Images/mamai.jpg";
import "../../Components/Styles/AfyaStyles.css";

const Header = ()=>{

    return (
        <AfyaContainer
            justify="space-between"
            align="center"
            alignment="row"
            padding="1rem"
            position="relative"
            width="90vw"
            left="7.7vw"
        >

            <AfyaSmallContainer
                justify="center"
                align="center"
                alignment="row"
            >
                <AfyaTextHolder 
                    text="Add Assessment"
                    size=".85rem"
                />

                <MdAdd />
            </AfyaSmallContainer>
        <AfyaSmallContainer
            justify="space-evenly"
            align="center"
            alignment="row" 
            outline="none"
        >
            <AfyaSmallContainer
                justify="center"
                align="flex-start"
                alignment="column"
                outline="none"
                margin="2rem"
            >
                <Progress 
                    percent={40} 
                    status="active" 
                    showInfo={false} 
                    strokeColor="#6c5ce7"
                    trailColor="#dfe6e9"
                    strokeWidth={5}
                    strokeLinecap="round"
                    className="progressBar"
                /> 
                <AfyaTextHolder 
                    text="24k/24k patients seen"
                    size=".7rem"
                    color="#b2bec3"
                    top=".3rem"
                />
            </AfyaSmallContainer>

            <AfyaSmallContainer
                justify="center"
                align="flex-start"
                alignment="column"
                outline="none"
            >
                 <AfyaTextHolder 
                    text="Sandra Mamai"
                    size=".85rem"
                />
                 <AfyaTextHolder 
                    text="smamai@accessafya.com"
                    size=".7rem"
                    color="#8395a7"
                />
            </AfyaSmallContainer>

            {/* <AfyaSmallContainer outline="none"> */}
                <img src={mamai} alt="mamai" className="profileImage" />
            {/* </AfyaSmallContainer> */}
        </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Header;