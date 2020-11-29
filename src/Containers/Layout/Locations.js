import React from  "react";
import {MdMoreVert} from "react-icons/md";
import AfyaContainer from "../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../Components/TextBoxes/AfyaTextHolder";
import "../../Components/Styles/AfyaStyles.css";


const Locations = ()=>{

    return (
        <AfyaContainer
            display="inline-flex"
            align="flex-start"
            justify="center"
            position="absolute"
            alignment="column"
            left="13vw"
            width="250px"
            top="200px"
            height="100vh"
        >
            <AfyaTextHolder text="VISITS" color="#8492a0" size=".7rem" margin="-18rem 0 0 0" />
            <AfyaSmallContainer
                alignment="row"
                align="center"
                justify="space-between"
                color="#3426a4"
                width="230px"
                radius="5px"
                outline="none"
                margin="20px 0 0 0"
            >
                <AfyaSmallContainer
                    alignment="row"
                    align="center"
                    justify="space-evenly"
                    color="#3426a4"
                    outline="none"
                >
                <AfyaTextHolder text="7" size=".85rem" color="#ffffff" margin="0 1rem 0 0" />
                <AfyaTextHolder text="Kiambiu" size=".85rem" color="#ffffff" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon active" />
            </AfyaSmallContainer>
            

            <AfyaSmallContainer
                alignment="row"
                align="center"
                justify="space-between"
                width="230px"
                radius="5px"
                margin="20px 0 0 0 "
            >
                <AfyaSmallContainer
                    alignment="row"
                    align="center"
                    justify="space-evenly"
                    outline="none"
                >
                <AfyaTextHolder text="12" size=".85rem" color="#2b1e88" margin="0 1rem 0 0" />
                <AfyaTextHolder text="Mukuru Kwa Reuben " size=".85rem" color="#000000" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


            <AfyaSmallContainer
                alignment="row"
                align="center"
                justify="space-between"
                width="230px"
                radius="5px"
                margin="20px 0 0 0 "
            >
                <AfyaSmallContainer
                    alignment="row"
                    align="center"
                    justify="space-evenly"
                    outline="none"
                >
                <AfyaTextHolder text="26" size=".85rem" color="#2b1e88" margin="0 1rem 0 0" />
                <AfyaTextHolder text="Mukuru Kwa Njenga" size=".85rem" color="#000000" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


             <AfyaSmallContainer
                alignment="row"
                align="center"
                justify="space-between"
                width="230px"
                radius="5px"
                margin="20px 0 0 0 "
            >
                <AfyaSmallContainer
                    alignment="row"
                    align="center"
                    justify="space-evenly"
                    outline="none"
                >
                <AfyaTextHolder text="38" size=".85rem" color="#2b1e88" margin="0 1rem 0 0" />
                <AfyaTextHolder text="Baba Dogo" size=".85rem" color="#000000" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


            <AfyaSmallContainer
                alignment="row"
                align="center"
                justify="space-between"
                width="230px"
                radius="5px"
                margin="20px 0 0 0 "
            >
                <AfyaSmallContainer
                    alignment="row"
                    align="center"
                    justify="space-evenly"
                    outline="none"
                >
                <AfyaTextHolder text="41" size=".85rem" color="#2b1e88" margin="0 1rem 0 0" />
                <AfyaTextHolder text="Kosovo" size=".85rem" color="#000000" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>


            <AfyaSmallContainer
                alignment="row"
                align="center"
                justify="space-between"
                width="230px"
                radius="5px"
                margin="20px 0 0 0 "
            >
                <AfyaSmallContainer
                    alignment="row"
                    align="center"
                    justify="space-evenly"
                    outline="none"
                >
                <AfyaTextHolder text="24" size=".85rem" color="#2b1e88" margin="0 1rem 0 0" />
                <AfyaTextHolder text="Mukuru Kayaba" size=".85rem" color="#000000" />
                </AfyaSmallContainer>
                <MdMoreVert className="visitsIcon" />
            </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Locations;