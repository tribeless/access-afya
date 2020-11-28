import React,{Fragment} from "react";
import Header from "./Header";
import Aside from "./Aside";
import Heading from "./Heading";

const Layout = ()=>{

    return (
        <Fragment>
            <Header />
            <Aside />
            <main>
            <Heading />
            </main>
        </Fragment>
    )
}

export default Layout;