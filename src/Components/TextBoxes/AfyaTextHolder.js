import React from "react";
import {Typography} from "antd";
import "../../index.css";

const AfyaTextHolder = ({
        title,
        text,
        color,
        size,
        margin
    }) => {

    const {
        Title,
        Text
    } = Typography;

      const styles={
            color:color || "#000000",
            fontSize: size || "1.625rem",
            margin:margin || "0"
      }
        if(title){
              return <Title className="fontStyle" level={2} style={styles}>{title}</Title>
        }
        else if(text){
              return <Text className="fontStyle" style={styles}>{text}</Text>
        } 
        else{
              return <Text className="fontStyle" style={styles}>{text}</Text>
       }
}

export default AfyaTextHolder;