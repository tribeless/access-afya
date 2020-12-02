import React from "react";
import {MdMoreVert} from "react-icons/md";
import AfyaContainer from "../../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../../Components/TextBoxes/AfyaTextHolder";
import {data} from "./issues.data";
import "../../../../Components/Styles/AfyaStyles.css";

const Issues = () =>{

    return (
        <AfyaContainer divClass="issues-main-container">
        <AfyaTextHolder
            text="KEY ISSUES"
            divClass="issues-main-text"
        />
        <AfyaSmallContainer divClass="issues_sub-container">
            {
                data.map(({key,issue,location})=>(
                    <AfyaSmallContainer key={key} divClass={key===2 ? "issues_sub-container-two active" : "issues_sub-container-two"}>
                        <AfyaSmallContainer divClass="issues_sub-container-three">
                            <AfyaTextHolder
                                text={issue}
                                divClass="issues-text-one"
                            />
                            <AfyaTextHolder
                                text={location}
                                divClass="issues-text-two"
                            />
                        </AfyaSmallContainer>
                        <MdMoreVert className="visitsIcon" />
                    </AfyaSmallContainer>
                ))
            }
        </AfyaSmallContainer> 
    </AfyaContainer>
    )
}

export default Issues;
