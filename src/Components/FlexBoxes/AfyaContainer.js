import React from "react";


const AfyaContainer = ({
        children,
        justify,
        align,
        width,
        alignment,
        padding
    }) => {

    const styles = {
        display:"flex",
        flexDirection:alignment || "row",
        justifyContent:justify || "space-evenly",
        alignItems:align || "center",
        padding:padding || "2rem",
        width: width || "auto",
        backgroundColor:"#ffffff"
    }
    return (
       <div style={styles}>{children}</div>
    )
}

export default AfyaContainer;