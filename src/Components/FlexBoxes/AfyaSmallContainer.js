import React from "react";
import "../Styles/AfyaStyles.css";

const AfyaSmallContainer = ({
        children,
        divClass
    }) => {
    return (
        <div className={divClass}>
            {children}
        </div>
    )
}

export default AfyaSmallContainer;