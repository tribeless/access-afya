import React from "react";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../Components/TextBoxes/AfyaTextHolder";
import "../../../Components/Styles/AfyaStyles.css";


const Monitoring = ()=>{

    return (
        <AfyaContainer
            align="flex-start"
            justify="space-evenly"
            alignment="column"
            padding="1rem"
            margin="20px 0 0 0"
            width="651px"
        >
            <AfyaTextHolder
                text="MONITORING PERIOD"
                size=".7rem"
                color="#8492a0"
            />
            <AfyaSmallContainer
                align="flex-start"
                justify="space-between"
                alignment="row"
                outline="none"
                margin="20px 0 0 0 "
                padding="0"
            >
                <AfyaSmallContainer
                    align="center"
                    justify="space-between"
                    alignment="row"
                    margin="0 20px 0 0"
                >
                    {/* begin individual */}
                    <AfyaSmallContainer
                        outline="none"
                        align="center"
                        justify="center"
                         margin="0 10px 0 0"
                    >
                         <AfyaTextHolder
                            text="Day"
                            size=".7rem"
                            color="#8492a0"
                        />
                    </AfyaSmallContainer>

                    <AfyaSmallContainer
                        outline="none"
                        align="center"
                        justify="center"
                         margin="0 10px 0 0"
                    >
                         <AfyaTextHolder
                            text="Week"
                            size=".7rem"
                            color="#8492a0"
                        />
                    </AfyaSmallContainer>

                    <AfyaSmallContainer
                        outline="thin solid #3426a4"
                        align="center"
                        justify="center"
                        margin="0 10px 0 0"
                    >
                         <AfyaTextHolder
                            text="Month"
                            size=".7rem"
                            color="#8492a0"
                        />
                    </AfyaSmallContainer>

                    <AfyaSmallContainer
                        outline="none"
                        align="center"
                        justify="center"
                        margin="0 10px 0 0"
                    >
                         <AfyaTextHolder
                            text="Year"
                            size=".7rem"
                            color="#8492a0"
                        />
                    </AfyaSmallContainer>
                </AfyaSmallContainer>

                <AfyaSmallContainer
                    align="center"
                    justify="space-between"
                    alignment="row"
                    padding="1rem"
                >
                    <AfyaTextHolder text="10 Dec 2019-10 Jan 2020" color="#3426a4" size=".7rem" />
                </AfyaSmallContainer>
            </AfyaSmallContainer>
        </AfyaContainer>

    )
}

export default Monitoring;