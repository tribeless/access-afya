import React,{Fragment} from "react";
import Header from "./Header";
import Aside from "./Aside";
import Heading from "./Heading";
import Locations from "./Locations/Locations";
import Main from "./IssuesSection/Main";

const Layout = ({firstname,lastname,email})=>{

    return (
        <Fragment>
            <Header 
                firstname={firstname}
                lastname={lastname}
                email={email}
            />
            <Aside />
            <main>
            <Heading />
            <Locations />
            <Main />
            </main>
        </Fragment>
    )
}

export default Layout;