import React,{Component} from "react";
import AfyaContainer from "../../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../../Components/TextBoxes/AfyaTextHolder";
import {dataset} from "./tableData";
import {columns} from "./columns";
import "./table.css"

class TableData extends Component{

    render(){
        return (
            <AfyaContainer divClass="main-table">
                {/* <AfyaSmallContainer divClass="sub-table top">
                {
                    columns.map(item=>(
                        <React.Fragment key={item.key}>
                            <AfyaSmallContainer divClass="content-holder">
                                <AfyaTextHolder text={item.title} />
                            </AfyaSmallContainer>
                        </React.Fragment>
                    ))
                }
            </AfyaSmallContainer> */}
                {
                    dataset.map(item=>(
                        <React.Fragment key={item.key}>
                            
                        <AfyaSmallContainer divClass="sub-table content">
                                <AfyaTextHolder text={item.name} divClass="table-text top" />
                            <hr divClass="bottom-border" />
                            <AfyaTextHolder text={item.valueone} divClass="table-text content" />
                            <AfyaTextHolder text={item.valuetwo} divClass="table-text content" />
                            <AfyaTextHolder text={item.valuethree} divClass="table-text content" />
                            <AfyaTextHolder text={item.valuefour}  divClass="table-text content bottom" />
                            {/* <AfyaTextHolder text={item.issues} /> */}
                        </AfyaSmallContainer>
                        </React.Fragment>
                    ))
                }
                
                <AfyaSmallContainer divClass="sub-table">

                </AfyaSmallContainer>
            </AfyaContainer>
        )
    }
}

export default TableData;