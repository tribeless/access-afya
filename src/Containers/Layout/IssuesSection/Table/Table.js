import React,{Component} from "react";
import { Progress} from 'antd';
import {RiArrowDropDownFill,RiArrowDropUpFill} from "react-icons/ri";
import AfyaContainer from "../../../../Components/FlexBoxes/AfyaContainer";
import AfyaSmallContainer from "../../../../Components/FlexBoxes/AfyaSmallContainer";
import AfyaTextHolder from "../../../../Components/TextBoxes/AfyaTextHolder";
import {dataset} from "./tableData";
import {columns} from "./columns";
import {percentage} from "./percentage";
import "./table.css"


class TableData extends Component{

    render(){
        return (
 
            <table className="table" >
                <thead>
                <tr className="table-header">
                    {
                        columns.map(({title,key})=>(
                            <th className="theader" key={key}>{title}</th>
                        ))
                    }
                </tr>
               
                </thead>
                <tbody>
                    {
                        dataset.map(({
                                index,
                                staffName,
                                key,
                                efficiency,
                                efficiency2,
                                nps,
                                nps2,
                                rate,
                                issues,
                                number,
                                percent
                            })=>(
                            <tr key={key} className="row">
                                <td className="table-number">{number}</td>
                                <td className="table-data text-main">{staffName}</td>
                                <td className="table-data">
                                     <AfyaTextHolder text={efficiency} />
                                     <AfyaTextHolder divClass="text-dull" text={efficiency2} />
                                    {
                                        key < 3 ? (
                                            <RiArrowDropUpFill className="up" />
                                        ) 
                                        :key ===4 && (
                                            <RiArrowDropDownFill className="down"/>
                                        )
                                    }
                                </td>
                                <td className="table-data">
                                    <AfyaTextHolder text={nps} />
                                    <AfyaTextHolder divClass="text-dull" text={nps2} />
                                    {
                                        key < 3 ? (
                                            <RiArrowDropUpFill className="up" />
                                        ) 
                                        :key ===4 && (
                                            <RiArrowDropDownFill className="down" />
                                        )
                                    }
                                </td>
                                <AfyaContainer divClass="table-holder" >
                                <AfyaSmallContainer divClass="rate">
                                <td >{rate}</td>
                                <Progress 
                                    percent={percent} 
                                    status="active" 
                                    showInfo={false} 
                                    strokeColor="#6c5ce7"
                                    trailColor="#ffffff"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    className="table-progress"
                                /> 
                                </AfyaSmallContainer>
                                <AfyaSmallContainer divClass="issues">
                                <td >{issues}</td>
                                    <Progress 
                                        percent={percentage(issues)} 
                                        status="active" 
                                        showInfo={false} 
                                        strokeColor="#6c5ce7"
                                        trailColor="#ffffff"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        className="table-progress"
                                    /> 
                                </AfyaSmallContainer>
                                </AfyaContainer>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
)
    }
}

export default TableData;
