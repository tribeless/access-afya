import React from "react";
import {Typography} from "antd";
import "../../index.css";
import "../Styles/AfyaStyles.css";

const AfyaTextHolder = ({
        text,
        divClass
    }) => {

    const {Text} = Typography;

      return(
            <Text className={divClass}>{text}</Text>
      )
}

export default AfyaTextHolder;