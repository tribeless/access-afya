import React from "react";
import {MdAdd} from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import {useMutation} from "@apollo/react-hooks";
import {useHistory} from "react-router-dom";
import { Progress } from 'antd';
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import mamai from "../../Assets/Images/mamai.jpg";
import {SIGN_OUT} from "../../GraphQl/Mutations/Sessions";
import Greeting from "../../Utils/Greeting";
import deleteCookie from "../../Utils/deleteCookie";
import "../../Components/Styles/AfyaStyles.css";

const Header = ({firstname,lastname,email})=>{
    const [LogoutMutation] = useMutation(SIGN_OUT);
    const history = useHistory();

    const logout = ()=>{
        LogoutMutation({})
                .then((res)=>{
                    if(res){
                        deleteCookie("signedin");
                        history.push("/sign-in");
                    }
                    
                })
                .catch((err)=>console.log(err));
    }
    return (
        <AfyaContainer divClass="main-container-one">

            <AfyaSmallContainer divClass="small-container-one">
                <AfyaTextHolder 
                    text="Add Assessment"
                    divClass="main-text-one"
                />

                <MdAdd />
            </AfyaSmallContainer>
            <Greeting  name={firstname}/>
        <AfyaSmallContainer divClass="small-container-three">
            <AfyaSmallContainer divClass="small-container-two">
                <Progress 
                    percent={40} 
                    status="active" 
                    showInfo={false} 
                    strokeColor="#3426a4"
                    trailColor="#dfe6e9"
                    strokeWidth={4}
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
                    text={firstname + " " + lastname}
                    divClass="main-text-one"
                />
                 <AfyaTextHolder 
                    text={email}
                    divClass="main-text-two"
                />
            </AfyaSmallContainer>
                <img src={mamai} alt="mamai" className="profileImage" />
                <RiLogoutBoxRLine style={{fontSize:"1.2rem",margin:".4rem"}}  
                    onClick={()=>logout()} 
                />
                
        </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Header;