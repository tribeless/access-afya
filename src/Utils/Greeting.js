import React from "react";
import AfyaTextHolder from "../Components/TextBoxes/AfyaTextHolder";

const Greeting = ({name})=>{
    const date = new Date();

     const hours = date.getHours();

     if (hours > 11 && hours < 17) {
         return <AfyaTextHolder size="17px" text={"Good Afternoon " + name} top="0"/>;
     } else if (hours > 16 ) {
         return <AfyaTextHolder size="17px" text={"Good Evening " + name} top="0"/>;
     } else {
         return <AfyaTextHolder size="17px" text={"Good Morning " + name} top="0"/>;
     }
}

export default Greeting;