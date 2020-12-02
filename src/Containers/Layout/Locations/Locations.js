import React from  "react";
import {MdMoreVert} from "react-icons/md";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../Components/TextBoxes/AfyaTextHolder";
import {data} from "./location.data";
import "../../../Components/Styles/AfyaStyles.css";


const Locations = ()=>{

    return (
        <AfyaContainer divClass="local-main-sect-one">
            <AfyaTextHolder text="VISITS" divClass="main-local-text" />
                {
                    data.map(({location,number,key})=>(
                        <AfyaSmallContainer key={key} divClass= {key===1 ? "local-sub-one active" : "local-sub-one" } >
                            <AfyaSmallContainer divClass={key===1 ? "local-sub-two active" : "local-sub-two"}>
                            <AfyaTextHolder text={number} divClass={key===1 ? "local-main-text active" : "local-main-text"}  />
                            <AfyaTextHolder text={location} divClass={key===1 ? "local-sub-text active" : "local-sub-text"}  />
                            </AfyaSmallContainer>
                            <MdMoreVert className={key===1 ? "visitsIcon active" : "visitsIcon"}  />
                        </AfyaSmallContainer>
                    ))
                }
        </AfyaContainer>
    )
}

export default Locations;