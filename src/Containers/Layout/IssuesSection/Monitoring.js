import React from "react";
import AfyaContainer from "../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../Components/TextBoxes/AfyaTextHolder";
import "../../../Components/Styles/AfyaStyles.css";


const Monitoring = ()=>{

    return (
        <AfyaContainer divClass="main-mon-container">
            <AfyaTextHolder
                text="MONITORING PERIOD"
                divClass="mon-main-text"
            />
            <AfyaSmallContainer divClass="mon-sub-container">
                <AfyaSmallContainer divClass="mon-sub-one">
                    {/* begin individual */}
                    <AfyaSmallContainer divClass="mon-sub-two">
                         <AfyaTextHolder
                            text="Day"
                            divClass="mon-text"
                        />
                    </AfyaSmallContainer>

                    <AfyaSmallContainer divClass="mon-sub-two">
                         <AfyaTextHolder
                            text="Week"
                            divClass="mon-text"
                        />
                    </AfyaSmallContainer>

                    <AfyaSmallContainer divClass="mon-sub-two active">
                         <AfyaTextHolder
                            text="Month"
                            divClass="mon-text"
                        />
                    </AfyaSmallContainer>

                    <AfyaSmallContainer divClass="mon-sub-two">
                         <AfyaTextHolder
                            text="Year"
                            divClass="mon-text"
                        />
                    </AfyaSmallContainer>
                </AfyaSmallContainer>

                <AfyaSmallContainer divClass="mon-bottom">
                    <AfyaTextHolder text="10 Dec 2019-10 Jan 2020" divClass="mon-bottom-text" />
                </AfyaSmallContainer>
            </AfyaSmallContainer>
        </AfyaContainer>

    )
}

export default Monitoring;