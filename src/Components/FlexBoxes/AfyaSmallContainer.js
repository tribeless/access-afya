import React from "react";

const AfyaSmallContainer = ({
        children,
        justify,
        align,
        outline,
        alignment,
        margin
    }) => {

    const styles = {
        display:"flex",
        flexDirection:alignment || "row",
        justifyContent:justify || "center",
        alignItems:align || "center",
        outline:outline ||"thin solid #dfe6e9",
        padding:".5rem",
        marginRight: margin || "0"
    }

    return (
        <div style={styles}>
            {children}
        </div>
    )
}

export default AfyaSmallContainer;