import React from "react"
import Header from "./Header"

const Layout = (props) => (
    <React.Fragment>
        <Header />
        {props.children}
    </React.Fragment>
)

export default Layout