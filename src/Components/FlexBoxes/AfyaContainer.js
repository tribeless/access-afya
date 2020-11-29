import React from "react";


const AfyaContainer = ({
        children,
        justify,
        display,
        align,
        width,
        alignment,
        padding,
        height,
        position,
        left,
        margin,
        color,
        top,
        wrap
    }) => {

    const styles = {
        display:display || "flex",
        flexDirection:alignment || "row",
        justifyContent:justify || "space-evenly",
        alignItems:align || "center",
        padding:padding || "2rem",
        width: width || "auto",
        backgroundColor:color || "#ffffff",
        height:height || "auto",
        position:position || "static",
        left:left || "0",
        margin:margin || "0",
        top:top || "0",
        flexWrap:wrap || "nowrap"
    }
    return (
       <div style={styles}>{children}</div>
    )
}

export default AfyaContainer;