import React from "react";

const AfyaSmallContainer = ({
        children,
        justify,
        align,
        outline,
        alignment,
        margin,
        color,
        width,
        padding,
        radius,
        wrap
    }) => {

    const styles = {
        display:"flex",
        flexDirection:alignment || "row",
        justifyContent:justify || "center",
        flexWrap:wrap || "nowrap",
        alignItems:align || "center",
        outline:outline ||"thin solid #dfe6e9",
        padding:padding || ".5rem",
        margin: margin || "0",
        backgroundColor:color || "#ffffff",
        width:width || "auto",
        borderRadius: radius || "0"
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default AfyaSmallContainer;