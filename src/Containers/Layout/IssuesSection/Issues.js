import React from "react";
import {MdMoreVert} from "react-icons/md";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../Components/TextBoxes/AfyaTextHolder";
import "../../../Components/Styles/AfyaStyles.css";

const Issues = () =>{

    return (
        <AfyaContainer divClass="issues-main-container">
        <AfyaTextHolder
            text="KEY ISSUES"
            divClass="issues-main-text"
        />
        <AfyaSmallContainer divClass="issues_sub-container">

        <AfyaSmallContainer divClass="issues_sub-container-two">
            <AfyaSmallContainer divClass="issues_sub-container-three">
                <AfyaTextHolder
                    text="Wrong Prescription"
                    divClass="issues-text-one"
                />
                <AfyaTextHolder
                    text="Kosovo"
                    divClass="issues-text-two"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>

        <AfyaSmallContainer divClass="issues_sub-container-two active">
            <AfyaSmallContainer divClass="issues_sub-container-three" >
                <AfyaTextHolder
                    text="Opened Late"
                    divClass="issues-text-one"
                />
                <AfyaTextHolder
                    text="Kiambiu"
                    divClass="issues-text-two"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>

        <AfyaSmallContainer divClass="issues_sub-container-two" >
            < AfyaSmallContainer divClass = "issues_sub-container-three">
                <AfyaTextHolder
                    text="Bad Receipts"
                    divClass="issues-text-one"
                />
                <AfyaTextHolder
                    text="New York"
                    divClass="issues-text-two"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>

        <AfyaSmallContainer divClass="issues_sub-container-two">
            <AfyaSmallContainer divClass="issues_sub-container-three">
                <AfyaTextHolder
                    text="Late Check in"
                    divClass="issues-text-one"
                />
                <AfyaTextHolder
                    text="Mathare"
                    divClass="issues-text-two"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>

        <AfyaSmallContainer divClass="issues_sub-container-two">
            <AfyaSmallContainer divClass="issues_sub-container-three">
                <AfyaTextHolder
                    text="Delay in Lab"
                    divClass="issues-text-one"
                />
                <AfyaTextHolder
                    text="Kiambiu"
                    divClass="issues-text-two"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>

        <AfyaSmallContainer divClass="issues_sub-container-two">
            <AfyaSmallContainer divClass="issues_sub-container-three">
                <AfyaTextHolder
                    text="Careless waste dis... "
                    divClass="issues-text-one"
                />
                <AfyaTextHolder
                    text="Kiambiu"
                    divClass="issues-text-two"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>

        </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Issues;
