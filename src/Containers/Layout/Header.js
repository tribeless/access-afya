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
        <AfyaContainer divClass="main-container-one">

            <AfyaSmallContainer divClass="small-container-one">
                <AfyaTextHolder 
                    text="Add Assessment"
                    divClass="main-text-one"
                />

                <MdAdd />
            </AfyaSmallContainer>
        <AfyaSmallContainer divClass="small-container-three">
            <AfyaSmallContainer divClass="small-container-two">
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
                    divClass="main-text-three"
                />
            </AfyaSmallContainer>

            <AfyaSmallContainer
                divClass="small-container-four"
            >
                 <AfyaTextHolder 
                    text="Sandra Mamai"
                    divClass="main-text-one"
                />
                 <AfyaTextHolder 
                    text="smamai@accessafya.com"
                    divClass="main-text-two"
                />
            </AfyaSmallContainer>
                <img src={mamai} alt="mamai" className="profileImage" />

        </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Header;