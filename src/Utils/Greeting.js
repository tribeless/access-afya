import React from "react";
import AfyaTextHolder from "../Components/TextBoxes/AfyaTextHolder";

const Greeting = ({name,divClass})=>{
    const date = new Date();

     const hours = date.getHours();

     if (hours > 11 && hours < 17) {
         return <AfyaTextHolder divClass={divClass} text={"Good Afternoon " + name} />;
     } else if (hours > 16 ) {
         return <AfyaTextHolder divClass={divClass} text={"Good Evening " + name} />;
     } else {
         return <AfyaTextHolder divClass={divClass}  text={"Good Morning " + name} />;
     }
}

export default Greeting;