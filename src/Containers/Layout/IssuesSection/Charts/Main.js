import React,{Component} from "react";
import AfyaContainer from "../../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../../Components/TextBoxes/AfyaTextHolder";
import "./Chart.css";
import {infoDataset} from "./Dataset/InfoDataset";
import Charts from "./Chart";

class MainChart extends Component{

    render(){
    return (
        <AfyaContainer divClass="main-container">
            {
                infoDataset.map(item=>
                    (
                    <React.Fragment key={item.key}>
                        <AfyaContainer divClass="sub-main">
                        <AfyaTextHolder text={item.main}  divClass="main-text" />
                                <AfyaSmallContainer divClass="main">
                                    <AfyaSmallContainer divClass="sub">
                                        <AfyaTextHolder text={item.number}  divClass="sub-text text-margin" />
                                        <AfyaTextHolder text={item.affected}  divClass="sub-text-two" />
                                        <AfyaTextHolder text={item.index}  divClass={ item.key==="2" ? "sub-text-three text-margin active" : "sub-text-three text-margin"} />
                                    </AfyaSmallContainer>
                                    <AfyaSmallContainer divClass="chart">
                                        <Charts dataset={item.dataSet} color={item.colors} />
                                    </AfyaSmallContainer>
                                </AfyaSmallContainer>
                        </AfyaContainer>
                    </React.Fragment>
                    ))
                
            }
            
        </AfyaContainer>
    )
    }
}

export default MainChart;