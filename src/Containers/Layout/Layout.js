import React,{Fragment} from "react";
import Header from "./Header";
import Aside from "./Aside";
import Heading from "./Heading";
import Locations from "./Locations";
import Main from "./IssuesSection/Main";

const Layout = ()=>{

    return (
        <Fragment>
            <Header />
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