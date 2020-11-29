import React from "react";
import {MdMoreVert} from "react-icons/md";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../Components/TextBoxes/AfyaTextHolder";
import "../../../Components/Styles/AfyaStyles.css";

const Issues = () =>{

    return (
        <AfyaContainer
            alignment="column"
            align="flex-start"
            justify="space-evenly"
            wrap="wrap"
            padding="1rem"
        >
        <AfyaTextHolder
            text="KEY ISSUES"
            size=".7rem"
            color="#8492a0"
        />
        <AfyaSmallContainer
            align="flex-start"
            justify="space-between"
            alignment="row"
            outline="none"
            padding="0"
            wrap="wrap"
        >
            {/* these are the small boxes beginning */}
        <AfyaSmallContainer
            alignment="row"
            align="flex-start"
            justify="space-evenly"
            radius="5px"
            margin="20px 0 0 0 "
        >
            <AfyaSmallContainer
                alignment="column"
                align="flex-start"
                justify="center"
                outline="none"
                padding="0"
            >
                <AfyaTextHolder
                    text="Wrong Prescription"
                    size=".7rem"
                    color="#000000"
                />
                <AfyaTextHolder
                    text="Kosovo"
                    size=".6rem"
                    color="#8492a0"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>
            {/* this is where one ends */}


                        {/* these are the small boxes beginning */}
        <AfyaSmallContainer
            alignment="row"
            align="flex-start"
            justify="space-evenly"
            radius="5px"
            margin="20px 0 0 0 "
            outline="thin solid #3426a4"
        >
            <AfyaSmallContainer
                alignment="column"
                align="flex-start"
                justify="center"
                outline="none"
                padding="0"
            >
                <AfyaTextHolder
                    text="Opened Late"
                    size=".7rem"
                    color="#000000"
                />
                <AfyaTextHolder
                    text="Kiambiu"
                    size=".6rem"
                    color="#8492a0"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>
            {/* this is where one ends */}


                        {/* these are the small boxes beginning */}
        <AfyaSmallContainer
            alignment="row"
            align="flex-start"
            justify="space-evenly"
            radius="5px"
            margin="20px 0 0 0 "
        >
            <AfyaSmallContainer
                alignment="column"
                align="flex-start"
                justify="center"
                outline="none"
                padding="0"
            >
                <AfyaTextHolder
                    text="Bad Receipts"
                    size=".7rem"
                    color="#000000"
                />
                <AfyaTextHolder
                    text="New York"
                    size=".6rem"
                    color="#8492a0"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>
            {/* this is where one ends */}


                        {/* these are the small boxes beginning */}
        <AfyaSmallContainer
            alignment="row"
            align="flex-start"
            justify="space-evenly"
            radius="5px"
            margin="20px 0 0 0 "
        >
            <AfyaSmallContainer
                alignment="column"
                align="flex-start"
                justify="center"
                outline="none"
                padding="0"
            >
                <AfyaTextHolder
                    text="Late Check in"
                    size=".7rem"
                    color="#000000"
                />
                <AfyaTextHolder
                    text="Mathare"
                    size=".6rem"
                    color="#8492a0"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>
            {/* this is where one ends */}


                        {/* these are the small boxes beginning */}
        <AfyaSmallContainer
            alignment="row"
            align="flex-start"
            justify="space-evenly"
            radius="5px"
            margin="20px 0 0 0 "
        >
            <AfyaSmallContainer
                alignment="column"
                align="flex-start"
                justify="center"
                outline="none"
                padding="0"
            >
                <AfyaTextHolder
                    text="Delay in Lab"
                    size=".7rem"
                    color="#000000"
                />
                <AfyaTextHolder
                    text="Kiambiu"
                    size=".6rem"
                    color="#8492a0"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>
            {/* this is where one ends */}


                        {/* these are the small boxes beginning */}
        <AfyaSmallContainer
            alignment="row"
            align="flex-start"
            justify="space-evenly"
            radius="5px"
            margin="20px 0 0 0 "
        >
            <AfyaSmallContainer
                alignment="column"
                align="flex-start"
                justify="center"
                outline="none"
                padding="0"
            >
                <AfyaTextHolder
                    text="Careless waste dis... "
                    size=".7rem"
                    color="#000000"
                />
                <AfyaTextHolder
                    text="Kiambiu"
                    size=".6rem"
                    color="#8492a0"
                />
            </AfyaSmallContainer>
            <MdMoreVert className="visitsIcon" />
        </AfyaSmallContainer>
            {/* this is where one ends */}
        </AfyaSmallContainer>
        </AfyaContainer>
    )
}

export default Issues;
