import React from "react";
import {RiFolderLine,RiMessage2Line} from "react-icons/ri";
import {MdShowChart} from "react-icons/md";
import {VscSettings} from "react-icons/vsc";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import "../../Components/Styles/AfyaStyles.css";

const Aside = ()=>{

    return (
        <AfyaContainer divClass="aside-main-container-one">
            <AfyaSmallContainer divClass="aside-small-container">
                <RiFolderLine className="iconStyles" />
                <MdShowChart  className="iconStyles active" />
                <RiMessage2Line className="iconStyles" />
                <VscSettings className="iconStyles" />
            </AfyaSmallContainer>
        
        </AfyaContainer>
    )
}

export default Aside;