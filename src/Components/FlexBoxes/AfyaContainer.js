import React from "react";


const AfyaContainer = ({
        children,
        justify,
        align,
        width,
        alignment,
        padding,
        height,
        position,
        left,
        margin,
        color
    }) => {

    const styles = {
        display:"flex",
        flexDirection:alignment || "row",
        justifyContent:justify || "space-evenly",
        alignItems:align || "center",
        padding:padding || "2rem",
        width: width || "auto",
        backgroundColor:color || "#ffffff",
        height:height || "auto",
        position:position || "static",
        left:left || "0",
        margin:margin || "0"
    }
    return (
       <div style={styles}>{children}</div>
    )
}

export default AfyaContainer;