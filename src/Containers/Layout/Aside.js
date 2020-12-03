import React,{useState} from "react";
import {RiFolderLine,RiMessage2Line} from "react-icons/ri";
import {GrMenu,GrClose} from "react-icons/gr"
import {MdShowChart} from "react-icons/md";
import {VscSettings} from "react-icons/vsc";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import "../../Components/Styles/AfyaStyles.css";

const Aside = ()=>{
    const [open,setOpen] = useState(false);
    return (
        
            <AfyaContainer divClass="aside-main-container-one">
                {open ? ( <GrClose className="toggle-close toggle" onClick={()=>{setOpen(false)}} />) 
                :(<GrMenu className="toggle-open toggle" onClick={()=>{setOpen(true)}} />)}
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