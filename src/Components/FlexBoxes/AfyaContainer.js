import React from "react";
import "../Styles/AfyaStyles.css";

const AfyaContainer = ({
        children,
        divClass
    }) => {
    return (
       <div className={divClass}>{children}</div>
    )
}

export default AfyaContainer;