import React from  "react";
import {MdMoreVert} from "react-icons/md";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import "../../Components/Styles/AfyaStyles.css";


const Locations = ()=>{

    return (
        <AfyaContainer divClass="local-main-sect-one">
            <AfyaTextHolder text="VISITS" divClass="main-local-text" />
            <AfyaSmallContainer divClass="local-sub-one active">
                <AfyaSmallContainer divClass="local-sub-two active">
                <AfyaTextHolder text="7" divClass="local-main-text active" />
                <AfyaTextHolder text="Kiambiu" divClass="local-sub-text active" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon active" />
            </AfyaSmallContainer>
            

            <AfyaSmallContainer divClass="local-sub-one">
                <AfyaSmallContainer divClass="local-sub-two">
                <AfyaTextHolder text="12" divClass="local-main-text" />
                <AfyaTextHolder text="Mukuru Kwa Reuben " divClass="local-sub-text" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


            <AfyaSmallContainer divClass="local-sub-one">
                <AfyaSmallContainer divClass="local-sub-two">
                <AfyaTextHolder text="26" divClass="local-main-text" />
                <AfyaTextHolder text="Mukuru Kwa Njenga" divClass="local-sub-text" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


             <AfyaSmallContainer divClass="local-sub-one">
                <AfyaSmallContainer divClass="local-sub-two">
                <AfyaTextHolder text="38" divClass="local-main-text" />
                <AfyaTextHolder text="Baba Dogo" divClass="local-sub-text" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


            <AfyaSmallContainer divClass="local-sub-one">
                <AfyaSmallContainer divClass="local-sub-two">
                <AfyaTextHolder text="41" divClass="local-main-text" />
                <AfyaTextHolder text="Kosovo" divClass="local-sub-text" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


            <AfyaSmallContainer divClass="local-sub-one">
                <AfyaSmallContainer divClass="local-sub-two">
                <AfyaTextHolder text="24" divClass="local-main-text" />
                <AfyaTextHolder text="Mukuru Kayaba" divClass="local-sub-text" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Locations;